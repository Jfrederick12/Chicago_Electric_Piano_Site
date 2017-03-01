const PianoModal = (props) => (
  <container>
    <h1>{props.make}{props.model}</h1>
    <img src={props.photo} />
    <p>{props.description}</p>
  </container>

)

