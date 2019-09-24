import React, {Component} from 'react'
import { withRouter } from 'react-router'
import { Button,
         Form,
         Container,
         Input,
         Icon,
         Header,
         Modal,
         Image,
         Label,
         Message,
         Loader,
         List } from 'semantic-ui-react'

//Http response status for delete
const RES_DELETE = 200;

class DeleteArtifact extends Component {

  constructor() {
    super();

    this.state = {
      };
  }


  render() {

    return (
      
      <Container textAlign='center'>
        <p>Delete artifacts page</p>
      </Container>

    );
  }
}

export default withRouter(DeleteArtifact);
