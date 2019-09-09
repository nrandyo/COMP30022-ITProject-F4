import React, { Component } from "react";
import "./member.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import SentimentVerySatisfiedRoundedIcon from "@material-ui/icons/SentimentVerySatisfiedRounded";

class Member extends Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }
  componentDidMount() {
    fetch("/api/members")
      .then(res => res.json())
      .then(members =>
        this.setState({ members }, () =>
          console.log("Members fetched", members)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>Members</h2>
        <ul>
          {this.state.members.map(member => (
            <List
              component="nav"
              aria-label="main mailbox folders"
              key={member.id}
            >
              <ListItem button>
                <ListItemIcon>
                  <SentimentVerySatisfiedRoundedIcon />
                </ListItemIcon>
                {member.firstName} {member.lastName}
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          ))}
        </ul>
      </div>
    );
  }
}

export default Member;
