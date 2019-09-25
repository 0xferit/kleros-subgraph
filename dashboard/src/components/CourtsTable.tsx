import * as React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TableRow from "./TableRow";

interface Props {
}

interface State {

}

export default class CourtsTable extends React.Component<Props, State> {


  constructor(props: Readonly<Props>) {
    super(props);
  }


  render() {
    return <Card>
      <Card.Body>
        <TableRow
          col={["Court", "Description", "Total disputes", "Stake amount"]}/>
        <TableRow
          col={["Court 1", "Description 1", "50", "34ETH"]}/>
        <TableRow
          col={["Court 2", "Description 2", "63", "23ETH"]}/>
        <TableRow
          col={["Court 3", "Description 3", "32", "12ETH"]}/>
        <TableRow
          col={["Court 4", "Description 4", "46", "10ETH"]}/>
      </Card.Body>
    </Card>
  }
}
