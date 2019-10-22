import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Header
} from "semantic-ui-react";

class FamilyNav extends Component {
  state = { activeItem: "main" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Container style={{ minHeight: 90, padding: "1em 0em" }}>
        <Header
          as="h2"
          textAlign="center"
          content="Family Tree"
          // subheader={headerDesc}
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
                  to="/familytree"
                  name="main"
                  active={activeItem === "main"}
                  onClick={this.handleItemClick}
                />

                <Menu.Item
                  as={Link}
                  to="/familytree/3"
                  name="ruth"
                  active={activeItem === "ruth"}
                  onClick={this.handleItemClick}
                  link
                />
                <Menu.Item
                  as={Link}
                  to="/familytree/4"
                  name="theodore"
                  active={activeItem === "theodore"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as={Link}
                  to="/familytree/5"
                  name="mariam"
                  active={activeItem === "mariam"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as={Link}
                  to="/familytree/new"
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
