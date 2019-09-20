import React from 'react';
import {
    Container,
    Grid,
    Header,
    List,
    Responsive,
    Segment,
  } from 'semantic-ui-react'


const Footer = () => {
    return(
        <Responsive>
        <Segment inverted bottom vertical style={{ margin: '5em 0em 0em',padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Randy</List.Item>
                    <List.Item as='a'>Sean</List.Item>
                    <List.Item as='a'>Garvin</List.Item>
                    <List.Item as='a'>Tommy Turner</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Info' />
                  <List link inverted>
                    <List.Item as='a'>FAQ</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  {/* <Header as='h4' inverted>
                    Footer Header
                  </Header>
                  <p>
                    Extra space for a call to action inside the footer that could help re-engage users.
                  </p> */}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>

    </Responsive>
    )
}

export default Footer;