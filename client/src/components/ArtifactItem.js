import React, { Component } from "react";
import { Input, Menu, Button, Icon, Image, Item, Label, Container, Header, Segment } from 'semantic-ui-react'

export default class ArtifactItem extends Component {
//   formatDate = (date) => {
//     var d = new Date(date).toDateString();
//     return d;
//    }

  render() {
    const artifact = this.props.artifact;
    return (

            <Item>
          <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    
          <Item.Content>
            <Item.Header as='a'>{artifact.Name}</Item.Header>
            <Item.Meta>
              <span className='cinema'>{artifact.DateAddedYear}</span>
            </Item.Meta>
            <Item.Description>{artifact.Text}</Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
                 Additional Info
                <Icon name='right chevron' />
              </Button>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
    );
  }
}