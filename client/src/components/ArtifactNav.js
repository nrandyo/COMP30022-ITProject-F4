import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Menu, Input } from "semantic-ui-react";

class ArtifactNav extends Component {
  state = { activeItem: "All", headerDesc: "List of All Artifacts" };
  handleItemClick = (e, { name, desc }) =>
    this.setState({ activeItem: name, headerDesc: desc });
  render() {
    const { activeItem, headerDesc } = this.state;
    // const { headerDesc } = this.state
    return (
      <Container style={{ minHeight: 90, padding: "1em 0em" }}>
        <Header
          as="h2"
          textAlign="center"
          content="Artifacts"
          subheader={headerDesc}
        />
        <Menu pointing secondary color="blue">
          <Menu.Item
            as={Link}
            to="/artifacts"
            name="All"
            desc="List of All Artifacts"
            active={activeItem === "All"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/artifacts/photos"
            name="Photos"
            desc="List of Photos"
            active={activeItem === "Photos"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/artifacts/letters"
            name="Letters"
            desc="List of Letters"
            active={activeItem === "Letters"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/artifacts/objects"
            name="Physical Objects"
            desc="List of Physical Artifacts"
            active={activeItem === "Physical Objects"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/artifacts/new"
            name="Register Artifact"
            desc="Add a new artifact"
            active={activeItem === "Register Artifact"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Input transparent icon="search" placeholder="Search..." />
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}

export default ArtifactNav;
