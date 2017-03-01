const PianoContainer = React.createClass({
  getInitialState() {
    return {
      selectedPiano: [],
      showModal: false
    };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  handleClick(piano) {
    const selectedPiano = piano;
    console.log(selectedPiano)
    this.setState({ showModal: true });
  },

  render() {
    const piano = this.props.piano;
    const Button = ReactBootstrap.Button;
    const Modal = ReactBootstrap.Modal;
    // const piano = this.props
    return(
      <div onClick={this.handleClick.bind(this, piano)}>
        <img src={piano.photo} alt={piano.model} />
        <figcaption>{piano.model}, {piano.year}</figcaption>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
            < PianoModal {...piano} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
})