import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
  }

  fileInputRef = React.createRef();

  fileChange = e => {
    this.setState({ file: e.target.files[0] }, () => {
      console.log("File chosen --->", this.state.file);
    });
  };

  render() {
    return (
      <Form.Field>
        <Button
          content="Choose File"
          labelPosition="left"
          icon="file"
          onClick={() => this.fileInputRef.current.click()}
        />
        <input
          ref={this.fileInputRef}
          type="file"
          hidden
          onChange={this.fileChange}
        />
      </Form.Field>
    );
  }
}
