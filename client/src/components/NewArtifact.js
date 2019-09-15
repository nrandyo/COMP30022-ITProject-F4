import React from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react'
const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]
const NewArtifact= () => (
  // <Form>
  //   <Container>
  //   <Form.Field>
  //     <label>First Name</label>
  //     <input placeholder='First Name' />
  //   </Form.Field>
  //   <Form.Field>
  //     <label>Last Name</label>
  //     <input placeholder='Last Name' />
  //   </Form.Field>
  //   <Form.Field>
  //     <Checkbox label='I agree to the Terms and Conditions' />
  //   </Form.Field>
  //   <Button type='submit'>Submit</Button>
  //   </Container>
  // </Form>
  <Form>
    <Container>
  <Form.Group widths='equal'>
    <Form.Input fluid label='First name' placeholder='First name' />
    <Form.Input fluid label='Last name' placeholder='Last name' />
    <Form.Select
      fluid
      label='Gender'
      options={options}
      placeholder='Gender'
    />
  </Form.Group>
  <Form.Group inline>
    <label>Size</label>
    <Form.Radio
      label='Small'
      value='sm'
      // checked={value === 'sm'}
      // onChange={this.handleChange}
    />
    <Form.Radio
      label='Medium'
      value='md'
      // checked={value === 'md'}
      // onChange={this.handleChange}
    />
    <Form.Radio
      label='Large'
      value='lg'
      // checked={value === 'lg'}
      // onChange={this.handleChange}
    />
  </Form.Group>
  <Form.TextArea label='About' placeholder='Tell us more about you...' />
  <Form.Checkbox label='I agree to the Terms and Conditions' />
  <Form.Button>Submit</Form.Button>
  </Container>
</Form>
)

export default NewArtifact