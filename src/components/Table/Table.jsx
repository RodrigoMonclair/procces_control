import {Tab} from 'react-bootstrap';
import {Tabs} from 'react-bootstrap';
import TabelaPSSS from '../Tabelas/TabelaPSSS.jsx';
import TabelaRoo from '../Tabelas/TabelaRoo.jsx';
import TabelaPd from '../Tabelas/TabelaPd.jsx';
import TabelaRtj from '../Tabelas/TabelaRtj.jsx';

function Tables() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Ressarcimento ao TJDFT">
        <TabelaRtj />
      </Tab>
      <Tab eventKey="controle de Parc. de Débito" title="Controle de Parc. de Débito">
        <TabelaPd />
      </Tab>
      <Tab eventKey="profile" title="Ressarcimento a Outros Órgãos">
        <TabelaRoo />
      </Tab>
      <Tab eventKey="longer-tab" title="PSSS">
        <TabelaPSSS />
      </Tab>
    </Tabs>
  );
}

export default Tables;