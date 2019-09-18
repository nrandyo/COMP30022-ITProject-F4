import React, { Component } from 'react';
import { Input, Menu, Button, Icon, Image, Item, Label, Container, Header, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ArtifactItem from "./ArtifactItem";
import axios from 'axios'

class Photos extends Component {
  constructor(props){
    super(props);
    this.state = {
      physicalObjects: [
        {
          "ArtifactID":null,
          "Name":null,
          "Geotag":null,
          "Tags":null,
          "DateAddedYear":null,
          "DateAddedMonth":null,
          "DateAddedDay":null,
          "DateSentYear":null,
          "DateSentMonth":null,
          "DateSentDay":null,
          "DateAcquireYear":null,
          "DateAcquireMonth":null,
          "DateAcquireDay":null,
          "AccuracyAdded":null,
          "AccuracyAcquire":null,
          "AccuracySent":null,
          "Text":null,
          "Heir":null,
          "CurrentOwner":null,
          "User_UserID":1,
          "Photo_PhotoID":null
        }
      ],
      error: {}
    }
  }
  
  componentDidMount() {
    this.handleLoad();
  }

  handleLoad = () => {
    var self = this;
    axios
        .get("/api/artifacts/photos")
        .then(function(response) {
            var d = response.data;
            self.setState({ physicalObjects: d });
        })
        .catch(function(err) {
            self.setState({ error: err });
        });
  }

  render() {
    const {physicalObjects} = this.state; 
    return(
        <Container>
          <Item.Group divided >
          {physicalObjects.map((obj, index) => (
              <ArtifactItem key={index} artifact={obj} />
            ))}
          </Item.Group>
        </Container>
    )
  }
    
}


export default Photos