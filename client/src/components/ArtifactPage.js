import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {
    Container,
    Header,
    Menu,
    Grid,
    Image
  } from 'semantic-ui-react'

import './styles.css'

class ArtifactPage extends Component {
    state = {activeItem: 'All', headerDesc: 'List of All Artifacts'}
    handleItemClick = (e, { name, desc }) => this.setState({ activeItem: name, headerDesc: desc })
    render(){
        const { activeItem, headerDesc} = this.state
        // const { headerDesc } = this.state
        return (
            <Container style={{ minHeight: 90, padding: '1em 0em'}}>
                  <Grid>
    <Grid.Column width={4}>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column width={9}>
      {/* <Image src='/images/wireframe/paragraph.png' /> */}
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
  </Grid>
            </Container>
        );
    }
}

export default ArtifactPage;