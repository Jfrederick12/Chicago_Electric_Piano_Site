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
    const oldArray = [1, 2, 3, 4, 5];
    const newArray = [];
    const ranger = () => {
      for (var i = 0; i < 3; i++); {
        newArray.push(oldArray[i])
      }
      return newArray;
    }

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
        <Jumbotron className="jumbo">
          <h1>Browse our selection!</h1>
          <p className="border-divider">We take pride in our work while offering a wide variety of electric pianos. Blah blah blah, more content would fill in here.</p>
          <div className="select-options">
            <div className="piano-select-container">
              <img src="https://github.com/Jfrederick12/Chicago_Electric_Piano_Site/blob/master/app/assets/images/wurlitzer_icon.png?raw=true" height='100%' width='100%' />
              <div className="button-1">
                <div className="eff-1"></div>
                <a onClick={() => this.handleClick('Fender Rhodes')}>Fender Rhodes</a>
              </div>
            </div>
            <div className="piano-select-container">
               <img src="https://github.com/Jfrederick12/Chicago_Electric_Piano_Site/blob/master/app/assets/images/wurlitzer_icon.png?raw=true" height='100%' width='100%' />
              <div className="button-1">
                <div className="eff-1"></div>
                <a onClick={() => this.handleClick('Wurlitzer')}>Wurlitzer</a>
              </div>
            </div>
            <div className="piano-select-container">
               <img src="https://github.com/Jfrederick12/Chicago_Electric_Piano_Site/blob/master/app/assets/images/wurlitzer_icon.png?raw=true" height='100%' width='100%' />
              <div className="button-1">
                <div className="eff-1"></div>
                <a onClick={() => this.handleClick('Wurlitzer')}>Clavinet</a>
              </div>
            </div>
              <Panel >
                { pianos }
              </Panel>
          </div>
        </Jumbotron>
    )
  }
})


