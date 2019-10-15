import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Menu,
  Button,
  Icon,
  Image,
  Item,
  Label,
  Container,
  Header,
  Segment,
  Loader,
  Dimmer
} from "semantic-ui-react";


const ArtifactItem = ({ items, loading }) => {
  //   formatDate = (date) => {
  //     var d = new Date(date).toDateString();
  //     return d;
  //    }
  if (loading) {
    return (
      <Container style={{ minHeight: 600, padding: "1em 0em" }}>
        <Loader active inline="centered" />
      </Container>
    );
  }
  

  return (
    <Container style={{ minHeight: 600, padding: "1em 0em" }}>
      <Item.Group divided>
        {items.map(item => {
          var path = item.FilePath;
          return (
          
            <Item>
              <Item.Image src={require('../artifactImages/' + path)} />
              <Item.Content>
                <Item.Header as="a">{item.Name}</Item.Header>
                <Item.Meta>
                  <span className="cinema">{item.DateAcquireYear}</span>
                </Item.Meta>
                <Item.Description>{item.Description}</Item.Description>
                <Item.Extra>
                  <Button as={Link} to={'/artifactpage/' + item.ArtifactID} primary floated="right">
                    Additional Info
                    <Icon name="right chevron" />
                  </Button>
                  <Label>Limited</Label>
                </Item.Extra>
              </Item.Content>
            </Item>
          )
        }
          )}
      </Item.Group>
    </Container>
  );
};

export default ArtifactItem;

// export default class ArtifactItem extends Component {
//   //   formatDate = (date) => {
//   //     var d = new Date(date).toDateString();
//   //     return d;
//   //    }

//   render() {
//     const artifact = this.props.artifact;
//     return (
//       <Item>
//         <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />

//         <Item.Content>
//           <Item.Header as="a">{artifact.Name}</Item.Header>
//           <Item.Meta>
//             <span className="cinema">{artifact.DateAcquireYear}</span>
//           </Item.Meta>
//           <Item.Description>{artifact.description}</Item.Description>
//           <Item.Extra>
//             <Button primary floated="right">
//               Additional Info
//               <Icon name="right chevron" />
//             </Button>
//             <Label>Limited</Label>
//           </Item.Extra>
//         </Item.Content>
//       </Item>
//     );
//   }
// }
