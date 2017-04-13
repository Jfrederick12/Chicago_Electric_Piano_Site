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
          <NavItem eventKey={1} href="/">Pianos & Services</NavItem>
          <NavItem eventKey={2} href="/posts">Discussion</NavItem>
        </Nav>
      </Navbar>
    )
  }
})

      // <Navbar fixedTop inverse>
      //   <NavItem href="http://localhost:3000/api/v1/pianos.json">Pianos</NavItem>
      //   <NavItem href="/">Home</NavItem>
      // </Navbar>
