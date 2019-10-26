import React, { Component } from "react";
import axios from 'axios';
import FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {
        Button,
        Form,
        Header,
        Container,
        Segment,
        Dropdown } from "semantic-ui-react";

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

    axios.get('/api/artifacts/export/json', {
      headers: {
          Accept: 'application/json',
      }
    })
    .then((res) => {
      if (this.state.fileType === jsonFile) {
        const fileName = 'allartifacts.json'

        var fileToSave = new Blob([JSON.stringify(res.data, undefined, 2)], {
            type: 'application/json',
            name: fileName
        });

        // Save the file
        FileSaver.saveAs(fileToSave, fileName);

      } else {
        const fileName = 'allartifacts.pdf'

        var pdfDoc = new jsPDF();;
        var artifacts = JSON.parse(JSON.stringify(res.data));

        var contents = [];
        artifacts.forEach(function(artifact, i) {
          delete artifact.Tags;
          delete artifact.DateAddedMonth;
          delete artifact.DateAddedDay;
          delete artifact.DateAddedYear;
          delete artifact.Type;
          var arrContent = Object.values(artifact);
          contents.push(arrContent);
        });

        pdfDoc.text(14, 15, "Leon's Artifacts:");
        pdfDoc.autoTable({
          startY: 20,
          headStyles: {
           cellWidth:'wrap'
          },
          head:[['Name', 'From', 'Description']],
          body: contents
        })

        pdfDoc.save(fileName);
      }
    })
  }

  onChangeFileType (e, result) {
    //Updates file selection
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
