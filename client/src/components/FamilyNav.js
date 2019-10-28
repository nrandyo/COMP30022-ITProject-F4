import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Header
} from "semantic-ui-react";

class FamilyNav extends Component {
  state = { activeItem: "main", headerDesc: "Main Family" };
  handleItemClick = (e, { name, desc }) =>
    this.setState({ activeItem: name, headerDesc: desc });
  render() {
    const { activeItem, headerDesc } = this.state;
    return (
      <Container style={{ minHeight: 90, padding: "1em 0em" }}>
        <Header
          as="h2"
          textAlign="center"
          content="Family Tree"
          subheader={headerDesc}
        />
        <Responsive>
          <Segment
            // inverted
            textAlign="center"
            style={{ minHeight: 90, padding: "0em 0em" }}
            vertical
          >
            <Menu color="blue" fixed pointing secondary size="large">
              <Container>
                <Menu.Item
                  as={Link}
                  to="/familytree/1"
                  name="main"
                  desc="Main Family"
                  active={activeItem === "main"}
                  onClick={this.handleItemClick}
                />

                <Menu.Item
                  as={Link}
                  to="/familytree/2"
                  name="ruth"
                  desc="Ruth's family"
                  active={activeItem === "ruth"}
                  onClick={this.handleItemClick}
                  link
                />
                <Menu.Item
                  as={Link}
                  to="/familytree/3"
                  name="theodore"
                  desc="Theodore's family"
                  active={activeItem === "theodore"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as={Link}
                  to="/familytree/4"
                  name="mariam"
                  desc="Mariam's family"
                  active={activeItem === "mariam"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as={Link}
                  to="/member/new"
                  name="Add member"
                  active={activeItem === "Add member"}
                  onClick={this.handleItemClick}
                  position="right"
                ></Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Responsive>
      </Container>
    );
  }
}

export default FamilyNav;
