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
    return <Card style={{height:"400px",overflow:"scroll"}}>
      <Card.Body>
        <Card.Title>Courts</Card.Title>
        <TableRow
          col={[
            <strong>Court"</strong>,
            <strong>Title</strong>,
            <strong>Total disputes</strong>,
            <strong>Stake amount</strong>
              ]}/>
        <TableRow
          col={["Court 1", "Title 1", "50", "34PNK"]}/>
        <TableRow
          col={["Court 2", "Title 2", "63", "23PNK"]}/>
        <TableRow
          col={["Court 3", "Title 3", "32", "12PNK"]}/>
        <TableRow
          col={["Court 4", "Title 4", "46", "10PNK"]}/>
      </Card.Body>
    </Card>
  }
}
