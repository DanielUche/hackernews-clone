import React, { Component } from 'react';
import Feed from './Feed';

class FeedList extends Component {
  render() {
    const feedsToRender = [
      {
        id: '1',
        description: 'Prisma turns your database into a GraphQL API 😎',
        url: 'https://www.prismagraphql.com',
      },
      {
        id: '2',
        description: 'The best GraphQL client',
        url: 'https://www.apollographql.com/docs/react/',
      },
    ]

    return (
      <div>{feedsToRender.map(feed => <Feed key={feed.id} feed={feed} />)}</div>
    )
  }
}

export default FeedList