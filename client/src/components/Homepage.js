import React from "react";
import LeonSterling from "../images/LeonSterling.jpg";
import {
  Button,
  Grid,
  Header,
  Icon,
  Image,
  Responsive,
  Segment
} from "semantic-ui-react";

const Homepage = () => {
  return (
    <Responsive>
      <Segment style={{ padding: "1em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Welcome to Leon Sterling's artifact registry
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                {/* The best lecturer and client in the world! */}A Professor in
                the School of Computing and Information Systems at The
                University of Melbourne.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                A place where Leon's artifacts are registered and organised
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Yes that's right, you can see all of Leon's significant
                artifacts and read their stories
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image bordered rounded size="large" src={LeonSterling} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button animated="vertical" size="huge">
                <Button.Content visible>Check him out</Button.Content>
                <Button.Content hidden>
                  <Icon name="info" />
                </Button.Content>
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment
        inverted
        primary
        color="blue"
        style={{ padding: "0em" }}
        vertical
      >
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Made by the Fantastic 4
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Randy, Sean, Tommy and Garvin
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                A Capstone project for COMP30022
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                A project to meet a client's requirements
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "8em 0em" }} vertical></Segment>
    </Responsive>
  );
};

export default Homepage;
