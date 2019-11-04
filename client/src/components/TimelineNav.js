import React, { Component } from "react";
import { Container, Header, Menu, Form, Input } from "semantic-ui-react";
import { YearInput } from "semantic-ui-calendar-react";

class TimelineNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: "",
      end: ""
    };
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };
  render() {
    return (
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
                // startMode="year"
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
                // startMode="year"
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
    );
  }
}

export default TimelineNav;
