import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdPhoto, MdMail } from "react-icons/md";
import axios from "axios";

class Timelines extends Component {
  state = {
    artifacts: []
  };

  // sort_by = (field, reverse, primer) => {
  //   const key = primer ?
  //     function(x) {
  //       return primer(x[field])
  //     } :
  //     function(x) {
  //       return x[field]
  //     };
  
  //   reverse = !reverse ? 1 : -1;
  
  //   return function(a, b) {
  //     return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
  //   }
  // } 

  //  handleSort(keys) {
  //   return function(a, b) {
  //       if (keys.length == 0) return 0; // force to equal if keys run out
  //       var key = keys[0]; // take out the first key
  //       if (a[key] < b[key]) return -1; // will be 1 if DESC
  //       else if (a[key] > b[key]) return 1; // will be -1 if DESC
  //       else return this.handleSort(keys.slice(1))(a, b);
  //   }
  // }
  

  componentDidMount() {
    axios.get(`/api/artifacts/timeline`).then(res => {
      const artifacts = res.data;
      this.setState({ artifacts });
    });

    // this.state.artifacts.sort((a, b) => a. - b.sort1 || a.sort2 - b.sort2);
    const artifacts = this.state.artifacts.sort(this.handleSort(['DateAcquireYear', 'DateAcquireMonth', 'DateAcquireDay']));
    this.setState({ artifacts });
  }

  render() {
    return (
      <Container>
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
