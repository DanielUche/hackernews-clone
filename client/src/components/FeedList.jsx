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
      }
    }
  }
`

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
                        {feedsToRender.map((feed, i) => <Feed key={feed.key + `i-${i}`} feed={feed} />)}
                    </div>
                )

            }}
        </Query>
        )
  }
}

export default FeedList