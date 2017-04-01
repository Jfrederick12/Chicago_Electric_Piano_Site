const ServicesHeader = React.createClass({
	getInitialState() {
		return {
			open: false
		}
	},
  render() {
    const Panel = ReactBootstrap.Panel;
    const Jumbotron = ReactBootstrap.Jumbotron;

	return(
	  <div>
		  <Jumbotron className="service-jumbo">
        <h1>About Our Services</h1>
        <p className="border-divider">We take pride in our work while offering a wide variety of electric pianos. Blah blah blah, more content would fill in here.</p>
        <div className="select-options">
          <div className="piano-select-container">
            <div className="service-button" onClick={ ()=> this.setState({ open: !this.state.open })}>
              <div className="service-eff"></div>
              <a>Services</a>
            </div>
          </div>
        </div>
		  </Jumbotron>
	  </div>
	)
  }
})

// <Panel collapsible expanded={this.state.open}>
//             < ServicesContainer />
//           </Panel>