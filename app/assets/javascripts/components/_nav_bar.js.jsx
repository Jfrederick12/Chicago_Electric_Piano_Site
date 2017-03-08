const NavBar = React.createClass({


  render() {
    const Nav = ReactBootstrap.Nav;
    const NavItem = ReactBootstrap.NavItem;

    return(
      <Nav>
        <NavItem href="http://localhost:3000/api/v1/pianos.json">NavItem 1 content</NavItem>
      </Nav>
    )
  }
})