import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Menu } from "semantic-ui-react";
import mySvg from "../images/family.svg";
import TreeWrapper from "./TreeWrapper";
import * as d3 from "d3";

class FamilyTree extends Component {
  state = { activeItem: "All", headerDesc: "List of All Artifacts" };
  handleItemClick = (e, { name, desc }) =>
    this.setState({ activeItem: name, headerDesc: desc });
  render() {
    const { activeItem, headerDesc } = this.state;
    // const { headerDesc } = this.state
    return (
      <Container style={{ minHeight: 700, padding: "1em 0em" }}>
        <Header
          as="h2"
          textAlign="center"
          content="Family Tree"
          subheader={headerDesc}
        />
        <TreeWrapper />
        {/* <div className="header">
          <img src={mySvg} />
        </div> */}
      </Container>
    );
  }
}

// class FamilyTree extends Component {
//   state = {
//     data: null
//   };

//   componentWillMount() {
//     // load data
//     d3.queue()
//       .defer(d3.json, "/api/familymember/all")
//       .await((error, data) => {
//         this.setState({
//           data
//         });
//       });
//   }

//   componentDidUpdate() {
//     var svg = d3
//       .select("body")
//       .append("svg")
//       .attr("width", 900)
//       .attr("height", 600)
//       .append("g")
//       .attr("transform", "translate(50,50)");

//     var dataStructure = d3
//       .stratify()
//       .id(function(d) {
//         return d.child;
//       })
//       .parentId(function(d) {
//         return d.parent;
//       })(data);
//     var treeStructure = d3.tree().size([650, 300]);
//     var information = treeStructure(dataStructure);
//     console.log(information.descendants());

//     var connections1 = svg
//       .append("g")
//       .selectAll("path")
//       .data(information.links());
//     connections1
//       .enter()
//       .append("path")
//       .attr("d", function(d) {
//         return (
//           "M" +
//           (d.source.x - 20) +
//           "," +
//           d.source.y +
//           "h 60 v 50 H" +
//           d.target.x +
//           " V" +
//           d.target.y
//         );
//       });

//     var connections2 = svg
//       .append("g")
//       .selectAll("path")
//       .data(information.links());
//     connections2
//       .enter()
//       .append("path")
//       .attr("d", function(d) {
//         return "M" + (d.source.x + 40) + "," + d.source.y + "h 40 ";
//       });

//     var rectangles = svg
//       .append("g")
//       .selectAll("rect")
//       .data(information.descendants());
//     rectangles
//       .enter()
//       .append("rect")
//       .attr("x", function(d) {
//         return d.x - 60;
//       })
//       .attr("y", function(d) {
//         return d.y - 20;
//       });

//     var spouseRectangles = svg
//       .append("g")
//       .selectAll("rect")
//       .data(information.descendants());
//     spouseRectangles
//       .enter()
//       .append("rect")
//       .attr("x", function(d) {
//         return d.x + 60;
//       })
//       .attr("y", function(d) {
//         return d.y - 20;
//       })
//       .classed("hide", function(d) {
//         if (d.data.spouse == undefined) return true;
//         else return false;
//       });

//     var names = svg
//       .append("g")
//       .selectAll("text")
//       .data(information.descendants());
//     names
//       .enter()
//       .append("text")
//       .text(function(d) {
//         return d.data.child;
//       })
//       .attr("x", function(d) {
//         return d.x - 20;
//       })
//       .attr("y", function(d) {
//         return d.y;
//       })
//       .classed("bigger", true);

//     var spouseNames = svg
//       .append("g")
//       .selectAll("text")
//       .data(information.descendants());
//     spouseNames
//       .enter()
//       .append("text")
//       .text(function(d) {
//         return d.data.spouse;
//       })
//       .attr("x", function(d) {
//         return d.x + 100;
//       })
//       .attr("y", function(d) {
//         return d.y;
//       })
//       .classed("bigger", true);
//   }

//   render() {
//     // if (!usData || !usCongress) {
//     //   return null;
//     // }

//     return <g ref="anchor" />;
//   }
// }

export default FamilyTree;
