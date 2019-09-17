import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {
    Container,
    Header,
    Menu,
  } from 'semantic-ui-react'

import './styles.css'

class ArtifactNav extends Component {
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleHeader = (e, { desc }) => this.setState({ headerDesc: desc })
    render(){
        const { activeItem} = this.state
        const { headerDesc } = this.state
        return (
        <Container style={{ minHeight: 90, padding: '1em 0em'}}>
            <Header
                  as='h2'
                  textAlign='center'
                  content= 'Artifacts'
                  subheader={headerDesc}
              />
      <Menu pointing secondary color = "blue">
      <Menu.Item
          as = {Link} to= '/artifacts'
          name='All'
          desc= 'Hello randy'
          active={activeItem === 'All', headerDesc === 'Hello Randy'}
          onClick={this.handleItemClick, this.handleHeader}
        />
        <Menu.Item
          as = {Link} to= '/artifacts/photos'
          name='Photos'
          active={activeItem === 'Photos'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as = {Link} to= '/artifacts/letters'
          name='Letters'
          active={activeItem === 'Letters'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as = {Link} to= '/artifacts/objects'
          name='Physical Objects'
          active={activeItem === 'Physical Objects'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
        {/* <Input size='mini' icon='search' placeholder='Search...' /> */}
          <Menu.Item
            as = {Link} to= '/artifacts/new'
            name='Register Artifact'

            active={activeItem === 'Register Artifact'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
      </Container>
        );
    }
}

export default ArtifactNav;