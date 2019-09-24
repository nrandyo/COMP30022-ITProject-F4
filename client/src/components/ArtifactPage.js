import React, { Component } from "react";
import LeonSterling from "../images/LeonSterling.jpg";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import ImageGallery from "react-image-gallery";
import {
  Container,
  Header,
  Menu,
  Grid,
  Image,
  Divider,
  Responsive,
  List,
  Segment,
  Button,
  Icon,
  Table
} from "semantic-ui-react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        filter: "invert(100%)"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        filter: "invert(100%)"
      }}
      onClick={onClick}
    />
  );
}

class ArtifactPage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      // centerMode: true
    };
    return (
      <Responsive>
        <Container style={{ minHeight: 600, padding: "1em 0em" }}>
          <Header
            as="h2"
            textAlign="center"
            content="Artifact Name"
            subheader={"More information about the artifact"}
          />
          <Menu pointing secondary color="blue">
            <Menu.Menu position="right">
              <Menu.Item
                as={Link}
                to="/artifacts/new"
                name="Update Artifact"
                desc="Update artifact"
                // active={activeItem === "Register Artifact"}
                // onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
          <Slider {...settings}>
            <div>
              <Image centered src={LeonSterling} bordered />
            </div>
            <div>
              <Image centered src={LeonSterling} bordered />
            </div>
            <div>
              <Image centered src={LeonSterling} bordered />
            </div>
            <div>
              <Image centered src={LeonSterling} bordered />
            </div>
            <div>
              <Image centered src={LeonSterling} bordered />
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
          <Segment style={{ padding: "3em 0em" }} vertical>
            <Container text>
              <Divider horizontal>
                <Header as="h4">
                  <Icon name="book" />
                  Description
                </Header>
              </Divider>
              <p style={{ fontSize: "1.2em" }}>
                Yes I know you probably disregarded the earlier boasts as
                non-sequitur filler content, but it's really true. It took years
                of gene splicing and combinatory DNA research, but our bananas
                can really dance.
              </p>
              <Divider horizontal>
                <Header as="h4">
                  <Icon name="info circle" />
                  Details
                </Header>
              </Divider>
              <Table definition color="blue">
                <Table.Body>
                  <Table.Row>
                    <Table.Cell width={2}>Name</Table.Cell>
                    <Table.Cell>Name of artifact</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Type</Table.Cell>
                    <Table.Cell>Type of artifact</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Current Owner</Table.Cell>
                    <Table.Cell>Current owner of artifact</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Current Location</Table.Cell>
                    <Table.Cell>Current loaction of artifact</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Date Acquired</Table.Cell>
                    <Table.Cell>Date artifact was obtained</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Container>
          </Segment>
        </Container>
      </Responsive>
    );
  }
}

export default ArtifactPage;
