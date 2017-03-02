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
    this.setState({ showModal: true });
  },

  render() {
    const piano = this.props.piano;
    const Modal = ReactBootstrap.Modal;
    // const piano = this.props
    return(
      <div onClick={this.handleClick.bind(this, piano)}>
        <img src={piano.photo} alt={piano.model} />
        <figcaption>{piano.model}, {piano.year}</figcaption>
        <Modal show={this.state.showModal} onHide={this.close}>
            < PianoModal {...piano} />
        </Modal>
      </div>
    )
  }
})