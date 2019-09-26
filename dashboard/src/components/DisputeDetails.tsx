import * as React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TableRow from "./TableRow";
import Address from "./Address";
import {Query} from 'react-apollo'
import {
  TOTAL_COURTS,
  DISPUTES,
  DISPUTE_COUNT,
  DISPUTE_PERIODS
} from "../graphql/queries";
import Badge from "react-bootstrap/Badge";
import {Period} from "./Home";
import VerticallyCenteredModal from "./VerticallyCenteredModal";

interface Props {
  disputeId: string;
}

interface State {
  showModal: boolean
}

interface Variable {
  disputeID: string
}

interface DisputePeriods {
  newPeriods: Array<{
    period: string;
    timestamp: string
  }>
}

export default class DisputesDetails extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
  }

  render() {
    console.log('this.props.disputeId ', this.props.disputeId)
    const disputeID = this.props.disputeId;
    return <div>
      <Query<DisputePeriods, Variable>
        query={DISPUTE_PERIODS}
        variables={{disputeID}}
      >
        {({loading, error, data}) => {
          if (loading) return <span>{'Loading...'}</span>;
          if (error) return <span>{`Error! ${error.message}`}</span>;
          return data.newPeriods.map((d) =>
            <div>{Period[parseInt(d.period)]}</div>)
        }}
      </Query>
    </div>
  }
}
