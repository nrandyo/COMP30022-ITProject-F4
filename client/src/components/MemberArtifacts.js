import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Item,
  Button,
  Label,
  Menu,
  Input,
  Icon,
  Divider
} from "semantic-ui-react";

class MemberArtifact extends Component {
  render() {
    return (
      <Container>
        <Divider horizontal>
          <Header as="h4">
            {/* <Icon name="info circle" /> */}
            Artifacts Owned
          </Header>
        </Divider>
        <Item.Group divided>
          <Item>
            <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            <Item.Content>
              <Item.Header as="a">{"item.Name"}</Item.Header>
              <Item.Meta>
                <span className="cinema">{"item.DateAcquireYear"}</span>
              </Item.Meta>
              <Item.Description>{"asda"}</Item.Description>
              <Item.Extra>
                <Button as={Link} to={"/artifactpage/"} primary floated="right">
                  Additional Info
                  <Icon name="right chevron" />
                </Button>
                <Label>Limited</Label>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    );
  }
}

export default MemberArtifact;
