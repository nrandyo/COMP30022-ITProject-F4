import * as d3 from "d3";
import "./D3tree.css";
// let data = require("./tree.json");
// import dTree from "d3-dtree";
// import * as data from "./tree.json";

export default class D3Tree {
  constructor(element) {
    // const svg = d3
    //   .select(element)
    //   .append("svg")
    //   .attr("width", 500)
    //   .attr("height", 500);
    // svg
    //   .append("rect")
    //   .attr("x", 50)
    //   .attr("y", 50)
    //   .attr("width", 100)
    //   .attr("height", 400)
    //   .attr("fill", "grey");

    var svg = d3
      .select("#tree")
      .append("svg")
      .attr("width", 900)
      .attr("height", 600)
      .attr("align", "center")
      .append("g")
      .attr("transform", "translate(50,50)");
    var data = [
      { child: "Roots", parent: "" },
      // { child: "Theodore", parent: "Roots", spouse: "Helen" },
      { child: "Jacob", parent: "Roots", spouse: "Sarah" },

      { child: "Zoe", parent: "Joseph" },
      { child: "Leon", parent: "Joseph", spouse: "Mariam" },
      // { child: "Ruth", parent: "Theodore" },
      { child: "Julie", parent: "Jacob" },
      { child: "Julian", parent: "Jacob" },
      { child: "Joseph", parent: "Jacob", spouse: "Ruth" },
      { child: "Emily", parent: "Leon" },
      { child: "Sara", parent: "Leon" },
      { child: "Danya", parent: "Leon" },
      { child: "Alicia", parent: "Zoe" },
      { child: "Joana", parent: "Zoe" }
      // { child: "Mark", parent: "Ann" },
      // { child: "Hannah", parent: "Ann", spouse: "Williams" },
      // { child: "Rose", parent: "Sarah" },
      // { child: "Ann", parent: "John", spouse: "George" },
      // { child: "Sarah", parent: "Kevin", spouse: "James" },
      // { child: "Angel", parent: "Sarah" },
      // { child: "Tom", parent: "Hannah" }
    ];
    var dataStructure = d3
      .stratify()
      .id(function(d) {
        return d.child;
      })
      .parentId(function(d) {
        return d.parent;
      })(data);
    var treeStructure = d3.tree().size([650, 300]);
    var information = treeStructure(dataStructure);
    console.log(information.descendants());

    var connections1 = svg
      .append("g")
      .selectAll("path")
      .data(information.links());
    connections1
      .enter()
      .append("path")
      .attr("d", function(d) {
        return (
          "M" +
          (d.source.x - 20) +
          "," +
          d.source.y +
          "h 60 v 50 H" +
          d.target.x +
          " V" +
          d.target.y
        );
      });

    var connections2 = svg
      .append("g")
      .selectAll("path")
      .data(information.links());
    connections2
      .enter()
      .append("path")
      .attr("d", function(d) {
        return "M" + (d.source.x + 40) + "," + d.source.y + "h 40 ";
      });

    var rectangles = svg
      .append("g")
      .selectAll("rect")
      .data(information.descendants());
    rectangles
      .enter()
      .append("rect")
      .attr("x", function(d) {
        return d.x - 60;
      })
      .attr("y", function(d) {
        return d.y - 20;
      });

    var spouseRectangles = svg
      .append("g")
      .selectAll("rect")
      .data(information.descendants());
    spouseRectangles
      .enter()
      .append("rect")
      .attr("x", function(d) {
        return d.x + 60;
      })
      .attr("y", function(d) {
        return d.y - 20;
      })
      .classed("hide", function(d) {
        if (d.data.spouse == undefined) return true;
        else return false;
      });

    var names = svg
      .append("g")
      .selectAll("text")
      .data(information.descendants());
    names
      .enter()
      .append("text")
      .text(function(d) {
        return d.data.child;
      })
      .attr("x", function(d) {
        return d.x - 20;
      })
      .attr("y", function(d) {
        return d.y;
      })
      .classed("bigger", true);

    var spouseNames = svg
      .append("g")
      .selectAll("text")
      .data(information.descendants());
    spouseNames
      .enter()
      .append("text")
      .text(function(d) {
        return d.data.spouse;
      })
      .attr("x", function(d) {
        return d.x + 100;
      })
      .attr("y", function(d) {
        return d.y;
      })
      .classed("bigger", true);
  }
}
