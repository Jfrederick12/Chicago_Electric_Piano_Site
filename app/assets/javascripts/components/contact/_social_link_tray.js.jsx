const SocialLinkTray = React.createClass({
	render() {
		const socials = [
		  { name: 'Twitter', link: 'https://dribbble.com/jfrederickdesign', img: 'fa fa-twitter fa-2x' },
		  { name: 'Instagram', link: 'https://www.instagram.com/ferdgram/', img: 'fa fa-instagram fa-2x' },
		  { name: 'Facebook', link: 'https://github.com/Jfrederick12', img: 'fa fa-facebook fa-2x' },
		]

		return(
      <div className="footer-social-icons">
        {socials.map((social) => (
          <nav key={social.name}>< SocialLinks {...social} /></nav>
        ))}
			</div>
		)

	}
})