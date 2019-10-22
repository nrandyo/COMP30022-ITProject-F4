import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, Container, Header, Icon, Menu } from "semantic-ui-react";
import mySvg from "../images/family.svg";
import TreeWrapper from "./TreeWrapper";
import * as d3 from "d3";
import { Item } from "semantic-ui-react/dist/commonjs/views/Item/Item";

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
    const { activeItem, headerDesc } = this.state;
    // const { headerDesc } = this.state
    return (
      <Container text style={{ minHeight: 700, padding: "0em 14em" }}>
        {/* <TreeWrapper /> */}
        <div>
          {this.renderRedirect()}

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
                  </div>
                  <ul>
                    <li>
                      <div>
                        <span className="female">Sarah</span>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div>
                    <span className="male">Theodore</span>
                  </div>
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

export default FamilyTree;
