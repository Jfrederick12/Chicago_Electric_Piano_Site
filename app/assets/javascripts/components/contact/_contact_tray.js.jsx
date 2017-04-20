const ContactTray = React.createClass({
	render() {
		const Grid = ReactBootstrap.Grid;
    const Col = ReactBootstrap.Col;
    const Row = ReactBootstrap.Row;

		return(
			<div className="contact-tray">
		    <Grid>
		    	<Row>
		    		<Col xs={6} md={6}>
				    	<h1>Contact</h1>
				    	< SocialLinkTray />
				    	<p>The Chicago Electric Piano Co. is currently operating out of a warehouse at 3600 W Potomac (See mailing address for package receiving). Since the space does not have a door that opens directly to the street, The Chicago Electric Piano Co. works by appointment only. Our schedule is extremely flexible and appointments are available 8:00am-10:00pm Monday-Sunday.</p>
				    	<p>Loading Instructions: When you arrive at the warehouse you will see a gated parking lot at the far west end of the building adjacent to the alley. Please call us a call at (312)476-9528 and we will come out to open the gate for you to pull right up to our front door.</p>
				    	<h3>Check our Reverb shop</h3>
				    	<a href='#' className="social-icon"> <i className='fa fa-twitter fa-2x'></i></a>
			    	</Col>
			    	<Col xs={6} md={6}>
			    	  < ReactForm />
			    	</Col>
					</Row>
		    </Grid>	
			</div>
		)
	}
})