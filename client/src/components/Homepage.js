import React from 'react';
import LeonSterling from '../images/LeonSterling.jpg';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'


const Homepage = () => {
    return(
        <Responsive>
        <Segment  style={{ padding: '1em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Welcome to Leon Sterling's artifact registry
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  {/* The best lecturer and client in the world! */}
                  A Professor in the School of Computing and Information Systems at The University of Melbourne.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  A place where Leon's artifacts are registered and organised
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you can see all of Leon's significant artifacts and read their stories
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image bordered rounded size='large' src={LeonSterling} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button  animated='vertical' size='huge'>
                <Button.Content visible>Check him out</Button.Content>
                <Button.Content hidden><Icon name='info' /></Button.Content>
                    </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment inverted primary color='blue' style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Made by the Fantastic 4
                </Header>
                <p style={{ fontSize: '1.33em' }}>Randy, Sean, Tommy and Garvin</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  A Capstone project for COMP30022
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                    A project to meet a client's requirements
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          {/* <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Features 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have learned how to master the
              art of doing nothing by providing massive amounts of whitespace and generic content that
              can seem massive, monolithic and worth your attention.
            </p>
            <Button as='a' size='large'>
              Read More
            </Button>
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>Case Studies</a>
            </Divider>
            <Header as='h3' style={{ fontSize: '2em' }}>
              
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
              it's really true. It took years of gene splicing and combinatory DNA research, but our
              bananas can really dance.
            </p>
            <Button as='a' size='large'>
              I'm Still Quite Interested
            </Button>
          </Container> */}
        </Segment>
        {/* <Segment inverted vertical style={{ padding: '5em 0em' }}>
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
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment> */}

    </Responsive>
    )
}

export default Homepage;