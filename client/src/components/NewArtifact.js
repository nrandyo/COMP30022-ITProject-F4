import React from 'react'
import { Button, Form, Container, Segment, Input, Popup, Icon, Header, Modal, Image } from 'semantic-ui-react'

const NewArtifact= () => (
<Form>
  <Container textAlign='center'>

  {/*Design for adding artifacts page*/}
  <div>
    {/* <Header as='h1' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Add a new artifact</Header.Content>
    </Header>
    <Image
      centered
      size='large'
      src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
    /> */}
  </div>

    {/* <Segment > */}
       <Form >

         {/*Form for name*/}
         <Form.Group widths='equal'>
           <Form.Field required>
            <label> Name
            <Popup size='small' content='This field is mandatory' trigger={
            <Icon name='info circle' size ='large'/>}/> :
            </label>
            <Input placeholder='Input name of artifact'/>
           </Form.Field>
           <Form.Field>
            <label> GeoTag
            <Popup content='This field is optional' trigger={
            <Icon name='info circle' size ='large'/>}/> :
            </label>
            <Input placeholder='Current location of artifacts'/>
           </Form.Field>
         </Form.Group>

         {/*Form for dates*/}
         <Form.Group widths='equal'>
          <Form.Input fluid label='Day:' placeholder='Day'/>
          <Form.Input fluid label='Month:' placeholder='Month'/>
          <Form.Input fluid label='Year:' placeholder='Year'/>
         </Form.Group>

         {/*Form for History input*/}
         <Form.Field>
          <label> History
           <Popup content=
           'This field is optional. If possible, please specify a brief history of the artifacts'trigger={
           <Icon name='info circle' size ='large'/>}/> :
          </label>
          <Form.TextArea placeholder='A short description'/>
         </Form.Field>

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
                <Modal.Description textAlign='center'>
                  <Header textAlign='center'>This image will be uploaded to cloud</Header>
                  <p>
                   Please double check with the image selected on the left.
                   If the selected image is correct, click on the button below
                   to upload this image to cloud server.
                  </p>
                  <p>Is it okay to use this photo?</p>
                  <Button color='facebook' type='submit'>Upload</Button>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Form.Field>

         <Button color='primary' type='submit'>Submit</Button>
       </Form>
     {/* </Segment> */}
  </Container>
</Form>
)

export default NewArtifact
