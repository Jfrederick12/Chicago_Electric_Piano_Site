const NewComment = React.createClass({

	handleClick() {
		const body = this.refs.body.value; 
		const commenter = this.refs.commenter.value; 

		$.ajax({
			url: `posts/${this.props.post.id}/comments`,
			type: 'POST',
			data: { comment: { body: body, commenter: commenter } },
			success: (response) => {
				console.log('it worked', response);
			}
		})

	},

	render() {
		return(
			<ul className="add-comment">
				<li><textarea ref='body' cols="50" rows="10" placeholder='comment'></textarea></li>
				<li><input ref='commenter' placeholder='Your Name' /></li>
				<li>
					<div className="add-button" onClick={this.handleClick}>
						<div className="eff-1"></div>
						<a>Submit</a>
					</div>
				</li>		
			</ul>
		)
	}
})