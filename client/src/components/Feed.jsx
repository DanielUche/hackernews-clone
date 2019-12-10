import React, { Component } from 'react'

class Feed extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.feed.description} ({this.props.feed.url})
        </div>
      </div>
    )
  }
}

export default Feed;