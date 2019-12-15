import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


import Feed from './Feed';


const FEED_QUERY = gql`
  {
    feeds {
      feeds {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

const _updateCacheAfterVote = (store, createVote, feedId) => {
  const data = store.readQuery({ query: FEED_QUERY })

  const votedLink = data.feed.feeds.find(feed => feed.id === feedId)
  votedLink.votes = createVote.feed.votes

  store.writeQuery({ query: FEED_QUERY, data })
}

class FeedList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {

          if (loading) return <div>Fetching... </div>
          if(error) return <div>Error</div>

          const feedsToRender = data.feeds.feeds

          return (
            <div>
                {feedsToRender.map((feed, i) => <Feed updateStoreAfterVote={this._updateCacheAfterVote} key={feed.key + `i-${i}`} feed={{...feed, index: i}} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default FeedList