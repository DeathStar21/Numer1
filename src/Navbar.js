import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
export default function Navbar2() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#">Numerical Method</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/Home" className="nav-link">Home</Link>
          
          <NavDropdown title="Root of Equation" id="basic-nav-dropdown">
            <Link to="/Graphical" className="dropdown-item">Graphical Method</Link>
            <NavDropdown.Divider />
            <Link to="/Bisection" className="dropdown-item">Bisection Method</Link>
            <Link to="/FalsePosition" className="dropdown-item">False Position Method</Link>
            <Link to="/OnePoint" className="dropdown-item">One Point Iteration Method</Link>
            <Link to="/NewtonRape" className="dropdown-item">Newton-Raphson Method</Link>
            <Link to="/Secant" className="dropdown-item">Secant Method</Link>
          </NavDropdown>

          <NavDropdown title="Linear Algebraic" id="basic-nav-dropdown">
            <Link to="/Cramer" className="dropdown-item">Cramer's Rule</Link>
            <Link to="#" className="dropdown-item">Gauss Elimination Method</Link>
            <Link to="#" className="dropdown-item">Gauss Jordan Method</Link>
            <Link to="#" className="dropdown-item">Matrix Inversion Method</Link>
            <Link to="#" className="dropdown-item">LU Decomposition</Link>
            <Link to="#" className="dropdown-item">Cholesky Decomposition Method</Link>
            <NavDropdown.Divider />
            <Link to="#" className="dropdown-item">Jacobi Iteration Method</Link>
            <Link to="#" className="dropdown-item">Gauss-Seidal Iteration Method</Link>
            <Link to="#" className="dropdown-item">Conjugate Gradient Method</Link>
          </NavDropdown>

          <NavDropdown title="Interpolation" id="basic-nav-dropdown">
            <Link to="#" className="dropdown-item">Newton's Divided-Differences</Link>
            <Link to="#" className="dropdown-item">Lagrange Polynomials</Link>           
            <Link to="#" className="dropdown-item">Spline Interpolation</Link>                
          </NavDropdown>

          <NavDropdown title="Regression" id="basic-nav-dropdown">
            <Link to="#" className="dropdown-item">Linear Regression</Link>
            <Link to="#" className="dropdown-item">Polynomial Regression</Link>           
            <Link to="#" className="dropdown-item">Multiple Linear Regression</Link>                
          </NavDropdown>

          <NavDropdown title="Integration" id="basic-nav-dropdown">
            <Link to="/ComTrap" className="dropdown-item">Composite Trapezoidal Rule</Link>
            <Link to="/ComSim" className="dropdown-item">Composite Simson's Rule</Link>                        
          </NavDropdown>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}
