import "./navbar.css"
import icon from "./icon.png" 
import home from "./homeLink.png"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function SideNav() {
  return (
    <div class="offcanvas offcanvas-start show"  tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel" >
     <Navbar>
     
     <Nav defaultActiveKey="/home" className="flex-column">
     
     <div class= "offcanvas-header">
          <Navbar.Brand className="flex-column" href="#home">
            <img
              src={icon}
             width="50%"
             className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </div>
      <div id="NavBody" className="d-flex flex-column">
        
          
          <Nav.Link eventKey="link-1">
          <img
          src={home}
          alt="home"
          width="45%"
          />
          <p className="text-center">Link 1</p>
  
          </Nav.Link>
          
          
            <Nav.Link eventKey="link-2">
            <p className="text-center">Link 2</p>
            </Nav.Link>
          
      </div>
        </Nav>
    
    
    </Navbar>
  
    </div>
  );
}

export default SideNav;