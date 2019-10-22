import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { useRoutes } from "hookrouter";

import Navbar from "./Navbar";
import Footer from "./Footer";
import NewArtifact from "./NewArtifact";
import DeleteArtifact from "./DeleteArtifact";
import UpdateArtifact from "./UpdateArtifact";
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
import NewFamilyMember from "./NewFamilyMember";
import Member from "./Member";
import MemberArtifacts from "./MemberArtifacts";

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
          <Route exact path="/timeline" component={Timelines} />
          <Route path="/artifacts" component={ArtifactNav} />
          <Route exact path="/artifacts" component={Artifact} />
          <Route exact path="/artifacts/photos" component={Photos} />
          <Route exact path="/artifacts/letters" component={Letters} />
          <Route exact path="/artifacts/objects" component={Objects} />
          <Route exact path="/artifactpage/:id" component={ArtifactPage} />
          <Route exact path="/artifactpage/:id" component={CommentSection} />
          <Route exact path="/familytree" component={FamilyTree} />
          <Route exact path="/familytree/member/:id" component={Member} />
          <Route exact path="/familytree/member/:id" component={MemberArtifacts} />
          <Route path="/artifacts/new" component={NewArtifact} />
          <Route path="/artifactpage/delete/:id" component={DeleteArtifact} />
          <Route path="/artifactpage/update/:id" component={UpdateArtifact} />
          <Route path="/family/new" component={NewFamilyMember} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
