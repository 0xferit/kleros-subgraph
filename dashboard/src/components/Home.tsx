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
import {Query} from 'react-apollo'
import {DISPUTE_WITH_PERIOD, TOTAL_COURTS} from "../graphql/queries";
import Badge from "react-bootstrap/Badge";

interface Props {

}

interface State {

}

enum Period {
  evidence,
  commit,
  vote,
  appeal,
  execution
}


interface DisputeWithPeriod {
  periodDisputeStatistics: Array<{
    period: Period;
    totalDisputes: string;
  }>
}

interface Variable {

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
        <Col>
        <BarGraphComponent data={topTenBountyHunters}
                           dataKey='count'
                           xAxis={"Name of Juror"}
                           yAxis={"Arbitration fees "}
                           title={"Top 10 earner"}
        />
        </Col>
        <Col>

          <Query<DisputeWithPeriod, Variable> query={DISPUTE_WITH_PERIOD}>
            {({loading, error, data}) => {
              if (loading) return <span>{'Loading...'}</span>;
              if (error) return <span>{`Error! ${error.message}`}</span>;

              console.log(data);
              const graphData = data.periodDisputeStatistics.map(d => {
                  return {
                    count: d.totalDisputes,
                    name: Period[parseInt(d.period + "")]
                  };
                }
              );

              console.log('graph data  ', graphData);
              return <BarGraphComponent data={graphData}
                                        dataKey='count'
                                        xAxis={"Dispute state(period)"}
                                        yAxis={"Dispute count"}
                                        title={"Dispute by status(Period)"}
              />;
            }}
          </Query>

        </Col>
      </Row>
    </Container>;
  }
}
