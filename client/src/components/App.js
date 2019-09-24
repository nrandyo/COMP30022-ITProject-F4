import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import NewArtifact from "./NewArtifact";
import Artifact from "./Artifact";
import Objects from "./Objects";
import Photos from "./Photos";
import Letters from "./Letters";
import ArtifactPage from "./ArtifactPage";
import Timelines from "./Timeline";
import TimelineNav from "./TimelineNav";
import ArtifactNav from "./ArtifactNav";
import Homepage from "./Homepage";
import ThemeTest from "./ThemeTest";
import FamilyTree from "./FamilyTree";
import CommentSection from "./CommentSection";

const App = () => {
  return (
    <div>
      {/* Only one child in a router */}
      <BrowserRouter>
        <div>
          {/* Use exact keyword to provide strict path*/}
          <Navbar />

          <Route exact path="/theme" component={ThemeTest} />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/timeline" component={TimelineNav} />
          <Route exact path="/timeline" component={Timelines} />
          <Route path="/artifacts" component={ArtifactNav} />
          <Route exact path="/artifacts" component={Artifact} />
          <Route exact path="/artifacts/photos" component={Photos} />
          <Route exact path="/artifacts/letters" component={Letters} />
          <Route exact path="/artifacts/objects" component={Objects} />
          <Route exact path="/artifactpage" component={ArtifactPage} />
          <Route exact path="/artifactpage" component={CommentSection} />
          <Route exact path="/familytree" component={FamilyTree} />
          <Route path="/artifacts/new" component={NewArtifact} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
