import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../assets/logo.png';

const Header = () => {
  const [expanded, setExpanded] = useState(false); // Track navbar expansion

  return (
    <Navbar bg="light" expand="lg" fixed="top" expanded={expanded}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand onClick={() => setExpanded(false)}>
            <img
              src={logo}
              height="30" // Adjust the size as needed
              className="d-inline-block align-top"
              alt="League Logo"
            />
            {' '}LeagueLinqing
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/" onClick={() => setExpanded(false)}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/teams" onClick={() => setExpanded(false)}>
              <Nav.Link>Teams</Nav.Link>
            </LinkContainer>
            {/* Add more navigation links as needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


// // src/components/Header/Header.jsx
// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import logo from '../../assets/logo.png'; // Adjust the path to your logo

// const Header = () => {
//   return (
//     <Navbar bg="light" expand="lg" fixed="top">
//       <Container>
//         <Navbar.Brand href="#home">
//           <img
//             src={logo}
//             height="30" // Adjust the size as needed
//             className="d-inline-block align-top"
//             alt="League Logo"
//           />
//           {' '}LeagueLinqing
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <LinkContainer to="/">
//               <Nav.Link>Home</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/teams">
//               <Nav.Link>Teams</Nav.Link>
//             </LinkContainer>
//             {/* Add more navigation links as needed */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

