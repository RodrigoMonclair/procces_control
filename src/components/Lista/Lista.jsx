import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function Lista() {
  return (
    <ListGroup variant="flush">
      <Link className="list" to={"/cadastro"}>
        <ListGroup.Item
          style={{ backgroundColor: "#101010", color: "#fff", border: "none" }}
        >
          Cadastrar Novo PA
        </ListGroup.Item>
      </Link>
      <Link className="list">
        <ListGroup.Item
          style={{ backgroundColor: "#101010", color: "#fff", border: "none" }}
        >
          Pesquisar PA
        </ListGroup.Item>
      </Link>
      <ListGroup.Item
        style={{
          backgroundColor: "#101010",
          color: "#fff",
          borderBottom: "none",
        }}
      >
        Relatórios
      </ListGroup.Item>
      <ListGroup.Item
        style={{
          backgroundColor: "#101010",
          color: "#fff",
          borderBottom: "none",
        }}
      >
        Cálculos
      </ListGroup.Item>
      <ListGroup.Item
        style={{
          backgroundColor: "#101010",
          color: "#fff",
          borderBottom: "none",
        }}
      >
        Outros
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Lista;
