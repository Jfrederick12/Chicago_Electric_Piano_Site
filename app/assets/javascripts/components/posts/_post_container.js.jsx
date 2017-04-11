const PostContainer = React.createClass({
  render() {
    return(
      <div className="post-container">
        <h1>{this.props.post.name}</h1>
      </div>
    )
  }
})