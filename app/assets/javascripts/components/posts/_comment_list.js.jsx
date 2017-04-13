const CommentList = React.createClass({
  getInitialState() {
    return {
      comments: []
    }
  },

  componentDidMount() {
    $.getJSON(`posts/${this.props.post.id}/comments.json`, (response) => { 
    	this.setState({
        comments: response
      })
    });
  },

  render() {
  	console.log(this.state.comments.length)
  	if (this.state.comments.length !== 0) {
	    return(
	      <div className="comments">
	      	{ this.state.comments.map((comment) => {
	      		return (
	      			<div className="post-comments">
			      		<p>{comment.body}</p>
			      		<p> - {comment.commenter}</p>
			      		<p> {comment.pretty_time} </p>
			      	</div>
	      		)
	      	})}
	      </div>
	    )
	  } else {
	  	return (
	  		<div>
	  		</div>
	  	)
	  }
  }
})