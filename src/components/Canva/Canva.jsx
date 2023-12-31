import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Lista from '../Lista/Lista.jsx';

function Canva() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        Opções
      </Button>

      <Offcanvas style={{backgroundColor: "#383535", color: "#fff"}} show={show} onHide={handleClose}>
        <Offcanvas.Header style={{color: '#fff'}} closeButton>
          <Offcanvas.Title>NUPAC</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Lista />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Canva;