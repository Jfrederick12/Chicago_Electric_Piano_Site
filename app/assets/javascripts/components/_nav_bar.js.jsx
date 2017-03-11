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
          <NavItem eventKey={2} href="#">Pianos</NavItem>
          <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Fixin</MenuItem>
            <MenuItem eventKey={3.2}>Custom</MenuItem>
            <MenuItem eventKey={3.3}>Work Girl</MenuItem>
            <MenuItem divider />
          </NavDropdown>
          <NavItem eventKey={4} href="/pianos/new">Add Piano</NavItem>
        </Nav>
      </Navbar>
    )
  }
})

      // <Navbar fixedTop inverse>
      //   <NavItem href="http://localhost:3000/api/v1/pianos.json">Pianos</NavItem>
      //   <NavItem href="/">Home</NavItem>
      // </Navbar>
