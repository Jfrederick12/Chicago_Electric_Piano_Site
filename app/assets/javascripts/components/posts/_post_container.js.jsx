const PostContainer = React.createClass({
  render() {
    return(
      <div className="post-container">
        <h3>{this.props.post.name}</h3>

      </div>
    )
  }
})

// < CommentList postId={this.props.id}/>