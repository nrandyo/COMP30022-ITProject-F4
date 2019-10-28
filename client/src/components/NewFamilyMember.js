import React from "react";
import { withRouter } from "react-router";
import {
  Container,
  Header,
  Form,
  Button,
  Modal,
  Loader,
  Icon,
  Message,
  Checkbox
} from "semantic-ui-react";

const options = [{ text: "Male", value: "m" }, { text: "Female", value: "f" }];

//Http response status for create
const HTTP_RES_POST = 201;

class NewFamilyMember extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: "",
      LastName: "",
      MaidenName: "",
      Gender: "m",
      DOBDay: 0,
      DOBMonth: 0,
      DOBYear: 0,
      AccuracyDOB: "documented",
      DODDay: 0,
      DODMonth: 0,
      DODYear: 0,
      AccuracyDOD: "documented",
      isLoading: false,
      successMessage: false,
      failureMessage: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    // Constantly updates changes in user input
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChangeSelect = (e, result) => {
    // Constantly updates changes in user input on selectors
    const { name, value } = result;
    this.setState({
      [name]: value
    });
  };

  //Handles submission of the form
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoading: true });

    var data = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      MaidenName: this.state.MaidenName,
      Gender: this.state.Gender,
      DOBDay: this.state.DOBDay,
      DOBMonth: this.state.DOBMonth,
      DOBYear: this.state.DOBYear,
      AccuracyDOB: this.state.AccuracyDOB,
      DODDay: this.state.DODDay,
      DODMonth: this.state.DODMonth,
      DODYear: this.state.DODYear,
      AccuracyDOD: this.state.AccuracyDOD
    };

    // POST route via backend for family members
    fetch("/familymember/new", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status === HTTP_RES_POST) {
          //Handles loading/success screen and redirect to home page
          setTimeout(() => {
            this.setState({ isLoading: false });
            this.setState({ successMessage: true });
          }, 1000);

          //Automatically redirects back to home page
          setTimeout(() => {
            this.props.history.push("/");
          }, 3200);
        } else {
          //Handles error display message for failed POST request
          setTimeout(() => {
            this.setState({ isLoading: false });
            this.setState({ failureMessage: true });
          }, 1000);

          setTimeout(() => {
            this.setState({ failureMessage: false });
          }, 3500);
        }
      })

      .catch(error => {
        console.log("Error:", error);
      });
  }

  render() {
    const { isLoading, successMessage, failureMessage } = this.state;
    return (
      <Container>
        {/* <Header as="h2" textAlign="center">New family member</Header> */}
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              {/*Input for name*/}
              <Form.Field>
                <label>First Name</label>
                <input
                  name="FirstName"
                  onChange={this.handleChange}
                  placeholder="First Name"
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input
                  name="LastName"
                  onChange={this.handleChange}
                  placeholder="Last Name"
                />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <label>Maiden Name (optional)</label>
              <input
                name="MaidenName"
                onChange={this.handleChange}
                placeholder="Maiden Name"
              />
            </Form.Field>

            {/*Dropdown for gender*/}
            <Form.Dropdown
              placeholder="Gender"
              name="Gender"
              label="Gender"
              fluid
              selection
              onChange={this.handleChangeSelect}
              options={options}
              value={this.state.Gender}
              style={{ maxWidth: "10vw", minWidth: "100px" }}
            />

            {/*Input for date of birth and selection of accuracy*/}
            <Header as="h4">Date of Birth</Header>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Day</label>
                <input
                  name="DOBDay"
                  onChange={this.handleChange}
                  placeholder="DD"
                  maxLength={2}
                />
              </Form.Field>
              <Form.Field>
                <label>Month</label>
                <input
                  name="DOBMonth"
                  onChange={this.handleChange}
                  placeholder="MM"
                  maxLength={2}
                />
              </Form.Field>
              <Form.Field>
                <label>Year</label>
                <input
                  name="DOBYear"
                  onChange={this.handleChange}
                  placeholder="YYYY"
                  maxLength={4}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <Checkbox
                radio
                label="documented"
                name="AccuracyDOB"
                value="documented"
                checked={this.state.AccuracyDOB === "documented"}
                onChange={this.handleChangeSelect}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="accurate"
                name="AccuracyDOB"
                value="accurate"
                checked={this.state.AccuracyDOB === "accurate"}
                onChange={this.handleChangeSelect}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="likely"
                name="AccuracyDOB"
                value="likely"
                checked={this.state.AccuracyDOB === "likely"}
                onChange={this.handleChangeSelect}
              />
            </Form.Field>

            {/*Input for date of death and selection of accuracy*/}
            <Header as="h4">Date of Death</Header>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Day</label>
                <input
                  name="DODDay"
                  onChange={this.handleChange}
                  placeholder="DD"
                  maxLength={2}
                />
              </Form.Field>
              <Form.Field>
                <label>Month</label>
                <input
                  name="DODMonth"
                  onChange={this.handleChange}
                  placeholder="MM"
                  maxLength={2}
                />
              </Form.Field>
              <Form.Field>
                <label>Year</label>
                <input
                  name="DODYear"
                  onChange={this.handleChange}
                  placeholder="YYYY"
                  maxLength={4}
                />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <Checkbox
                radio
                label="documented"
                name="AccuracyDOD"
                value="documented"
                checked={this.state.AccuracyDOD === "documented"}
                onChange={this.handleChangeSelect}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="accurate"
                name="AccuracyDOD"
                value="accurate"
                checked={this.state.AccuracyDOD === "accurate"}
                onChange={this.handleChangeSelect}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="likely"
                name="AccuracyDOD"
                value="likely"
                checked={this.state.AccuracyDOD === "likely"}
                onChange={this.handleChangeSelect}
              />
            </Form.Field>

            {/*Loader for waiting HTTP post request response*/}
            <Modal open={isLoading}>
              <Loader intermediate="true" size="huge">
                Uploading Family Member
              </Loader>
            </Modal>

            {/*Message to show successfull registration of family member*/}
            <Modal open={successMessage}>
              <Container textAlign="center">
                <Message icon success>
                  <Icon name="checkmark" />
                  <Message.Content>
                    <Message.Header>Success!</Message.Header>
                    Family member has been successfully registered into our
                    database.
                    <p>Redirecting you to home page ...... </p>
                  </Message.Content>
                </Message>
              </Container>
            </Modal>

            {/*Message to failed registration of family*/}
            <Modal open={failureMessage}>
              <Container textAlign="center">
                <Message icon negative>
                  <Icon name="checkmark" />
                  <Message.Content>
                    <Message.Header>
                      An unexpected error has occured!
                    </Message.Header>
                    A problem has been encountered. This family member could not
                    be registered.
                    <p>Please try again later ...... </p>
                  </Message.Content>
                </Message>
              </Container>
            </Modal>
            <br />

            {/*Final button for all form submission*/}
            <Container textAlign="center">
              <Button color="blue" type="submit">
                Submit
              </Button>
            </Container>
          </Form>
        </Container>
      </Container>
    );
  }
}

export default withRouter(NewFamilyMember);
