import { Tabs, Tab } from "react-bootstrap";

import UniversityEvents from "../components/home/UniversityEvents";
import CompaniesEvents from "../components/home/CompaniesEvents";

export default function HomeBody() {
  return (
    <Tabs
      defaultActiveKey="universities"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="universities" title="Universidades">
        <UniversityEvents />
      </Tab>
      <Tab eventKey="companies" title="Empresas">
        <CompaniesEvents />
      </Tab>
    </Tabs>
  );
}
