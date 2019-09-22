import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Menu } from "semantic-ui-react";

import "./styles.css";

class FamilyTree extends Component {
  state = { activeItem: "All", headerDesc: "List of All Artifacts" };
  handleItemClick = (e, { name, desc }) =>
    this.setState({ activeItem: name, headerDesc: desc });
  render() {
    const { activeItem, headerDesc } = this.state;
    // const { headerDesc } = this.state
    return (
      <Container style={{ minHeight: 700, padding: "1em 0em" }}>
        <Header
          as="h2"
          textAlign="center"
          content="Family Tree"
          subheader={headerDesc}
        />
      </Container>
    );
  }
}

export default FamilyTree;
