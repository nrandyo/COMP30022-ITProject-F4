import React, { Component } from "react";
import { withRouter } from "react-router";
import {
  Button,
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
  List
} from "semantic-ui-react";

//Http response status for delete
const RES_UPDATE = 201;

class UpdateArtifact extends Component {
  // constructor() {
  //   this.state = {
  //     todoListItems: [],
  //     todoItem: {},
  //     // todoListInput: ‘’,
  //     // todoListEdit: ‘’
  //   }
  // }
  // async editTodo(id) {
  //   const itemToEdit = this.state.todoListEdit
  //   const {data} = await Axios.put(`artifacts/update/:id"${id}`, itemToEdit)
  //   const currentState = this.state.todoListItems
  //   this.setState({todoListItems: currentState.concat(itemToEdit)})
  //  }

  render() {
    return (
      <Container textAlign="center">
        <p>Update artifacts page</p>
      </Container>
    );
  }
}

export default withRouter(UpdateArtifact);
