import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './Navbar';
import NewArtifact from './NewArtifact';
import HomeContent from './HomeContent';
import Artifact from './Artifact'
import Timelines from './Timeline'
import ArtifactNav from './ArtifactNav'


const App = () => {
    return (
        <div>
            {/* Only one child in a router */}
            <BrowserRouter>
                <div>
                    {/* Use exact keyword to provide strict path*/}
                    <Navbar />
                    <Route exact path = "/" component={HomeContent}/>
                    <Route exact path = "/timeline" component={Timelines}/>
                    <Route path = "/artifacts" component = {ArtifactNav}/>
                    <Route exact path = "/artifacts" component = {Artifact}/>
                    <Route path = "/artifacts/new" component = {NewArtifact}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;





