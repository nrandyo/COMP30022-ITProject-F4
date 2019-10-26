import React, { Component } from "react";
import axios from 'axios';
import FileSaver from 'file-saver';
import {
        Button,
        Comment,
        Form,
        Header,
        Container,
        Divider,
        Icon,
        Input,
        Modal,
        Message,
        Segment,
        Dropdown,
        Label } from "semantic-ui-react";

const jsonFile = "JSON";

class ExportArtifacts extends Component {

  constructor() {
    super();

    this.state = {
      fileType: 'JSON'
    }

    this.handleDownload = this.handleDownload.bind(this);
    this.onChangeFileType = this.onChangeFileType.bind(this);
  }

  handleDownload () {
    console.log(this.state.fileType);

    if (this.state.fileType === jsonFile) {
      axios.get('/api/artifacts/export/json', {
        //responseType: 'arraybuffer',
        headers: {
            Accept: 'application/json',
        },
      })
      .then((res) => {
        // Create a blob of the data

        const fileName = 'allartifacts.json'

        var fileToSave = new Blob([JSON.stringify(res.data, undefined, 2)], {
            type: 'application/json',
            name: fileName
        });

        // Save the file
        FileSaver.saveAs(fileToSave, fileName);
      })
    } else {
      console.log("PDF format here");
    }

  }

  onChangeFileType (e, result) {

    // Constantly updates changes in user input on selectors
    this.setState({ fileType: result.value});
  }

  render() {

    const options = [
      {
        text: "JSON",
        value: "JSON"
      },
      {
        text: "PDF",
        value: "PDF"
      },
    ];

    return (
      <Container textAlign='center'>
        <Segment textAlign='center'>
          <Header>Select File Type:</Header>
          <Form onSubmit = {this.handleDownload}>
            <Form.Field>
              <Dropdown
                header="FileType"
                onChange={this.onChangeFileType}
                options={options}
                defaultValue={options[0].value}
              />
            </Form.Field>
            <Button color='blue' type='submit'>Download File</Button>
          </Form>
        </Segment>
      </Container>
  )}
}

export default ExportArtifacts;
