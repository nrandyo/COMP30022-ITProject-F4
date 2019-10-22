import React, { Component } from "react";
import axios from 'axios';
import {
        Responsive,
        Button,
        Comment,
        Form,
        Header,
        Container,
        Divider,
        Icon,
        Input,
        Modal,
        Message } from "semantic-ui-react";

//Http response status for create
const HTTP_RES_POST = 201;

class CommentSection extends Component {

  constructor() {
    super();

    this.state = {
      comment: [],
      postComment: "",
      author: "",
      successMessage: false,
      failureMessage: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  // Handles submission for all form fields
  handleSubmit(event) {
    event.preventDefault();

    var data =
      {
        Comment: this.state.postComment,
        Author: this.state.author,
        ArtifactID: this.props.match.params.id
      };

    //POST route via backend artifactsRoute
    fetch('/new/comment',
      { method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

    .then((res) => {
      if(res.status === HTTP_RES_POST) {
        this.setState({ successMessage: true });

        setTimeout(() => {
          this.setState({ successMessage: false });
          window.location.reload();
        }, 1500);

      } else {
        this.setState({ failureMessage: true });

        setTimeout(() => {
          this.setState({ failureMessage: false });
          window.location.reload();
        }, 2000);
      }
    })

    .catch((error) => {
      console.log("Error:", error);
    })
  }

  handleChange = (e) => {
    // Constantly updates changes in user input
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`/api/comments/${id}`).then(res => {
      const comment = res.data;
      this.setState(() => ({ comment }));
    });
  }

  render() {

    //Some constants that are used in rendering state
    const { successMessage, failureMessage } = this.state;

    return (
    <Responsive>

      <Container text>
        <Divider horizontal>
          <Header as="h4">
            <Icon name="commenting" />
            Comments
          </Header>
        </Divider>
        <Comment.Group size="large">
        {this.state.comment.map(comment => (
          <Comment>
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
            <Comment.Content>
              <Comment.Author as="a">{comment.Author}</Comment.Author>
              <Comment.Metadata>
                <div>Posted on {this.formatDate(comment.DatePosted)}</div>
              </Comment.Metadata>
              <Comment.Text>{comment.Comment}</Comment.Text>
            </Comment.Content>
          </Comment>))}
        </Comment.Group>

        <Form onSubmit = {this.handleSubmit}>
          <Form.Field>
            <label> Author: </label>
            <Input name='author' onChange = {this.handleChange} />
          </Form.Field>

          <Form.Field>
            <label> Reply: </label>
            <Form.TextArea name='postComment' onChange = {this.handleChange} />
          </Form.Field>

          <Container textAlign='center'>
            <Button color='blue' type='submit'>Submit</Button>
          </Container>

          {/*To display success message to user*/}
          <Modal open = {successMessage}>
            <Container textAlign='center'>
              <Message icon success>
                <Icon name='checkmark'/>
                  <Container textAlign='center'>
                    <Message.Header>Your comment has been posted!</Message.Header>
                  </Container>
              </Message>
            </Container>
          </Modal>

          {/*To display error/failure message to user*/}
          <Modal open = {failureMessage}>
            <Container textAlign='center'>
              <Message icon negative>
                <Icon name='checkmark'/>
                <Message.Content>
                  <Message.Header>An unexpected error has occured!</Message.Header>
                    A problem has been encountered.
                    <p>Please try again later ...... </p>
                </Message.Content>
              </Message>
            </Container>
          </Modal>

        </Form>
      </Container>
    </Responsive>
  )}
}

export default CommentSection;
