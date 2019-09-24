import React from "react";
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

const CommentSection = () => (
  <Responsive>
    <Container text>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="commenting" />
          Comments
        </Header>
      </Divider>
      <Comment.Group size="large">
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Yusuke</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
          </Comment.Content>
        </Comment>
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
    </Container>
  </Responsive>
);

export default CommentSection;
