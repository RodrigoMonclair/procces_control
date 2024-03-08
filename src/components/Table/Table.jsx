import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import TabelaPSSS from "../Tabelas/TabelaPSSS.jsx";
import TabelaRoo from "../Tabelas/TabelaRoo.jsx";
import TabelaPd from "../Tabelas/TabelaPd.jsx";
import TabelaRtj from "../Tabelas/TabelaRtj.jsx";

function Tables() {
  return (
    <div
       style={{ width: "80%", margin: "0px auto  0px auto"}}
    >
      <Tabs
        defaultActiveKey="profile"

        id="fill-tab-example"
        className="mb-3"
        variant="pills"
        justify
      >
        <Tab tabClassName="test" eventKey="home" title="Ressarcimento ao TJDFT">
          <TabelaRtj />
        </Tab>
        <Tab
        tabClassName="test"
          eventKey="controle de Parc. de Débito"
          title="Controle de Parc. de Débito"
        >
          <TabelaPd />
        </Tab>
        <Tab tabClassName="test" eventKey="profile" title="Ressarcimento a Outros Órgãos">
          <TabelaRoo />
        </Tab>
        <Tab tabClassName="test" eventKey="longer-tab" title="PSSS">
          <TabelaPSSS />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Tables;
