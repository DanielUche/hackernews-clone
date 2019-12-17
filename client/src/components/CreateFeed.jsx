import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { FEED_QUERY } from './FeedList'
import {FEEDS_PER_PAGE} from '../constants';

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    newFeed(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`

class CreateFeed extends Component {
  state = {
    description: '',
    url: '',
  }

  render() {
    const { description, url } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the feed"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the feed"
          />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ description, url }}
          onCompleted={() => this.props.history.push('/new/1')}
          update={(store, { data: { post } }) => {
            const first = FEEDS_PER_PAGE
            const skip = 0
            const orderBy = 'createdAt_DESC'
            const data = store.readQuery({
              query: FEED_QUERY,
              variables: { first, skip, orderBy }
            })
            data.feed.feeds.unshift(post)
            store.writeQuery({
              query: FEED_QUERY,
              data,
              variables: { first, skip, orderBy }
            })
          }}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateFeed