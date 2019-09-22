import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Menu,
  Grid,
  Image,
  Divider
} from "semantic-ui-react";

import "./styles.css";

class ArtifactPage extends Component {
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
          content="Artifact Name"
          subheader={"More information about the artifact"}
        />
        <Divider />
        <Grid>
          <Grid.Column floated="left" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src={"https://react.semantic-ui.com/images/wireframe/image.png"}
            />
          </Grid.Column>
          <Grid.Column width={9}>
            {/* <Image src='/images/wireframe/paragraph.png' /> */}
            hello kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
            jkjkjkjjjjjjjjj jjjjjj 999999999999999999999999999 99999999999999
            999999999999 999999999999999 999999999999
            999999999999999999999999999999
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default ArtifactPage;
