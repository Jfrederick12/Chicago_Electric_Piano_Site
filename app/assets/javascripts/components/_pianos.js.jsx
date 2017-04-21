const Pianos = React.createClass({
  getInitialState() {
    return {
      loggedIn: false,
      pianos: []
    }
  },

  componentDidMount() {
    $.getJSON('/pianos.json', (response) => { this.setState({
        pianos: response
      })
    });
  },

  handleSubmit(piano) {
    const newState = this.state.pianos.concat(piano);
    this.setState({ pianos: newState })
  },

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          < NewPiano handleSubmit={this.handleSubmit} />
          < PianosList pianos={this.state.pianos} />
        </div>
      )
    } else {
      return(
        <div id="pianos"><a name="pianos"></a>
          < PianosList pianos={this.state.pianos} />
          < ArchivedPianos pianos={this.state.pianos}/>
        </div>
      )
    }
  }
})