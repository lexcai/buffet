import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Container } from "reactstrap";
import IPageProps from "../interfaces/page";

const HomePage: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <Container>
      <Card>
        <CardBody>
          <p>Welcome to this page</p>
          <p>
            Try to <Link to="/login">Sign in</Link>.
          </p>
          <p>
            Click <Link to="/logout">here</Link> to logout.
          </p>
        </CardBody>
      </Card>
    </Container>
  );
};

export default HomePage;
