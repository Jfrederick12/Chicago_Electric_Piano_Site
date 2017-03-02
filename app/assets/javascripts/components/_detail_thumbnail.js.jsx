const DetailThumbnail = (props) => (
  // const photo = this.props.photo

  <div className="photo-detail">
    <figure>
      {props}
      <img src={props} height="100%" width="100%" />
    </figure>
  </div>
)