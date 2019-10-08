import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Image,
  Container,
  Header,
  Menu,
  Divider,
  Segment,
  Input,
  Icon,
  Grid
} from "semantic-ui-react";
import LeonSterling from "../images/LeonSterling.jpg";

class Member extends Component {
  state = { activeItem: "All", headerDesc: "List of All Artifacts" };

  render() {
    return (
      <Container style={{ minHeight: 90, padding: "1em 0em" }}>
        <Header
          as="h2"
          textAlign="center"
          content="Family Member"
          subheader={"family member info"}
        />
        <Menu pointing secondary color="blue">
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              //   to={"/artifactpage/update/" + artifact.ArtifactID}
              name="Update Member"
              desc="Update artifact"
              // active={activeItem === "Register Artifact"}
              // onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              //   to={"/artifactpage/delete/" + artifact.ArtifactID}
              name="Delete Member"
              desc="Delete artifact"
              // active={activeItem === "Register Artifact"}
              // onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Grid verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={LeonSterling} size="medium" bordered />
            </Grid.Column>
            {/* <Divider vertical>Or</Divider> */}
            <Grid.Column width={12}>
              <Table fixed basic="very">
                <Table.Body>
                  <Table.Row>
                    <Table.HeaderCell width={2}>Name</Table.HeaderCell>
                    <Table.Cell>{"Leon Sterling"}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Maiden Name</Table.HeaderCell>
                    <Table.Cell>{"Date of Death"}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Date of Death</Table.HeaderCell>
                    <Table.Cell>Leon Sterling</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Date of Birth</Table.HeaderCell>
                    {/* <Table.Cell>Not available</Table.Cell> */}
                    <Table.Cell>{"Date of Birth"}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Gender</Table.HeaderCell>
                    <Table.Cell>{"Gender"}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Member;
