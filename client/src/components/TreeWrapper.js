import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Menu } from "semantic-ui-react";
import mySvg from "../images/family.svg";
import D3Tree from "./D3Tree";

class TreeWrapper extends Component {
  componentDidMount() {
    new D3Tree(this.refs.chart);
  }

  render() {
    return <div id="tree" ref="chart"></div>;
  }
}

export default TreeWrapper;
