import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Input, Menu, Button, Icon, Image, Item, Label, Container, Header, Segment } from 'semantic-ui-react'
import Timeline from 'react-timeline-semantic-ui'

const Timelines = () => {

    return(
        <Container>
                          <Header
                    as='h2'
                    textAlign='center'
                    content='Timeline'
                    subheader='A timeline of significant events'
                />
<Timeline
  direction="right"
  icon="user"
  title="Event 1"
  time="Date"
  description="Description."
  color='blue'
  tags={['tag1', 'tag2']}
  lineHeight={0}
/>
<Timeline 
  direction="left"
  icon="user"
  title="Event 2"
  time="Date"
  description="Description."
  color='grey'
  tags={['tag1', 'tag2']}
  lineHeight={10}
/>
<Timeline
  direction="right"
  icon="user"
  title="Event 3"
  time="Date"
  description="Description."
  color='blue'
  tags={['tag1', 'tag2']}
  lineHeight={10}
/>
<Timeline 
  direction="left"
  icon="user"
  title="Event 4"
  time="Date"
  description="Description."
  color='grey'
  tags={['tag1', 'tag2']}
  lineHeight={10}
/>
<Timeline
  direction="right"
  icon="user"
  title="Event 5"
  time="Date"
  description="Description."
  color='blue'
  tags={['tag1', 'tag2']}
  lineHeight={10}
/>
        </Container>
    )
    
}


export default Timelines