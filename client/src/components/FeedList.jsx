import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


import Feed from './Feed';
import { FEEDS_PER_PAGE } from '../constants'; 


export const FEED_QUERY = gql`
  query FeedQuery($first: Int, $skip: Int, $orderBy: FeedOrderByInput) {
    feeds(first: $first, skip: $skip, orderBy: $orderBy) {
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
      count
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
    const isNewPage = this.props.location.pathname.includes('new')
    const page = parseInt(this.props.match.params.page, 10)
  
    const skip = isNewPage ? (page - 1) * FEEDS_PER_PAGE : 0
    const first = isNewPage ? FEEDS_PER_PAGE : 100
    const orderBy = isNewPage ? 'createdAt_DESC' : null
    const data = store.readQuery({
      query: FEED_QUERY,
      variables: { first, skip, orderBy }
    })
  
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

  _getQueryVariables = () => {
    const isNewPage = this.props.location.pathname.includes('new');
    const page = parseInt(this.props.match.params.page, 10);
  
    const skip = isNewPage ? (page - 1) * FEEDS_PER_PAGE : 0;
    const first = isNewPage ? FEEDS_PER_PAGE : 100;
    const orderBy = isNewPage ? 'createdAt_DESC' : null;
    return { first, skip, orderBy };
  }

  _getFeedsToRender = data => {
    const isNewPage = this.props.location.pathname.includes('new');
    if (isNewPage) {
      return data.feeds.feeds;
    }
    const rankedFeeds = data.feeds.feeds.slice();
    rankedFeeds.sort((l1, l2) => { 
      return l2.votes.length - l1.votes.length;
    });
    return rankedFeeds;
  }

  _nextPage = data => {
    const page = parseInt(this.props.match.params.page, 10)
    if (page <= data.feeds.count / FEEDS_PER_PAGE) {
      const nextPage = page + 1
      this.props.history.push(`/new/${nextPage}`)
    }
  }
  
  _previousPage = () => {
    const page = parseInt(this.props.match.params.page, 10)
    if (page > 1) {
      const previousPage = page - 1
      this.props.history.push(`/new/${previousPage}`)
    }
  }

  render() {
    return (  
      <Query query={FEED_QUERY} variables={this._getQueryVariables()}>
        {({ loading, error, data, subscribeToMore }) => {

          if (loading) return <div>Fetching... </div>
          if(error) return <div>Error</div>

          this._subscribeToNewFeeds(subscribeToMore)
          this._subscribeToNewVotes(subscribeToMore)

          const feedsToRender = this._getFeedsToRender(data);
          const isNewPage = this.props.location.pathname.includes('new');
          const pageIndex = this.props.match.params.page
            ? (this.props.match.params.page - 1) * FEEDS_PER_PAGE
            : 0;

          // const feedsToRender = data.feeds.feeds

          return (
            <Fragment>
              {feedsToRender.map((feed, i) => (
                <Feed 
                  updateStoreAfterVote={this._updateCacheAfterVote} 
                  key={feed.key + `i-${i}`} 
                  feed={{...feed, index: i}} 
                  index={i + pageIndex}
                />
                ))}
                {isNewPage && (
                  <div className="flex ml4 mv3 gray">
                    <div className="pointer mr2" onClick={this._previousPage}>
                      Previous
                    </div>
                    <div className="pointer" onClick={() => this._nextPage(data)}>
                      Next
                    </div>
                  </div>
                )}
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export default FeedList