import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Input, Menu, Button, Icon, Image, Item, Label, Container, Header, Segment } from 'semantic-ui-react'
import Timeline from 'react-timeline-semantic-ui'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdAddAPhoto, MdPhoto, MdMail } from "react-icons/md";

const Timelines = () => {

    return(
        <Container >
          <Header
            as='h2'
            textAlign='center'
            content='Timeline'
            subheader='A timeline of significant events'
          />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2011 - present"
              iconStyle={{ background: '#00617F', color: '#fff' }}
              icon=    {<MdMail/>}
            >
              <h3 className="vertical-timeline-element-title">Event 1</h3>
              <h4 className="vertical-timeline-element-subtitle">Location 1</h4>
              <p>
                Description
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: '#8fb4c4', color: '#fff' }}
              icon={<MdPhoto/>}
            >
              <h3 className="vertical-timeline-element-title">Event 2</h3>
              <h4 className="vertical-timeline-element-subtitle">Location 2</h4>
              <p>
                Significant event
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{ background: '#00617F', color: '#fff' }}
              icon={<MdMail/>}
            >
              <h3 className="vertical-timeline-element-title">Event 3</h3>
              <h4 className="vertical-timeline-element-subtitle">Location 3</h4>
              <p>
                Description
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: '#8fb4c4', color: '#fff' }}
              icon={<MdPhoto/>}
            >
              <h3 className="vertical-timeline-element-title">Event 4</h3>
              <h4 className="vertical-timeline-element-subtitle">Location 4</h4>
              <p>
                Description
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              iconStyle={{ background: '#00617F', color: '#fff' }}
              icon={<MdMail/>}
            >
              <h3 className="vertical-timeline-element-title">Event 5</h3>
              <h4 className="vertical-timeline-element-subtitle">Location 5</h4>
              <p>
                Description
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: '#8fb4c4', color: '#fff' }}
              icon={<MdPhoto/>}
            >
              <h3 className="vertical-timeline-element-title">Event 6</h3>
              <h4 className="vertical-timeline-element-subtitle">Location 6</h4>
              <p>
                Description
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{ background: '#00617F', color: '#fff' }}
              icon={<MdMail/>}
            >
              <h3 className="vertical-timeline-element-title">Event 7</h3>
              <h4 className="vertical-timeline-element-subtitle">Location 7</h4>
              <p>
                Description
                </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          {/* <Timeline
            direction="right"
            icon="uers"
            title="Event 1"
            time="Date"
            description="Description."
            color='blue'
            tags={['tag1', 'tag2']}
            lineHeight={3}
          />
          <Timeline 
            direction="left"
            icon="user"
            title="Event 2"
            time="Date"
            description="Description."
            color='grey'
            tags={['tag1', 'tag2']}
            lineHeight={3}
          />
          <Timeline
            direction="right"
            icon="user"
            title="Event 3"
            time="Date"
            description="Description."
            color='blue'
            tags={['tag1', 'tag2']}
            lineHeight={3}
          />
          <Timeline 
            direction="left"
            icon="user"
            title="Event 4"
            time="Date"
            description="Description."
            color='grey'
            tags={['tag1', 'tag2']}
            lineHeight={3}
          />
          <Timeline
            direction="right"
            icon="user"
            title="Event 5"
            time="Date"
            description="Description."
            color='blue'
            tags={['tag1', 'tag2']}
            lineHeight={3}
          /> */}
        </Container>
    )
    
}


export default Timelines