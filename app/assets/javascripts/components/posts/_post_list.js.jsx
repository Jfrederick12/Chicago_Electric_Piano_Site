const PostList = React.createClass({
  getInitialState() {
    return {
      posts: []
    }
  },

  componentDidMount() {
    $.getJSON('/posts.json', (response) => { this.setState({
        posts: response
      })
    });
  },

  render() {
    return(
      <div>
        {this.state.posts.map((post) => {
          return <container key={post.id}>< PostContainer post={post} /></container>
        })}
      </div>
    )
  }
})