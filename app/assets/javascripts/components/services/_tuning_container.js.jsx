const TuningContainer = React.createClass({

	render() {
		return(
			<div className="service shadow">
				<h3>{this.props.service.name}</h3>
				<p>Pricing: {this.props.service.price}</p>
				<p>{this.props.service.description}</p>
			</div>
		)
	}
})