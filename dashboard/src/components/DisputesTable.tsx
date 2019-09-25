import * as React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TableRow from "./TableRow";
import Address from "./Address";
import {Query} from 'react-apollo'
import {TOTAL_COURTS, DISPUTES} from "../graphql/queries";
import Badge from "react-bootstrap/Badge";

interface Props {
}

interface State {

}

interface Variable {

}

interface DisputesData {
  disputeCreations: Array<{
    arbitrable:string;
    contractAddress:string;
    disputeID:string;
    id:string;
    timestamp:string
  }>
}

export default class DisputesTable extends React.Component<Props, State> {


  constructor(props: Readonly<Props>) {
    super(props);
  }


  render() {
    return <Card style={{height:"400px",overflow:"scroll"}}>
      <Card.Body>
        <Card.Title>Disputes`</Card.Title>
        <TableRow
          col={[
            <strong>Id</strong>,
            <strong>Period(Status)</strong>,
            <strong>Arbitrable</strong>,
            <strong>court</strong>
          ]}/>
        <Query<DisputesData, Variable> query={DISPUTES}>
          {({loading, error, data}) => {
            if (loading) return <span>{'Loading...'}</span>;
            if (error) return <span>{`Error! ${error.message}`}</span>;

            console.log('dataa of disputes ',data);
            return data.disputeCreations.map(d => {
              return <TableRow
                col={[d.disputeID, "Appeal", <Address
                  address={d.arbitrable}/>, "1"]}/>
            })
          }}
        </Query>
      </Card.Body>
    </Card>
  }
}
