import _ from "lodash";
import PropTypes from "prop-types";
import axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Search,
  Card,
  Image
} from "semantic-ui-react";

const resultRenderer = ({ title, description, image }) => {
  var img = "";
  console.log(image);
  if (image === "" || image === null) {
    img = "placeholder.png";
  } else {
    img = image;
  }
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="small"
          src={require("../artifactImages/" + img)}
        />
        <Card.Header> {title} </Card.Header>
        <Card.Description> {description} </Card.Description>
      </Card.Content>
    </Card>
  );
};

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

class Navbar extends Component {
  state = {
    activeItem: "home",
    isLoading: false,
    results: [],
    value: "",
    artifacts: null
  };

  componentDidMount() {
    axios.get("/api/artifacts/all").then(res => {
      var arrArtifacts = [];
      var allArtifacts = JSON.parse(JSON.stringify(res.data));

      allArtifacts.forEach(function(artifact, i) {
        var newArtifactObj = {
          id: artifact.ArtifactID,
          title: artifact.Name,
          description: artifact.Description,
          image: artifact.FilePath
        };
        arrArtifacts.push(newArtifactObj);
      });

      this.setState({ artifacts: arrArtifacts });
    });
  }

  handleResultSelect = (e, { result }) => {
    this.props.history.push("/artifactpage/" + result.id);
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
        return re.test(result.title);
      };

      this.setState({
        isLoading: false,
        results: _.filter(this.state.artifacts, isMatch)
      });
    }, 300);
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem, isLoading, value, results } = this.state;
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
                <Search
                  loading={isLoading}
                  onResultSelect={this.handleResultSelect}
                  onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    leading: true
                  })}
                  results={results}
                  resultRenderer={resultRenderer}
                  value={value}
                  {...this.props}
                />
              </Menu.Menu>
            </Container>
          </Menu>
        </Segment>
      </Responsive>
    );
  }
}

export default withRouter(Navbar);
