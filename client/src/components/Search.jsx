import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import Feed from './Feed'

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feeds(filter: $filter) {
      feeds {
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
  }
`


class Search extends Component {

  state = {
    feeds: [],
    filter: ''
  }

  _executeSearch = async () => {
    const { filter } = this.state
    const result = await this.props.client.query({
      query: FEED_SEARCH_QUERY,
      variables: { filter },
    })
    const feeds = result.data.feeds.feeds
    this.setState({ feeds })
  }

  render() {
    return (
      <div>
        <div>
          Search
          <input
            type='text'
            onChange={e => this.setState({ filter: e.target.value })}
          />
          <button onClick={() => this._executeSearch()}>OK</button>
        </div>
        {this.state.feeds.map((feed, index) => (
          <Feed key={feed.id} feed={feed} index={index} />
        ))}
      </div>
    )
  }
}

export default withApollo(Search)