import React, {Component} from 'react'
import { Redirect } from 'react-router';
import { Button,
         Form,
         Container,
         Input,
         Popup,
         Icon,
         Header,
         Modal,
         Image,
         Label,
         Message } from 'semantic-ui-react'

class NewArtifact extends Component {

  constructor() {
    super();

    this.state = {
      name: '',
      geoTag: '',
      day: '',
      month: '',
      year: '',
      history: '',
      fireRedirect: false
      };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(event) {
  event.preventDefault();

  var data =
    {
      name:this.state.name,
      geoTag:this.state.geoTag,
      day:this.state.day,
      month:this.state.month,
      year:this.state.year,
      history:this.state.history
    };

  fetch('/artifacts/new', { method: 'POST',

  body: JSON.stringify(data), // data can be `string` or {object}!

  headers:{ 'Content-Type': 'application/json' } })

  .then(res => res.json())

  .catch(error => console.error('Error:', error))

  .then(response => console.log('Successfully added'));

}

   handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Container textAlign='center'>
          <Form onSubmit={this.handleSubmit}>

            <Form.Group widths='equal'>

              {/*Form for name*/}
              <Form.Field required>
               <label> Name
                 <Popup content='This field is mandatory' trigger={
                 <Icon name='info circle' size ='large'/>}/> :
               </label>
               <Input placeholder='Input name of artifact'
                name='name' onChange={this.handleChange} />
              </Form.Field>

              {/*Form for location*/}
              <Form.Field>
               <label> GeoTag
                 <Popup content='This field is optional' trigger={
                 <Icon name='info circle' size ='large'/>}/> :
               </label>
               <Input placeholder='Current location of artifacts'
                name='geoTag' onChange={this.handleChange}/>
              </Form.Field>
            </Form.Group>

            {/*Form for dates*/}
            <Form.Group widths='equal'>
              <Form.Input fluid label='Day:' placeholder='Day'
               name='day' onChange={this.handleChange}/>
              <Form.Input fluid label='Month:' placeholder='Month'
               name='month' onChange={this.handleChange}/>
              <Form.Input fluid label='Year:' placeholder='Year'
               name='year' onChange={this.handleChange}/>
            </Form.Group>

            {/*Form for History input*/}
            <Form.Field>
              <label> History
                <Popup content=
                'This field is optional. If possible, please specify a brief history of the artifacts'trigger={
                <Icon name='info circle' size ='large'/>}/> :
              </label>

              <Form.TextArea placeholder='A short description'
               name='history' onChange={this.handleChange}/>
            </Form.Field>

            {/*Tags for artifacts*/}
            <Form.Field>
              <label> Tags
                <Popup content=
                'This field is optional. Able to support multiple tags!'trigger={
                <Icon name='info circle' size ='large'/>}/> :
              </label>
              <Input
              icon='tags'
              iconPosition='left'
              label={{ tag: true, content: 'Add Tag' }}
              labelPosition='right'
              placeholder='Disabled' disabled
              />
            </Form.Field>

            {/*On update tag - Still not implemented*/}
            <div>
              <Label>
                Old piano
                <Icon name='delete' />
              </Label>
              <Label>
                Antique
                <Icon name='delete' />
              </Label>
              <Label>
                Family treasure
                <Icon name='delete' />
              </Label>
            </div>

            {/*Modal to upload artifact image*/}
            <Form.Field>
              <label> Click this to upload image to cloud
                <Popup content=
                'This field is optional.'trigger={
                <Icon name='info circle' size ='large'/>}/> :
              </label>
              <Modal closeIcon trigger={<Button icon='cloud upload'></Button>}>
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
            </Form.Field>

            <Button color='facebook' type='submit'>Submit</Button>

          </Form>
        </Container>
      </div>
    );
  }
}

export default NewArtifact
