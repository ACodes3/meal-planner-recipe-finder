import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ fontFamily: "'Oswald', sans-serif" }} sticky="top">
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <img
            alt=""
            src="meal.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Meals and Recipes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/recipes">Recipes</Nav.Link>
            {/*<Nav.Link href="/meal-plans">Meal Plans</Nav.Link>*/}
            <Nav.Link href="/recipe">Recipe</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
