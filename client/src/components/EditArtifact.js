import React, { Component } from "react";
import axios from "axios";
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
  Segment,
  Transition,
  Divider
} from "semantic-ui-react";

//Http response status for create
const HTTP_RES_POST = 201;

class EditArtifact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Id: null,
      Name: "",
      GeoTag: "",
      Day: "",
      Month: "",
      Year: "",
      Description: "",
      isLoading: false,
      successMessage: false,
      failureMessage: false,
      tags: [],
      file: [],
      filename: [],
      lastAdded: "",
      addArtifactStatus: false,
      imagePreview: [],
      previewOn: false,
      filePath: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`/api/artifacts/${id}`).then((res) => {
      const artifact = res.data[0];
      this.setState(
        {
          Id: artifact.ArtifactID,
          Name: artifact.Name,
          GeoTag: artifact.Geotag,
          Day: artifact.DateAddedDay,
          Month: artifact.DateAddedMonth,
          Year: artifact.DateAddedYear,
          Description: artifact.Description,
          tags: artifact.Tags.split(','),
        });
    });

    setTimeout(() => {
      axios.get(`/api/images/${this.state.Id}`).then((res) => {
        var images = []
        if (res.data.length !== 0) {
          res.data.forEach(function(data, i) {
            images.push(data.FilePath);
          })
          this.setState({
            imagePreview: images,
            previewOn: true
          });
        }
      })
    }, 300);
  }

  editArtifact(newArtifact) {
    const { id } = this.props.match.params;
    axios.post(`/artifactpage/update/${id}`, newArtifact)
    .then((res) => {
      if (res.status === HTTP_RES_POST) {
        this.setState({ isLoading: false, successMessage: true });
        setTimeout(() => {
          this.setState({ successMessage: false });
          this.props.history.push('/artifacts/objects');
        }, 1000)
      } else {
        this.setState({ isLoading: false, failureMessage: true });
        setTimeout(() => {
          this.setState({ failureMessage: false });
        }, 1000)
      }
    })
  }


  // Handles multiple submission for all form fields
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true });

    // Data for artifacts
    const artifactData = {
      Id: this.state.Id,
      Name: this.state.Name,
      GeoTag: this.state.GeoTag,
      Day: this.state.Day,
      Month: this.state.Month,
      Year: this.state.Year,
      Description: this.state.Description,
      Tags: this.state.tags
    };

    await this.editArtifact(artifactData);
  }

  handleChange = e => {
    // Constantly updates changes in user input
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // This function is used to detect when keyboard enter key is pressed
  inputKeyDown = e => {
    // Controlled field when enter key is pressed for tags
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      // Prevent user from entering duplicate tags
      if (
        this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())
      ) {
        return;
      }
      this.setState({ tags: [...this.state.tags, val] });
      this.tagInput.value = null;
    }
  };

  //This function is used to delete specific tags from an array
  removeTag = i => {
    const newTags = [...this.state.tags];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });
  };

  render() {
    //Some constants that are used in rendering state
    const { isLoading, successMessage, failureMessage, tags } = this.state;

    return (
      <div>
        <Container textAlign="center">
          <Header
            as="h2"
            textAlign="center"
            content="Update"
            subheader={this.state.Name}
          />
          <Divider />
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              {/*Form for name*/}
              <Form.Field required>
                <label>
                  {" "}
                  Name
                  {/* <Popup content='This field is mandatory' trigger={
                 <Icon name='info circle' size =''/>}/> : */}
                </label>
                <Input
                  placeholder="Name"
                  value={this.state.Name}
                  name="Name"
                  onChange={this.handleChange}
                />
              </Form.Field>

              {/*Form for location*/}
              <Form.Field>
                <label>
                  {" "}
                  GeoTag
                  {/* <Popup content='This field is optional' trigger={
                 <Icon name='info circle' size ='large'/>}/> : */}
                </label>
                <Input
                  placeholder="Current location of artifacts"
                  name="GeoTag"
                  value={this.state.GeoTag}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form.Group>

            {/*Form for dates*/}
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Day"
                placeholder="DD"
                name="Day"
                value={this.state.Day}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                label="Month"
                placeholder="MM"
                name="Month"
                value={this.state.Month}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                label="Year"
                placeholder="YYYY"
                name="Year"
                value={this.state.Year}
                onChange={this.handleChange}
              />
            </Form.Group>

            {/*Form for History input*/}
            <Form.Field>
              <label>
                {" "}
                History
                {/* <Popup content=
                'This field is optional. If possible, please specify a brief history of the artifacts'trigger={
                <Icon name='info circle' size ='large'/>}/> : */}
              </label>

              <Form.TextArea
                placeholder="A short description"
                name="Description"
                value={this.state.Description}
                onChange={this.handleChange}
              />
            </Form.Field>

            {/*Modal and form for adding multiple tags*/}
            <Form.Field>
              <label> Click this to add tags:</label>
              <Modal
                size="mini"
                closeIcon
                trigger={<Button type="Button" icon="tags"></Button>}
              >
                <Modal.Header>Add multiple tags</Modal.Header>
                <Container textAlign="center">
                  <Modal.Description textalign="center">
                    <input
                      style={{
                        margin: 10,
                        width: "85%",
                        height: "30px",
                        fontSize: "12pt",
                        borderRadius: "4px"
                      }}
                      placeholder='Press "Enter" key to keep adding'
                      onKeyDown={this.inputKeyDown}
                      ref={c => {
                        this.tagInput = c;
                      }}
                    />
                    {tags.map((tag, i) => (
                      <Label style={{ marginBottom: 5 }} key={tag} size="large">
                        {tag}
                        <Icon
                          name="delete"
                          onClick={() => {
                            this.removeTag(i);
                          }}
                        />
                      </Label>
                    ))}
                  </Modal.Description>
                </Container>
              </Modal>
            </Form.Field>

            <Label as="a" tag color="teal" size="large">
              Previous tags:{" "}
            </Label>
            {tags.map((tag, i) => (
              <Label style={{ marginBottom: 5 }} key={tag} size="large">
                {tag}
                <Icon
                  name="delete"
                  onClick={() => {
                    this.removeTag(i);
                  }}
                />
              </Label>
            ))}

            {/* Field to select multiple images */}
            <Segment>
              <Form.Field disabled>
                <Input
                  type="file"
                  name="file"
                  multiple
                  onChange={this.handleImageChange}
                  label="Select Images:"
                />
              </Form.Field>
            </Segment>

            <Transition
              visible={this.state.previewOn}
              animation="scale"
              duration={500}
            >
              <Segment>
                <Header> - Preview - </Header>
                <Image.Group size="small">
                  {this.state.imagePreview.map(preview => {
                    return (
                      <Image key={preview} alt="previewImg" src={require("../artifactImages/" + preview)} />
                    );
                  })}
                </Image.Group>
              </Segment>
            </Transition>

            {/*Loader for waiting HTTP post request response*/}
            <Modal open={isLoading}>
              <Loader intermediate="true" size="huge">
                Uploading Artifact
              </Loader>
            </Modal>

            {/*Message to show successfull registration of artifact*/}
            <Modal open={successMessage}>
              <Container textAlign="center">
                <Message icon success>
                  <Icon name="checkmark" />
                  <Message.Content>
                    <Message.Header>Success!</Message.Header>
                    Artifact has been updated successfully into our database.
                    <p>Redirecting you to physical artifacts page ...... </p>
                  </Message.Content>
                </Message>
              </Container>
            </Modal>

            {/*Message to failed registration of artifact*/}
            <Modal open={failureMessage}>
              <Container textAlign="center">
                <Message icon negative>
                  <Icon name="checkmark" />
                  <Message.Content>
                    <Message.Header>
                      An unexpected error has occured!
                    </Message.Header>
                    A problem has been encountered. This artifact could not be
                    updated.
                    <p>Please try again later ...... </p>
                  </Message.Content>
                </Message>
              </Container>
            </Modal>

            {/*Final button for all form submission*/}
            <Button color="blue" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default EditArtifact;
