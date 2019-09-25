import * as React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TableRow from "./TableRow";
import Address from "./Address";

interface Props {
}

interface State {

}

export default class DisputesTable extends React.Component<Props, State> {


  constructor(props: Readonly<Props>) {
    super(props);
  }


  render() {
    return <Card>
      <Card.Body>
        <Card.Title>Disputes`</Card.Title>
        <TableRow
          col={["Id", "Period(Status)", "Arbitaor", "court"]}/>
        <TableRow
          col={["1", "Securing Evidence", <Address
            address="0xab0b2a0ef64db239ec0441d64eaeb164c34a2bc6"/>, "1"]}/>
        <TableRow
          col={["2", "Analysis", <Address
            address="0xab0b2a0ef64db239ec0441d64eaeb164c34a2bc6"/>, "2"]}/>
        <TableRow
          col={["3", "Appeal", <Address
            address="0xab0b2a0ef64db239ec0441d64eaeb164c34a2bc6"/>, "3"]}/>
        <TableRow
          col={["4", "Token Redistribution", <Address
            address="0xab0b2a0ef64db239ec0441d64eaeb164c34a2bc6"/>, "4"]}/>
      </Card.Body>
    </Card>
  }
}
