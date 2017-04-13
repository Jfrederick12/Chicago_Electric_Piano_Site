const PostContainer = React.createClass({
	getInitialState() {
		return {
			open: false
		}
	},

  render() {
  	const Panel = ReactBootstrap.Panel;

    return(
      <div className="post-container">
        <span>{this.props.post.name}</span><span>{this.props.post.pretty_time}</span>
        <p>{this.props.post.body}</p>
        < CommentList post={this.props.post} />

        <div className="comment">
	        <button onClick={ ()=> this.setState({ open: !this.state.open })}>
	          Comment
	        </button>
	        <Panel className="panel" collapsible expanded={this.state.open}>
			      < NewComment post={this.props.post} />
		      </Panel>
	      </div>

      </div>
    )
  }
})

// < CommentList postId={this.props.id}/>