import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';

function Lista() {
  return (
    
      <ListGroup variant='flush'>
      <Link to={"/cadastro"}>
      <ListGroup.Item style={{backgroundColor: "#383535", color: "#fff"}}>Cadastrar Novo PA</ListGroup.Item>
      </Link>
      <ListGroup.Item style={{backgroundColor: "#383535", color: "#fff"}}>Pesquisar PA</ListGroup.Item>
      <ListGroup.Item style={{backgroundColor: "#383535", color: "#fff"}}>Relatórios</ListGroup.Item>
      <ListGroup.Item style={{backgroundColor: "#383535", color: "#fff"}}>Cálculos</ListGroup.Item>
      <ListGroup.Item style={{backgroundColor: "#383535", color: "#fff"}}>Outros</ListGroup.Item>
    </ListGroup>

    
    
    
  );
}

export default Lista;