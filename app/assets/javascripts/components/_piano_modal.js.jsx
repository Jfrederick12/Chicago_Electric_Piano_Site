const PianoModal = React.createClass({
  getInitialState() {
    return {

    };
  },

  render() {
    const piano = this.props;
    return(
      <div>
        <h1>{piano.model}</h1>
      </div>
    )
  }
})
