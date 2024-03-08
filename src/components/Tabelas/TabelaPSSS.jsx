import Table from 'react-bootstrap/Table';

function TabelaPSSS() {
  return (
    <Table striped bordered hover>
      <thead>
      <tr>
          <th style={{backgroundColor: "#323234", color: "#ccc"}}>#</th>
          <th style={{backgroundColor: "#323234", color: "#ccc"}}>First Name</th>
          <th style={{backgroundColor: "#323234", color: "#ccc"}}>Last Name</th>
          <th style={{backgroundColor: "#323234", color: "#ccc"}}>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TabelaPSSS;