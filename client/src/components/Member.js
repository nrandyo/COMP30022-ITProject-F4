import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Image,
  Container,
  Header,
  Menu,
  Grid,
  Responsive
} from "semantic-ui-react";
import LeonSterling from "../images/LeonSterling.jpg";
import axios from "axios";
// import { isNull } from "util";

class Member extends Component {
  state = {
    activeItem: "All",
    headerDesc: "List of All Artifacts",
    member: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`/api/familymember/${id}`).then(res => {
      const member = res.data;
      this.setState(() => ({ member }));
    });
  }

  handleGender(g) {
    if (g == "m") {
      return "Male";
    } else if (g == "f") {
      return "Female";
    }
    return "undefined";
  }

  handleDOB(y, m, d) {
    function defaultOne(i) {
      if (i == null) {
        return "1";
      }
      return i;
    }

    const year = defaultOne(y);
    const month = defaultOne(m);
    const day = defaultOne(d);
    return day + "-" + month + "-" + year;
  }

  handleDOD(y, m, d) {
    if (y && m && d) {
      return (
        <Table.Row>
          <Table.HeaderCell>Date of Death</Table.HeaderCell>
          <Table.Cell>{y + m + d}</Table.Cell>
        </Table.Row>
      );
    }
  }

  handleMaidenName(m) {
    if (m) {
      return (
        <Table.Row>
          <Table.HeaderCell>Maiden Name</Table.HeaderCell>
          <Table.Cell>{m}</Table.Cell>
        </Table.Row>
      );
    }
  }

  render() {
    return (
      <Responsive>
        {this.state.member.map(member => (
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
                        <Table.Cell>
                          {member.Firstname + " " + member.Lastname}
                        </Table.Cell>
                      </Table.Row>
                      {this.handleMaidenName(member.MaidenName)}
                      {this.handleDOD(
                        member.DODYear,
                        member.DODMonth,
                        member.DODDay
                      )}
                      <Table.Row>
                        <Table.HeaderCell>Date of Birth</Table.HeaderCell>
                        {/* <Table.Cell>Not available</Table.Cell> */}
                        <Table.Cell>
                          {this.handleDOB(
                            member.DOBYear,
                            member.DOBMonth,
                            member.DOBDay
                          )}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.HeaderCell>Gender</Table.HeaderCell>
                        <Table.Cell>
                          {this.handleGender(member.Gender)}
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        ))}
      </Responsive>
    );
  }
}

export default Member;
