import React from "react";
import {Container, Header, Form, Button} from "semantic-ui-react";

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

class NewFamilyMember extends React.Component {


    render() {
        return (
            <Container>
                <Header as="h2" textAlign="center">New family member</Header>
                <Container style={{paddingLeft: "17vw"}}>
                    <Form style={{maxWidth: "40vw"}}>
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>First Name</label>
                                <input placeholder='First Name'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input placeholder='Last Name'/>
                            </Form.Field>
                        </Form.Group>

                        <Form.Select
                            fluid
                            label='Gender'
                            options={options}
                            placeholder='Gender'
                            style={{maxWidth: "10vw", minWidth: "100px"}}
                        />
                        <Header as="h4">Date of Birth</Header>
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>Day</label>
                                <input placeholder='Day' maxLength={2}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Month</label>
                                <input placeholder='Month' maxLength={2}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Year</label>
                                <input placeholder='Year' maxLength={4}/>
                            </Form.Field>
                        </Form.Group>

                        <Header as="h4">Date of Death</Header>
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>Day</label>
                                <input placeholder='Day' maxLength={2}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Month</label>
                                <input placeholder='Month' maxLength={2}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Year</label>
                                <input placeholder='Year' maxLength={4}/>
                            </Form.Field>
                        </Form.Group>

                        <Header as="h4">Descendent of</Header>
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label>First Name</label>
                                <input placeholder='First Name'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input placeholder='Last Name'/>
                            </Form.Field>
                        </Form.Group>


                        <br/>
                        <Container textAlign="center">
                            <Button color='blue' type='submit'>Submit</Button>
                        </Container>
                    </Form>
                </Container>
            </Container>
        )
    }
}

export default NewFamilyMember;