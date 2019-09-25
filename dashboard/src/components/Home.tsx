import * as React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CourtsTable from "./CourtsTable";
import DisputesTable from "./DisputesTable";
import AnalyticsHeader from "./AnalyticsHeader";
import Header from "./Header";
import BarGraphComponent from "./BarGraph";

interface Props {
}

interface State {

}


const topTenBountyHunters = [
  {
    name: 'Ram', count: 100,
  },
  {
    name: 'Shayam', count: 90,
  },
  {
    name: 'Golu', count: 80,
  },
  {
    name: 'Molu', count: 70,
  },
  {
    name: 'Kittu', count: 60,
  },
  {
    name: 'Pittu', count: 50,
  },
  {
    name: 'Sittu', count: 40,
  },
  {
    name: 'tittu', count: 30,
  },
  {
    name: 'littu', count: 20,
  },
  {
    name: 'Lottu', count: 10,
  },
];

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
      <Row>
        <BarGraphComponent data={topTenBountyHunters}
                           dataKey='count'
                           xAxis={"Name of Juror"}
                           yAxis={"Arbitration fees "}
                           title={"Top 10 Juror"}
        />
      </Row>
    </Container>;
  }
}
