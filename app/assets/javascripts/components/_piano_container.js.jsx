const PianoContainer = React.createClass({
  render() {
    const piano = this.props.piano;
    const Button = ReactBootstrap.Button;
    // const piano = this.props
    return(
      <div>
        <img src={piano.photo} alt={piano.model} />
        <figcaption>{piano.model}</figcaption>
      </div>
    )
  }
})

        // <h3>{piano.make}</h3>
        // <p>{piano.model}</p>
        // <p>{piano.description}</p>