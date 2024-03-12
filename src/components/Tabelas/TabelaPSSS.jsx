import Table from 'react-bootstrap/Table';

function TabelaPSSS() {
  return (
    <Table striped bordered hover>
      <thead>
      <tr>
          <th style={{backgroundColor: "#323234", color: "#ccc"}}><strong>Matrícula</strong></th>
          <th style={{backgroundColor: "#323234", color: "#ccc"}}><strong>Servidor Licenciado</strong></th>
          <th style={{backgroundColor: "#323234", color: "#ccc"}}><strong>E-mail do Servidor</strong></th>
          <th style={{backgroundColor: "#323234", color: "#ccc"}}><strong>Início da Licença</strong></th>
          <th style={{backgroundColor: "#323234", color: "#ccc"}}><strong>Mês do Último Recolhimento - Parte Servidor</strong></th>
          <th style={{backgroundColor: "#323234", color: "#ccc"}}><strong>Mês do Último Recolhimento - Parte Patronal</strong></th>
          <th style={{backgroundColor: "#323234", color: "#ccc"}}><strong>Mês do Último Despacho Nupac</strong></th>
          <th style={{backgroundColor: "#323234", color: "#ccc"}}><strong>PA SEI</strong></th>
          <th style={{backgroundColor: "#323234", color: "#ccc"}}><strong>Observações</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          {/* <td colSpan={3}>Larry the Bird</td> */}
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          
        </tr>
      </tbody>
    </Table>
  );
}

export default TabelaPSSS;