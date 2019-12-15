import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


import Feed from './Feed';


export const FEED_QUERY = gql`
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

const NEW_FEEDS_SUBSCRIPTION = gql`
  subscription {
    newFeed {
      id
      url
      description
      createdAt
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
`

const NEW_VOTES_SUBSCRIPTION = gql`
  subscription {
    newVote {
      id
      feed {
        id
        url
        description
        createdAt
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
      user {
        id
      }
    }
  }
`

class FeedList extends Component {

  _updateCacheAfterVote = (store, createVote, feedId) => {
    const data = store.readQuery({ query: FEED_QUERY })
  
    const votedFeed = data.feeds.feeds.find(feed => feed.id === feedId)
    votedFeed.votes = createVote.feed.votes
  
    store.writeQuery({ query: FEED_QUERY, data })
  }
  _subscribeToNewFeeds = subscribeToMore => {
    
    subscribeToMore({
      document: NEW_FEEDS_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev
        const newFeed = subscriptionData.data.newFeed
        const exists = prev.feeds.feeds.find(({ id }) => id === newFeed.id);
        if (exists) return prev;
  
        return Object.assign({}, prev, {
          feeds: {
            feeds: [newFeed, ...prev.feeds.feeds],
            count: prev.feeds.feeds.length + 1,
            __typename: prev.feeds.__typename
          }
        })
      }
    })
  }

  _subscribeToNewVotes = subscribeToMore => {
    subscribeToMore({
      document: NEW_VOTES_SUBSCRIPTION
    })
  }

  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data, subscribeToMore }) => {

          if (loading) return <div>Fetching... </div>
          if(error) return <div>Error</div>

          this._subscribeToNewFeeds(subscribeToMore)
          this._subscribeToNewVotes(subscribeToMore)

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