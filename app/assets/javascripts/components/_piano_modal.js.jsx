const PianoModal = React.createClass({
  getInitialState() {
    return {
      detailPhotos: [],
      currentPhoto: this.props.photo,
      loggedIn: true
    };
  },

  userLoggedIn(piano) {
    if (this.state.loggedIn) {
      return (
        <container>
        <button onClick={this.handleDelete.bind(this, piano.id)}>delete</button>
        </container>
      )
    }
  },

  componentDidMount() {
    $.getJSON(`pianos/${this.props.id}/find_photo.json`, (response) => {
      this.setState({
        detailPhotos: response
      })
    });
  },

  handleDelete(id) {
    this.props.handleDelete(id);
  },

  handleEdit(id) {
    this.props.handleEdit(id);
  },

  selectPhoto(photo) {
    this.setState({ currentPhoto: photo })
  },

  render() {
    const piano = this.props;
    const photos = this.state.detailPhotos;
    const Modal = ReactBootstrap.Modal;

    // want to find a way to pass the photo to a child component
    return(
      <div>
        <Modal.Header closeButton>
          <Modal.Title>{piano.make}, {piano.model}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {this.userLoggedIn(piano)}
          <img src={this.state.currentPhoto} />
            { photos.map((photo) => {
              return (
                <div className="photo-detail">
                  <figure>
                    <img onClick={this.selectPhoto.bind(this, photo)} src={photo} height="100%" width="100%" />
                  </figure>
                </div>
                )
            })}
          <h3>About this piano</h3>
          <p>{piano.description}</p>
        </Modal.Body>
      </div>

    )
  }
})
