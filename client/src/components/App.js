import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './Navbar';
import NewArtifact from './NewArtifact';
import HomeContent from './HomeContent';
import Artifact from './Artifact'
import Timelines from './Timeline'
const Dashboard = () => <h2>Dashboard</h2>
// const NewArtifact = () => <h2>NewArtifact</h2>


const App = () => {
    return (
        <div>
            {/* Only one child in a router */}
            <BrowserRouter>
                <div>
                    {/* <Container style = {{margin :20}}> */}
                        {/* Use exact keyword to provide strict path*/}
                        <Navbar />
                        <Route exact path = "/" component={HomeContent}/>
                        <Route exact path = "/timeline" component={Timelines}/>
                        <Route exact path = "/artifacts" component = {Artifact}/>
                        <Route path = "/artifacts/new" component = {NewArtifact}/>
                    {/* </Container> */}
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;





