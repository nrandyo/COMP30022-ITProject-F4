import React, { Component, useState, useEffect } from "react";
import {
  Responsive,
  Button,
  Comment,
  Form,
  Header,
  Container,
  Divider,
  Icon,
  Input
} from "semantic-ui-react";
import axios from 'axios';
  
export default class CommentSection extends Component {
  // const ArtifactPage = ({ id }) => {

  state = {
    comment: []
  };
  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`/api/comments/${id}`).then(res => {
      const comment = res.data;
      this.setState(() => ({ comment }));
    });
  }

  render() {
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
                <div>Today at {comment.DatePosted}</div>
              </Comment.Metadata>
              <Comment.Text>{comment.Comment}</Comment.Text>
            </Comment.Content>
          </Comment>))}
        </Comment.Group>
  
        <Form reply>
          <Form.Field control={Input} label="Author" placeholder="Author" />
          <Form.TextArea />
          <Button
            content="Add Comment"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </Container>))}
    </Responsive>
  )
    }
  }