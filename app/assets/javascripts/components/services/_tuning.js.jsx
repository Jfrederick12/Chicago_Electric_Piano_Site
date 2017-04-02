const Tuning = React.createClass({
	render() {
		const tuningServices = [
			{ description: "this is a thing" },
			{ description: "this is another thing"}
		]

		const services = tuningServices.map((service) => {
			return (
				<div>
					< TuningContainer service={service.description} />
				</div>
			)
		})

		return(
			<div className="service-container">
		    <div className="tuning-left">
		    	<h1>Tuning</h1>
		    </div>
			  <div className="tuning-right">
			  	{services}
			  </div>
			</div>
		)
	}
})
