import * as React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

interface Props {
}

interface State {

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
            <strong>Total Disputes:</strong> <Badge variant="secondary">150</Badge>
          </Col>
          <Col>
            <strong>Total active courts:</strong> <Badge variant="secondary">8</Badge>
          </Col>
          <Col>
            <strong>Total Staked Amount:</strong>  <Badge variant="secondary">700ETH</Badge>

          </Col>
        </Row>
      </Card.Body>
    </Card>
  }
}
