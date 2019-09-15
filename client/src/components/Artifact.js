import React, { Component } from 'react';
import { Input, Menu, Button, Icon, Image, Item, Label, Container, Header, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
const Artifact = () => {

    return(
        <Container>
              <Header
                    as='h2'
                    textAlign='center'
                    content='Artifacts'
                    subheader='A regeister of all the artifacts are displayed below'
                />
        <Menu pointing secondary>
          <Menu.Item
            as = {Link} to= '/artifacts/photos'
            name='Photos'
            // active={activeItem === 'home'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            as = {Link} to= '/artifacts/letters'
            name='Letters'
            // active={activeItem === 'messages'}
            // onClick={this.handleItemClick}
          />
          <Menu.Item
            as = {Link} to= '/artifacts/objects'
            name='Physical Objects'
            // active={activeItem === 'friends'}
            // onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              as = {Link} to= '/artifacts/new'
              name='Register Artifact'

            //   active={activeItem === 'logout'}
            //   onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        <Item.Group divided>
        <Item>
          <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    
          <Item.Content>
            <Item.Header as='a'>Artifact 1</Item.Header>
            <Item.Meta>
              <span className='cinema'>Photo</span>
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