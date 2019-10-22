import _ from "lodash";
import PropTypes from "prop-types";
import axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Grid,
  Search,
  Label
} from "semantic-ui-react";

const resultRenderer = ({ Name }) => <Label content={Name} />;

resultRenderer.propTypes = {
  Name: PropTypes.string,
  description: PropTypes.string
};

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    activeItem: "home",
    isLoading: false,
    results: [],
    value: "",
    artifacts: null
  };

  componentDidMount() {
    axios.get("/api/artifacts/all").then(res => {
      this.setState({ artifacts: res.data });
    });
  }

  handleResultSelect = (e, { result }) => {
    this.props.history.push("/artifactpage/" + result.ArtifactID);
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1)
        return this.setState({
          isLoading: false,
          results: [],
          value: ""
        });

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");

      const isMatch = result => {
        return re.test(result.Name);
      };

      this.setState({
        isLoading: false,
        results: _.filter(this.state.artifacts, isMatch)
      });
    }, 300);
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem, isLoading, value, results, artifacts } = this.state;
    return (
      <Responsive>
        <Segment
          // inverted
          textAlign="center"
          style={{ minHeight: 90, padding: "0em 0em" }}
          vertical
        >
          <Menu color="blue" fixed pointing secondary size="large">
            <Container>
              <Menu.Item
                as={Link}
                to="/"
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              />

              <Menu.Item
                as={Link}
                to="/artifacts"
                name="artifacts"
                active={activeItem === "artifacts"}
                onClick={this.handleItemClick}
                link
              />
              <Menu.Item
                as={Link}
                to="/timeline"
                name="timeline"
                active={activeItem === "timeline"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                as={Link}
                to="/familytree/1"
                name="family tree"
                active={activeItem === "family tree"}
                onClick={this.handleItemClick}
              />
              <Menu.Menu position="right">
                <Grid>
                  <Grid.Column width={6}>
                    <Search
                      loading={isLoading}
                      onResultSelect={this.handleResultSelect}
                      onSearchChange={_.debounce(this.handleSearchChange, 500, {
                        leading: true
                      })}
                      results={results}
                      value={value}
                      resultRenderer={resultRenderer}
                      {...this.props}
                    />
                  </Grid.Column>
                </Grid>
              </Menu.Menu>
            </Container>
          </Menu>
        </Segment>
      </Responsive>
    );
  }
}

export default withRouter(Navbar);
