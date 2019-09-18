import React, { Component } from 'react';
import { Input, Menu, Button, Icon, Image, Item, Label, Container, Header, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
const Artifact = () => {

    return(
        <Container>

        <Item.Group divided >
        <Item>
          <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    
          <Item.Content>
            <Item.Header as='a'>Artifact 1</Item.Header>
            <Item.Meta>
              <span className='cinema'>Photo</span>
            </Item.Meta>
            <Item.Description>{paragraph}</Item.Description>
            <Item.Extra>
              <Button primary floated='right' as = {Link} to= '/artifacts/artifactpage'>
                 Additional Info
                <Icon name='right chevron' />
              </Button>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
    
        <Item>
          <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    
          <Item.Content>
            <Item.Header as='a'>Artifact 2</Item.Header>
            <Item.Meta>
              <span className='cinema'>Letter</span>
            </Item.Meta>
            <Item.Description>{paragraph}</Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
                 Additional Info
                <Icon name='right chevron' />
              </Button>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
    
        <Item>
          <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    
          <Item.Content>
            <Item.Header as='a'>Artifact 3</Item.Header>
            <Item.Meta>
              <span className='cinema'>Object</span>
            </Item.Meta>
            <Item.Description>{paragraph}</Item.Description>
            <Item.Extra>
              <Button primary floated='right'>
                 Additional Info
                <Icon name='right chevron' />
              </Button>
              <Label>Limited</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      </Container>
    )
    
}


export default Artifact