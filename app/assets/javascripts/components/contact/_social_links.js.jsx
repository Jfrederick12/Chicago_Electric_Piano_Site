const SocialLinks = (props) => (
  <a href={props.link} className="social-icon"> <i className={props.img}></i></a>
)

const { string } = React.PropTypes

SocialLinks.propTypes = {
  name: string.isRequired,
  link: string.isRequired,
  img: string.isRequired
}