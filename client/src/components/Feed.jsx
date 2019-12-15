import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { AUTH_TOKEN } from '../constants';
import { timeDifferenceForDate} from '../utils';

const VOTE_MUTATION = gql`
  mutation VoteMutation($feedId: ID!) {
    vote(feedId: $feedId) {
      id
      feed {
       id
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

class Feed extends Component {

  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
          <span className="gray">{this.props.feed.index + 1}.</span>
          {authToken && (
            <Mutation mutation={VOTE_MUTATION} variables={{ feedId: this.props.feed.id }}>
            {voteMutation => (
              <div className="ml1 gray f11" onClick={voteMutation}>
                ▲
              </div>
            )}
          </Mutation>
          )}
        </div>
        <div className="ml1">
          <div>
            {this.props.feed.description} ({this.props.feed.url})
          </div>
          <div className="f6 lh-copy gray">
            {this.props.feed.votes.length} votes | by{' '}
            {this.props.feed.postedBy
              ? this.props.feed.postedBy.name
              : 'Unknown'}{' '}
            {timeDifferenceForDate(this.props.feed.createdAt)}
          </div>
        </div>
      </div>
    )
  }
}

export default Feed;