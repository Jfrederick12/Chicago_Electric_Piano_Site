const DetailPictureList = React.createClass({
  getInitialState() {
    return {
      loggedIn: true,
      detailPictures: []
    }
  },

  componentDidMount() {
    $.getJSON('/detail_pictures.json', (response) => { this.setState({
        detailPictures: response
      })
    });
  },

  render() {
  console.log(this.state.detailPictures);
  const details = this.state.detailPictures.map((picture) => {
    return (
        <div>
          <img src={picture} width="100px" height="100px" />
        </div>
    )
  });

    return (
      <div>
        {details}
      </div>
    )
  }
})