import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdPhoto, MdMail } from "react-icons/md";
import axios from "axios";
import { Container, Header, Menu, Form, Input, icon } from "semantic-ui-react";
import { YearInput } from "semantic-ui-calendar-react";

class Timelines extends Component {
  state = {
    artifacts: [],
    start: null,
    end: null
  };

  componentDidMount() {
    axios.get(`/api/artifacts/timeline`).then(res => {
      const artifacts = res.data;
      // .sort(this.handleSort(['DateAcquireYear', 'DateAcquireMonth', 'DateAcquireDay']))
      this.setState({ artifacts });
    });
  }

  getArtifacts() {
    var apiEndpoint =
      `/api/timeline/` + this.state.start + "/" + this.state.end;
    console.log(apiEndpoint);
    axios.get(apiEndpoint).then(res => {
      const artifacts = res.data;
      // .sort(this.handleSort(['DateAcquireYear', 'DateAcquireMonth', 'DateAcquireDay']))
      this.setState({ artifacts });
    });
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
    this.getArtifacts();
  };

  render() {
    return (
      <Container>
        <Container style={{ minHeight: 90, padding: "1em 0em" }}>
          <Header
            as="h2"
            textAlign="center"
            content="Timeline"
            subheader="A timeline of significant events"
          />
          <Menu pointing secondary color="blue">
            <Menu.Item>
              <Form>
                <YearInput
                  popupPosition="bottom center"
                  name="start"
                  maxDate={this.state.end}
                  transparent
                  allowSameEndDate
                  startMode="year"
                  placeholder="From"
                  value={this.state.start}
                  iconPosition="left"
                  onChange={this.handleChange}
                />
              </Form>
            </Menu.Item>
            <Menu.Item>
              <Form>
                <YearInput
                  popupPosition="bottom center"
                  name="end"
                  minDate={this.state.start}
                  transparent
                  allowSameEndDate
                  startMode="year"
                  disableMonth="true" // disable month selection mode
                  disableMinute="true"
                  placeholder="To"
                  value={this.state.end}
                  iconPosition="left"
                  onChange={this.handleChange}
                />
              </Form>
            </Menu.Item>
            <Menu.Menu position="right">
              <Input transparent icon="search" placeholder="Search..." />
            </Menu.Menu>
          </Menu>
        </Container>
        <VerticalTimeline>
          {this.state.artifacts.map(artifact => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={artifact.DateAcquireYear}
              iconStyle={{ background: "#00617F", color: "#fff" }}
              icon={<MdMail />}
            >
              <h3 className="vertical-timeline-element-title">
                {artifact.Name}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Location 1</h4>
              <p>{artifact.Description}</p>
            </VerticalTimelineElement>
          ))}
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "#8fb4c4", color: "#fff" }}
            icon={<MdPhoto />}
          >
            <h3 className="vertical-timeline-element-title">Event 2</h3>
            <h4 className="vertical-timeline-element-subtitle">Location 2</h4>
            <p>Significant event</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "#00617F", color: "#fff" }}
            icon={<MdMail />}
          >
            <h3 className="vertical-timeline-element-title">Event 3</h3>
            <h4 className="vertical-timeline-element-subtitle">Location 3</h4>
            <p>Description</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "#8fb4c4", color: "#fff" }}
            icon={<MdPhoto />}
          >
            <h3 className="vertical-timeline-element-title">Event 4</h3>
            <h4 className="vertical-timeline-element-subtitle">Location 4</h4>
            <p>Description</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "#00617F", color: "#fff" }}
            icon={<MdMail />}
          >
            <h3 className="vertical-timeline-element-title">Event 5</h3>
            <h4 className="vertical-timeline-element-subtitle">Location 5</h4>
            <p>Description</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "#8fb4c4", color: "#fff" }}
            icon={<MdPhoto />}
          >
            <h3 className="vertical-timeline-element-title">Event 6</h3>
            <h4 className="vertical-timeline-element-subtitle">Location 6</h4>
            <p>Description</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "#00617F", color: "#fff" }}
            icon={<MdMail />}
          >
            <h3 className="vertical-timeline-element-title">Event 7</h3>
            <h4 className="vertical-timeline-element-subtitle">Location 7</h4>
            <p>Description</p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </Container>
    );
  }
}

export default Timelines;
