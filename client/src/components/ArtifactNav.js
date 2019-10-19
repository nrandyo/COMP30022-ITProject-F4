import _ from 'lodash'
import PropTypes from 'prop-types'
import axios from 'axios';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Menu,
  Input,
  Icon,
  Dropdown,
  Search,
  Segment,
  Label,
  Grid } from "semantic-ui-react";

const resultRenderer = ({ Name }) => <Label content={Name} />

resultRenderer.propTypes = {
  Name: PropTypes.string,
  description: PropTypes.string,
}

class ArtifactNav extends Component {
  state = {
    activeItem: "All",
    headerDesc: "List of All Artifacts",
    isLoading: false,
    results: [],
    value: '',
    artifacts: null
   };

  componentDidMount() {
   axios.get("/api/artifacts/all").then(res => {
     this.setState({ artifacts: res.data});
   });
  }

  handleResultSelect = (e, {result}) => {
    this.props.history.push('/artifactpage/' + result.ArtifactID);
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1)
        return this.setState({
          isLoading: false,
          results: [],
          value: ''
      })

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => {

        console.log(result.Name);
        return re.test(result.Name);
      }
      this.setState({
        isLoading: false,
        results: _.filter(this.state.artifacts, isMatch),
      })
    }, 300)
  }

  handleItemClick = (e, { name, desc }) =>
    this.setState({ activeItem: name, headerDesc: desc });

  render() {
    const { activeItem, headerDesc, isLoading, value, results, artifacts } = this.state;
    const options = [
      {
        key: "name",
        text: "name",
        value: "name",
        content: "Name"
      },
      {
        key: "date",
        text: "date",
        value: "date",
        content: "Date"
      }
    ];
    // const { headerDesc } = this.state
    return (
      <Container style={{ minHeight: 90, padding: "1em 0em" }}>
        <Header
          as="h2"
          textAlign="center"
          content="Artifacts"
          subheader={headerDesc}
        />
        <Menu pointing secondary color="blue">
          <Menu.Item
            as={Link}
            to="/artifacts"
            name="All"
            desc="List of All Artifacts"
            active={activeItem === "All"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/artifacts/photos"
            name="Photos"
            desc="List of Photos"
            active={activeItem === "Photos"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/artifacts/letters"
            name="Letters"
            desc="List of Letters"
            active={activeItem === "Letters"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/artifacts/objects"
            name="Physical Objects"
            desc="List of Physical Artifacts"
            active={activeItem === "Physical Objects"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            add
            to="/artifacts/new"
            name="Register Artifact"
            desc="Add a new artifact"
            active={activeItem === "Register Artifact"}
            onClick={this.handleItemClick}
          >
            <Icon name="add" size="small" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              Sorted by:
              <Dropdown
                inline
                header="Sort by"
                options={options}
                defaultValue={options[0].value}
              />
            </Menu.Item>
            <Grid>
              <Grid.Column width={6}>
                <Search
                  loading={isLoading}
                  onResultSelect={this.handleResultSelect}
                  onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    leading: true,
                  })}
                  results={results}
                  value={value}
                  resultRenderer={resultRenderer}
                  {...this.props}

                />
              </Grid.Column>
            </Grid>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}

export default ArtifactNav;
