import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";

class FamilyTree extends Component {
  state = {
    activeItem: "All",
    headerDesc: "List of All Artifacts",
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="familytree/member/1" />;
    }
  };

  handleItemClick = (e, { name, desc }) =>
    this.setState({ activeItem: name, headerDesc: desc });
  render() {
    // const { activeItem, headerDesc } = this.state;
    // const { headerDesc } = this.state
    return (
      <Container fluid style={{ minHeight: 700, padding: "1em 0em" }}>
        {/* <TreeWrapper /> */}
        <div>
          {this.renderRedirect()}

          <Button as={Link} to={"/familytree/new"} primary floated="right">
            Add family member
          </Button>

          <title>Test Family Tree</title>
          {/* I found and adapted this css code from: https://stackoverflow.com/questions/38192074/family-tree-css */}
          {/* There is also an example on codepen.io at: http://codepen.io/Pestov/pen/BLpgm */}
          {/* I am not sure who the original creator is */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n* {\nmargin: 0;\npadding: 0;\n}\n.tree {\nwhite-space: nowrap;\nmin-width: 800px;\nmin-height:500px;\n}\n.tree ul {\npadding-top: 20px;\nposition: relative;\ntransition: all 0.5s;\n-webkit-transition: all 0.5s;\n-moz-transition: all 0.5s;\n}\n.tree li {\nfloat: left;\ntext-align: center;\nlist-style-type: none;\nposition: relative;\npadding: 20px 5px 0 5px;\ntransition: all 0.5s;\n-webkit-transition: all 0.5s;\n-moz-transition: all 0.5s;\n}\n/*We will use ::before and ::after to draw the connectors*/\n.tree li::before, .tree li::after {\ncontent: '';\nposition: absolute;\ntop: 0;\nright: 50%;\nborder-top: 1px solid #ccc;\nwidth: 50%;\nheight: 20px;\n}\n.tree li::after {\nright: auto;\nleft: 50%;\nborder-left: 1px solid #ccc;\n}\n/*We need to remove left-right connectors from elements without any siblings*/\n.tree li:only-child::after, .tree li:only-child::before {\ndisplay: none;\n}\n/*Remove space from the top of single children*/\n.tree li:only-child {\npadding-top: 0;\n}\n/*Remove left connector from first child and right connector from last child*/\n.tree li:first-child::before, .tree li:last-child::after {\nborder: 0 none;\n}\n/*Adding back the vertical connector to the last nodes*/\n.tree li:last-child::before {\nborder-right: 1px solid #ccc;\nborder-radius: 0 5px 0 0;\n-webkit-border-radius: 0 5px 0 0;\n-moz-border-radius: 0 5px 0 0;\n}\n.tree li:first-child::after {\nborder-radius: 5px 0 0 0;\n-webkit-border-radius: 5px 0 0 0;\n-moz-border-radius: 5px 0 0 0;\n}\n/*Time to add downward connectors from parents*/\n.tree ul ul::before {\ncontent: '';\nposition: absolute;\ntop: 0;\nleft: 50%;\nborder-left: 1px solid #ccc;\nwidth: 0;\nheight: 20px;\n}\n.tree li div {\nborder: 1px solid #ccc;\npadding: 5px 10px;\ntext-decoration: none;\ncolor: #666;\nfont-size: 15px;\ndisplay: inline-block;\nmin-width: 80px;\nmin-height: 30px;\nborder-radius: 5px;\n-webkit-border-radius: 5px;\n-moz-border-radius: 5px;\ntransition: all 0.5s;\n-webkit-transition: all 0.5s;\n-moz-transition: all 0.5s;\n}\n.tree li div .male {\nbackground-color:#8fb4c4;\ndisplay: inline-block;\nwidth:90px;\npadding:10px;\nborder-radius: 5px;\n-webkit-border-radius: 5px;\n-moz-border-radius: 5px;\n}\n.tree li div .female {\nbackground-color:lightgrey;\ndisplay: inline-block;\nwidth:90px;\npadding:10px;\nborder-radius: 5px;\n-webkit-border-radius: 5px;\n-moz-border-radius: 5px;\n}\n.tree li div .spacer {\nbackground-color:lightblue;\ndisplay: inline-block;\nwidth:10px;\n}\n/*Time for some hover effects*/\n/*We will apply the hover effect the the lineage of the element also*/\n.tree li div:hover, .tree li div:hover + ul li div {\nbackground: #c8e4f8;\ncolor: #000;\nborder: 1px solid #94a0b4;\n}\n/*Connector styles on hover*/\n.tree li div:hover + ul li::after,\n.tree li div:hover + ul li::before,\n.tree li div:hover + ul::before,\n.tree li div:hover + ul ul::before {\nborder-color: #94a0b4;\n}\n"
            }}
          />
          <form id="form1">
            <div className="tree" id="FamilyTreeDiv">
              <ul>
                <li>
                  <div>
                    <span className="male">Bernard</span>
                    <span className="spacer" />
                    <span className="female">Sarah Harris</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span className="female">Helen</span>
                    <span className="spacer" />
                    <span className="male">Theodore</span>
                  </div>
                  <ul>
                    <li>
                      <div>
                        <span className="female">Cynthia</span>
                      </div>

                      <ul>
                        <li>
                          <div>
                            <span className="male">Barry</span>
                          </div>
                          <ul>
                            <li>
                              <div>
                                <span className="male">Aviva</span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span className="male">Tamaria</span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span className="male">Jeremy</span>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <span className="female">David</span>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <span className="female">Sarah</span>
                    <span className="spacer" />
                    <span className="male">Jacob</span>
                  </div>
                  <ul>
                    <li>
                      <div>
                        <span className="male">Joseph</span>
                        <span className="spacer" />
                        <span className="female">Ruth</span>
                      </div>
                      <ul>
                        <li>
                          <div>
                            <a className="male" onClick={this.setRedirect}>
                              Leon
                            </a>
                            <span className="spacer" />
                            <span className="female">Mariam</span>
                          </div>
                          <ul>
                            <li>
                              <div>
                                <span className="female">Danya</span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span className="female">Sara</span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span className="female">Emily</span>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div>
                            <span className="female">Zoe Sterling</span>
                          </div>
                          <ul>
                            <li>
                              <div>
                                <span className="male">Alicia</span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <span className="male">Joana</span>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <div>
                        <span className="male">Julian</span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span className="female">Julie</span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </form>
        </div>
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
