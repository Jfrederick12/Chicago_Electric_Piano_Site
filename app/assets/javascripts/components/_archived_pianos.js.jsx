const ArchivedPianos = React.createClass({

  getInitialState() {
    return {
      searchPianos: []
    }
  },

  handleClick(make) {
    const fenderPianos = this.props.pianos.filter((piano) => {
      return piano.make === make
    });
    this.setState({ searchPianos: fenderPianos, open: !this.state.open })
  },

  render() {
    // React-Bootstrap Assets
    const Grid = ReactBootstrap.Grid;
    const Row = ReactBootstrap.Row;
    const Col = ReactBootstrap.Col;
    const Panel = ReactBootstrap.Panel;
    const Jumbotron = ReactBootstrap.Jumbotron;
    // End of Assets

    const pianos = this.props.pianos.map((piano) => {
      return (
        <container className="main-thumbnail" key={piano.id}>
          <a>
            <figure>
              < PianoContainer piano={piano}/>
            </figure>
          </a>
        </container>
      )
    });

    return(
        <Jumbotron className="archive-jumbo">
          <h1>From the Archives</h1>
          <p className="border-divider">Some of the pianos that we're most proud of</p>
          { pianos }
        </Jumbotron>
    )
  }
})