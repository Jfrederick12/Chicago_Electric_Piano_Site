const PianosList = React.createClass({

  getInitialState() {
    return {
      pianos: [],
      searchPianos: []
    }
  },

  componentDidMount() {
    $.getJSON('/api/v1/pianos.json', (response) => { this.setState({
        pianos: response
      })
    });
  },

  handleClick(make) {
    const fenderPianos = this.state.pianos.filter((piano) => {
      return piano.make === make
    });
    this.setState({ searchPianos: fenderPianos })
  },

  panelClick() {
    alert('click worked')
  },

  render() {
    // React-Bootstrap Assets
    const Grid = ReactBootstrap.Grid;
    const Row = ReactBootstrap.Row;
    const Col = ReactBootstrap.Col;
    const Panel = ReactBootstrap.Panel;
    // End of Assets

    const pianos = this.state.searchPianos.map((piano) => {
      return (
        <container key={piano.id}>
          <a>
            <figure>
              < PianoContainer piano={piano}/>
            </figure>
          </a>
        </container>
      )
    });

    return(
      <div>
        <button onClick={() => this.handleClick('Fender Rhodes')}>Fender Rhodes</button>
        <button onClick={() => this.handleClick('Wurlitzer')}>Wurlitzer</button>
        <div className="piano-list-container">
          { pianos }
        </div>
      </div>
    )
  }
})

