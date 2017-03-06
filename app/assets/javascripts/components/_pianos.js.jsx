const Pianos = React.createClass({
  getInitialState() {
    return {
      userLogin: true,
      pianos: []
    }
  },

  componentDidMount() {
    $.getJSON('/api/v1/pianos.json', (response) => { this.setState({
        pianos: response
      })
    });
  },

  handleSubmit(piano) {
    const newState = this.state.pianos.concat(piano);
    this.setState({ pianos: newState })
  },

  render() {
    if (this.state.userLogin) {
      return (
        <div>
          < NewPiano handleSubmit={this.handleSubmit} />
          < PianosList pianos={this.state.pianos} />
        </div>
      )
    } else {
      return(
        <div>
          < PianosList pianos={this.state.pianos} />
        </div>
      )
    }
  }
})