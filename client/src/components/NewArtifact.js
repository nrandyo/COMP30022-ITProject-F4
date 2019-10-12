import React, {Component} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
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
         Segment } from 'semantic-ui-react';

//Http response status for create
const HTTP_RES_POST = 201;

class NewArtifact extends Component {

  constructor() {
    super();

    this.state = {
      Name: '',
      GeoTag: '',
      Day: '',
      Month: '',
      Year: '',
      Description: '',
      isLoading: false,
      successMessage: false,
      failureMessage: false,
      tags: [],
      file: null,
      filename: '',
      lastAdded: null
      };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Request to add artifacts to database
  requestAddArtifact = data => {
    // POST route via backend for artifacts
    fetch('/artifacts/new',
      { method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        //this.setState({ imageSite: res });

      })
  }

  //Upload images to /artifactImages server
  requestUploadServer = data => {
    // POST route for image upload
    axios.post('/upload/artifactimage', data, {
      headers: { 'content-type': 'multipart/form-data' }
    })
    .then((res) => {
      //this.setState({ imageSite: res });
      this.setState({ filename: res.data.filename });
      console.log(this.state.filename);
      console.log(res);
    })
  }

  // Request to add image to database
  requestAddImage = data => {

    // POST route for adding image to database
    fetch('/new/artifactImage',
      { method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  }

  // Handles multiple submission for all form fields
  async handleSubmit(event) {
    event.preventDefault();
    //this.setState({ isLoading: true });

    // Data for artifact image
    const imageData = new FormData();
    imageData.append('file', this.state.file);

    // Data for artifacts
    var artifactData =
      {
        Name: this.state.Name,
        GeoTag: this.state.GeoTag,
        Day: this.state.Day,
        Month: this.state.Month,
        Year: this.state.Year,
        Description: this.state.Description,
        Tags: this.state.tags
      };

      var addImageData = {
        filename: this.state.filename
      };

      await this.requestAddArtifact(artifactData);
      console.log("Site 1 success!");
      await this.requestUploadServer(imageData);
      console.log("Site 2 success!");
      //await this.requestAddImage(addImageData);
      //console.log("Site 3 success!");
  }

  handleImageChange = (e) => {
    this.setState({
      file: e.target.files[0],
      loaded:0
    })
    console.log(e.target.files[0]);
  }

  handleChange = (e) => {
    // Constantly updates changes in user input
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // This function is used to detect when keyboard enter key is pressed
  inputKeyDown = (e) => {

    // Controlled field when enter key is pressed for tags
    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      // Prevent user from entering duplicate tags
      if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      this.setState({ tags: [...this.state.tags, val]});
      this.tagInput.value = null;
    }
    console.log(this.state.tags);
  }

  //This function is used to delete specific tags from an array
  removeTag = (i) => {
    const newTags = [ ...this.state.tags ];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });
  }


  render() {
    //Some constants that are used in rendering state
    const { isLoading, successMessage, failureMessage, tags } = this.state;

    return (
      <div>
        <Container textAlign='center'>
          <Form onSubmit={this.handleSubmit}>

            <Form.Group widths='equal'>

              {/*Form for name*/}
              <Form.Field required>
               <label> Name
                 {/* <Popup content='This field is mandatory' trigger={
                 <Icon name='info circle' size =''/>}/> : */}
               </label>
               <Input placeholder='Input name of artifact'
                name='Name' onChange={this.handleChange} />
              </Form.Field>

              {/*Form for location*/}
              <Form.Field>
               <label> GeoTag
                 {/* <Popup content='This field is optional' trigger={
                 <Icon name='info circle' size ='large'/>}/> : */}
               </label>
               <Input placeholder='Current location of artifacts'
                name='GeoTag' onChange={this.handleChange}/>
              </Form.Field>
            </Form.Group>

            {/*Form for dates*/}
            <Form.Group widths='equal'>
              <Form.Input fluid label='Day' placeholder='Day'
               name='Day' onChange={this.handleChange}/>
              <Form.Input fluid label='Month' placeholder='Month'
               name='Month' onChange={this.handleChange}/>
              <Form.Input fluid label='Year' placeholder='Year'
               name='Year' onChange={this.handleChange}/>
            </Form.Group>

            {/*Form for History input*/}
            <Form.Field>
              <label> History
                {/* <Popup content=
                'This field is optional. If possible, please specify a brief history of the artifacts'trigger={
                <Icon name='info circle' size ='large'/>}/> : */}
              </label>

              <Form.TextArea placeholder='A short description'
               name='Description' onChange={this.handleChange}/>
            </Form.Field>

            {/*Modal and form for adding multiple tags*/}
            <Form.Field>
              <label> Click this to add tags:
                {/* <Popup content=
                'This field is optional.'trigger={
                <Icon name='info circle' size ='large'/>}/> : */}
              </label>
              <Modal size='mini' closeIcon trigger={<Button type='Button' icon='tags'></Button>}>
                <Modal.Header>Add multiple tags</Modal.Header>
                  <Container textAlign='center'>
                    <Modal.Description textalign='center'>
                      <input style={{ margin: 10, width:"85%", height:"30px", "font-size":"12pt",
                       "border-radius":"4px" }} placeholder = 'Press "Enter" key to keep adding'
                       onKeyDown = {this.inputKeyDown} ref = {c => { this.tagInput = c; }}
                      />
                      { tags.map((tag, i) => (
                        <Label style={{ marginBottom:5 }} key={tag} size='large'>
                        {tag}
                        <Icon name='delete' onClick={() => { this.removeTag(i); }}/>
                        </Label>
                      ))}
                    </Modal.Description>
                  </Container>
              </Modal>
            </Form.Field>

            <Label as='a' tag color='teal' size='large'>Added tags: </Label>
            { tags.map((tag, i) => (
              <Label style={{ marginBottom:5 }} key={tag} size='large'>
              {tag}
              <Icon name='delete' onClick={() => { this.removeTag(i); }}/>
              </Label>
            ))}

            {/*Modal and form to upload artifact image*/}
            <Form.Field>
              <label> Click this to upload image to cloud: </label>
              <Input type="file" name="file" onChange={this.handleImageChange}/>
            </Form.Field>

            {/*Loader for waiting HTTP post request response*/}
            <Modal open = {isLoading}>
              <Loader intermediate='true' size='huge'>Uploading Artifact</Loader>
            </Modal>

            {/*Message to show successfull registration of artifact*/}
            <Modal open = {successMessage}>
              <Container textAlign='center'>
                <Message icon success>
                  <Icon name='checkmark'/>
                  <Message.Content>
                    <Message.Header>Success!</Message.Header>
                      Artifact has been successfully registered into our database.
                      <p>Redirecting you to physical artifacts page ...... </p>
                  </Message.Content>
                </Message>
              </Container>
            </Modal>

            {/*Message to failed registration of artifact*/}
            <Modal open = {failureMessage}>
              <Container textAlign='center'>
                <Message icon negative>
                  <Icon name='checkmark'/>
                  <Message.Content>
                    <Message.Header>An unexpected error has occured!</Message.Header>
                      A problem has been encountered. This artifact could not be registered.
                      <p>Please try again later ...... </p>
                  </Message.Content>
                </Message>
              </Container>
            </Modal>

            {/*Final button for all form submission*/}
            <Button color='blue' type='submit'>Submit</Button>

          </Form>
        </Container>
      </div>
    );
  }
}
{/*
  <Modal closeIcon trigger={<Button type='Button' icon='cloud upload'></Button>}>
    <Modal.Header>Select an Image</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium'
      src='https://www.musicjunction.com.au/wp-content/uploads/2019/03/427DE39AADE447B5A30422DF725647A8_12073_2139x2001_c587b9fef86903b89a823353fa512cf0.jpg' />
      <Container textAlign='center'>
        <Modal.Description textalign='center'>
          <Header>This image will be uploaded to cloud</Header>
          <p>
          Please double check with the image selected on the left.
          If the selected image is correct, click on the button
          below to upload this image to cloud server.
          </p>
          <p>Is it okay to use this photo?</p>

          <Button color='blue' type='submit'>Upload</Button>
        </Modal.Description>
      </Container>
    </Modal.Content>
  </Modal>
  */}
export default withRouter(NewArtifact);
