const Tuning = React.createClass({
	render() {
		const Grid = ReactBootstrap.Grid;
    const Col = ReactBootstrap.Col;
    const Row = ReactBootstrap.Row;

		const Services = [
			{ name: "Just Tuning",
				description: "Basic tuning service for well-maintained instruments",
				price: "$80-120",
				subText: "For well-maintained instruments",
				includes: " "
		  },
			{ name: "The Standard Tuneup",
				description: "Standard tuneups are necessary to ensure the health of any electro-mechanical instrument. Our Standard Tuneup is the most comprehensive basic setup and tuning service available for your Rhodes or Wurlitzer and is focused at providing the most appropriate ways of maintaining the health and function of the instrument. With the right foundation, it is guaranteed to restore the tuning, voicing, and action/regulation adjustments. This tuneup is recommended every six months to two years depending on use and is critical for maintaining the health and voice of your instrument.",
				price: "$150-450",
				subText: "For most instruments",
				includes: [
					"Precision tuning Strobe tuning followed by fine tuning by ear for more ‘pure’ fifths for a well-tempered scale within the instrument.", 
					"Interior Cleaning and Lubrication to aid the future health of the instrument.",
					"Even voicing and proper dynamics for each note to bring out the volume, harmonics, and setup of a better dynamic range of the keys and action assembly.",
					"Action inspection and basic adjustments to keep the keyboard operating in a healthy and expressive dynamic range."
				]
			},
						{ name: "The Standard Tuneup",
				description: "Standard tuneups are necessary to ensure the health of any electro-mechanical instrument. Our Standard Tuneup is the most comprehensive basic setup and tuning service available for your Rhodes or Wurlitzer and is focused at providing the most appropriate ways of maintaining the health and function of the instrument. With the right foundation, it is guaranteed to restore the tuning, voicing, and action/regulation adjustments. This tuneup is recommended every six months to two years depending on use and is critical for maintaining the health and voice of your instrument.",
				price: "$150-450",
				subText: "For most instruments",
				includes: [
					"Precision tuning Strobe tuning followed by fine tuning by ear for more ‘pure’ fifths for a well-tempered scale within the instrument.", 
					"Interior Cleaning and Lubrication to aid the future health of the instrument.",
					"Even voicing and proper dynamics for each note to bring out the volume, harmonics, and setup of a better dynamic range of the keys and action assembly.",
					"Action inspection and basic adjustments to keep the keyboard operating in a healthy and expressive dynamic range."
				]
			}
		]

		return(
			<div className="tuning-container">
				<ServicesHeader />
				<Grid>
					<Row>
						{Services.map((service) => {
							return <Col xs={6} md={4}>< TuningContainer service={service} /></Col>
						})}
					</Row>
				</Grid>
			</div>
		)
	}
})

			//<div className="service-container">
		    // <div className="tuning-left">
		    // </div>
			  // <div className="tuning-right">
			  	// {services}
			  // </div>
			// </div>
