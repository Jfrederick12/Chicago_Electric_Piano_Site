const Tuning = React.createClass({
	render() {
		const Grid = ReactBootstrap.Grid;
    const Col = ReactBootstrap.Col;
    const Row = ReactBootstrap.Row;

		const Services = [
			// { name: "Just Tuning",
			// 	description: "Basic tuning service for well-maintained instruments",
			// 	price: "$80-120",
			// 	subText: "For well-maintained instruments",
			// 	includes: " "
		 //  },
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
			{ name: "The Works: Repairs to Partial Restorations",
				description: "The Works begins to take your Rhodes or Wurlitzer beyond the limits of its aging components and begins to restore vital aspects of the instrument for coming years and decades. Depending on the condition of your instrument our free diagnosis will target the most critical parts that need restoration before the work begins.",
				price: "$500-1,000+",
				subText: "Instruments that need intensive care",
				includes: [
					"Restoring the Key Bed and Action: Depending on the condition of the instrument, restoring the action of a vintage keyboard should always begin with a completely level key bed and rebuild. Our workshop is one of the only shops that has the specialized expertise to restore any Rhodes or Wurlitzer to the expressive touch and dynamic play that they were originally designed for.", 
					"Updating Aging Components: Our workshop sources only the highest quality parts from the finest acoustic piano felts to the best reproduction parts and NOS whenever available. Many of the original parts of vintage instruments have aged to a point where they must be replaced to keep the instrument operating properly and we have tested parts from all manufacturers in order to guarantee the quality of the parts that we use in the restoration process.",
					"Inspecting and Updating Electronics: Many of the electronic components that were used in vintage amplifiers and electronics were never predicted to have a working life of more than just a couple decades. Only a full service inspection of the amplifier or electronics can provide the insurance that all the components are still working properly. Other electronics components have become outdated and require that we update them for safety or convenience of use."
				]
			},
			{ name: "The Rebirth: Complete Restoration Services",
				description: "The Rebirth is our flagship restoration service that brings any Rhodes or Wurlitzer to better-than-new condition. Every part of your Rhodes and Wurlitzer is inspected and rebuilt from the key bed up giving greater attention to details of the processes than they gave at the factories where the instruments were mass-assembled. We fine tuning each individual part to insure that your instrument will once again be ready for the decades to come.",
				price: "$1,500-3,000+",
				subText: "Better than new",
				includes: []
			}
		]


		return(
			<div className="tuning-container">
				< ServicesHeader />
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
