const TuningContainer = React.createClass({

	render() {
		return(
			<div className="col">
				<h3>{this.props.service.name}</h3>
				<p>{this.props.service.description}</p>
			</div>
		)
	}
})