import * as React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TableRow from "./TableRow";
import {Query} from "react-apollo";
import {COURTS, DISPUTES} from "../graphql/queries";
import {Period} from "./Home";
import Address from "./Address";
import Web3 from 'web3'

interface Props {
}

interface State {

}

interface CourtData {
  courts: Array<{
    id: string;
    subcourtID: string;
    policy: string;
    feeForJuror: string;
    minStake: string;
    jurorsForCourtJump: string;
    alpha
  }>
}

interface Variable {

}
export default class CourtsTable extends React.Component<Props, State> {


  constructor(props: Readonly<Props>) {
    super(props);
  }


  render() {
    return <Card style={{height:"400px",overflow:"scroll"}}>
      <Card.Body>
        <Card.Title>Court Details</Card.Title>
        <TableRow
          col={[
            <strong>Court</strong>,
           // <strong>Title</strong>,
            <strong>Total disputes</strong>,
            <strong>Min stake amount</strong>
              ]}/>
        <Query<CourtData, Variable> query={COURTS}>
          {({loading, error, data}) => {
            if (loading) return <span>{'Loading...'}</span>;
            if (error) return <span>{`Error! ${error.message}`}</span>;

            return data.courts.map(d => {
              return <TableRow
                col={[d.subcourtID,
                //  'Some title',
                  0,
                  d.minStake != null ? Web3.utils.fromWei(d.minStake, 'ether') : 0
                ]}/>
            })
          }}
        </Query>
      </Card.Body>
    </Card>
  }
}
