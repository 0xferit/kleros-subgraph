import * as React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CourtsTable from "./CourtsTable";
import DisputesTable from "./DisputesTable";
import AnalyticsHeader from "./AnalyticsHeader";
import Header from "./Header";

interface Props {
}

interface State {

}

export default class Home extends React.Component<Props, State> {


  constructor(props: Readonly<Props>) {
    super(props);
  }


  render() {
    return <Container>
      <Row>
        <Header/>
      </Row>
      <Row>
        <Col>
          <AnalyticsHeader/>
        </Col>
      </Row>
      <Row>
        <Col>
          <CourtsTable/>
        </Col>
        <Col>
          <DisputesTable/>
        </Col>
      </Row>
    </Container>;
  }
}
