const PostContainer = React.createClass({
  render() {
    return(
      <div className="post-container">
        <span>{this.props.post.name}</span><span>{this.props.post.pretty_time}</span>
        <p>{this.props.post.body}</p>
        < CommentList post={this.props.post} />
      </div>
    )
  }
})

// < CommentList postId={this.props.id}/>