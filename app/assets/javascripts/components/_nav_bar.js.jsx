const NavBar = React.createClass({


  render() {
    const Nav = ReactBootstrap.Nav;
    const NavItem = ReactBootstrap.NavItem;
    const Navbar = ReactBootstrap.Navbar;
    const MenuItem = ReactBootstrap.MenuItem;
    const NavDropdown = ReactBootstrap.NavDropdown;

    return(
      <Navbar fixedTop inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">CEPCO</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="#pianos">Pianos</NavItem>
          <NavItem eventKey={3} href="#services">Services</NavItem>
          <NavItem eventKey={2} href="#blog">Blog</NavItem>
        </Nav>
      </Navbar>
    )
  }
})

      // <Navbar fixedTop inverse>
      //   <NavItem href="http://localhost:3000/api/v1/pianos.json">Pianos</NavItem>
      //   <NavItem href="/">Home</NavItem>
      // </Navbar>
