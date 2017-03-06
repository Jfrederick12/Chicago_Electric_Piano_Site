const NewPiano = React.createClass({

  handleClick() {
    const make = this.refs.make.value;
    const model = this.refs.model.value;
    const year = this.refs.year.value;
    const description = this.refs.description.value;
    const photo = this.refs.photo.value;
    const price = this.refs.price.value;

    const piano = { make: make, model: model, year: year, description: description, photo: photo, price: price}

    $.ajax({
      url: '/api/v1/pianos',
      type: 'POST',
      data: { piano: { make: make, model: model, year: year, description: description, photo: photo, price: price}},
      success: (piano) => {
        this.props.handleSubmit(piano)
      }
    })
  },

  render() {
    return (
      <div>
        <ul>
          <li><input ref='make' placeholder='make' /></li>
          <li><input ref='model' placeholder='model' /></li>
          <li><input ref='year' placeholder='year' /></li>
          <li><input ref='description' placeholder='description' /></li>
          <li><input ref='photo' placeholder='photo' /></li>
          <li><input ref='price' placeholder='price' /></li>
          <li><button onClick={this.handleClick}>submit</button></li>
        </ul>
      </div>
    )
  }
})