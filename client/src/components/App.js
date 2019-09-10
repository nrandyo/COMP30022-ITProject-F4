import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './Navbar';
import Landing from './Landing';
import NewArtifact from './NewArtifact';
import { Container } from 'semantic-ui-react';
const Dashboard = () => <h2>Dashboard</h2>
// const NewArtifact = () => <h2>NewArtifact</h2>


const App = () => {
    return (
        <div>
            {/* Only one child in a router */}
            <BrowserRouter>
                <div>
                    <Container style = {{margin :20}}>
                        {/* Use exact keyword to provide strict path*/}
                        <Navbar />
                        <Route exact path = "/" component={Landing}/>
                        <Route exact path = "/artifacts" component = {Dashboard}/>
                        <Route path = "/artifacts/new" component = {NewArtifact}/>
                    </Container>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;