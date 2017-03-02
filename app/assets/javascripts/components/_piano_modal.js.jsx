const PianoModal = React.createClass({
  getInitialState() {
    return {
      detailPhotos: [],
      currentPhoto: this.props.photo
    };
  },

  componentDidMount() {
    $.getJSON('/api/v1/pianos/' + this.props.id + '/find_photo.json', (response) => {
      this.setState({
        detailPhotos: response
      })
    });
  },

  selectPhoto(photo) {
    this.setState({ currentPhoto: photo.url })
  },

  render() {
    console.log(this.state.detailPhotos)
    const piano = this.props;
    const photos = this.state.detailPhotos
    return(
      <div>
        <h1>{piano.model}</h1>
        <img src={this.state.currentPhoto} />
          { photos.map((photo) => {
            return (
            <img onClick={this.selectPhoto.bind(this, photo)} src={photo.url} height="25%" width="25%" />
            )
          }
        )}
      </div>
    )
  }
})
