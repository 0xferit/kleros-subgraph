import * as React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import {Query} from 'react-apollo'
import {DISPUTE_COUNT, TOTAL_COURTS} from "../graphql/queries";

interface Props {
}

interface State {

}

interface DisputeData {
  disputeStatistics: Array<{
    id: string;
    totalDisputes: string;
  }>
}

interface CourtData {
  policyUpdates: Array<{
    subcourtID: string;
  }>
}

interface Variable {

}

export default class AnalyticsHeader extends React.Component<Props, State> {


  constructor(props: Readonly<Props>) {
    super(props);
  }


  render() {

    return <Card>
      <Card.Body>
        <Row>
          <Col>
            <strong>Total Disputes:</strong> <Badge variant="secondary">

            <Query<DisputeData, Variable> query={DISPUTE_COUNT}>
              {({loading, error, data}) => {
                if (loading) return <span>{'Loading...'}</span>;
                if (error) return <span>{`Error! ${error.message}`}</span>;

                return <span>{data.disputeStatistics[0].totalDisputes}</span>;
              }}
            </Query>
          </Badge>
          </Col>
          <Col>
            <strong>Total active courts:</strong> <Badge variant="secondary">
            <Query<CourtData, Variable> query={TOTAL_COURTS}>
              {({loading, error, data}) => {
                if (loading) return <span>{'Loading...'}</span>;
                if (error) return <span>{`Error! ${error.message}`}</span>;

                return <span>{parseInt(data.policyUpdates[0].subcourtID) + 1}</span>;
              }}
            </Query>

          </Badge>
          </Col>
          <Col>
            <strong>Total Staked Amount:</strong> <Badge variant="secondary">
            700PNK</Badge>

          </Col>
        </Row>
      </Card.Body>
    </Card>
  }
}
