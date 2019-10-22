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
import FamilyTree2 from "./FamilyTree2";
import FamilyTree3 from "./FamilyTree3";
import FamilyTree4 from "./FamilyTree4";
import FamilyTree5 from "./FamilyTree5";
import CommentSection from "./CommentSection";
import NewFamilyMember from "./NewFamilyMember";
import Member from "./Member";
import MemberArtifacts from "./MemberArtifacts";
import FamilyNav from "./FamilyNav";

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
          <Route path="/familytree" component={FamilyNav} />
          <Route exact path="/familytree" component={FamilyTree2} />
          {/* <Route exact path="/familytree/2" component={FamilyTree2} /> */}
          <Route exact path="/familytree/3" component={FamilyTree3} />
          <Route exact path="/familytree/4" component={FamilyTree4} />
          <Route exact path="/familytree/5" component={FamilyTree5} />
          <Route exact path="/familytree/member/:id" component={Member} />
          <Route
            exact
            path="/familytree/member/:id"
            component={MemberArtifacts}
          />
          <Route path="/familytree/new" component={NewFamilyMember} />
          <Route path="/artifacts/new" component={NewArtifact} />
          <Route path="/artifactpage/delete/:id" component={DeleteArtifact} />
          <Route path="/artifactpage/update/:id" component={UpdateArtifact} />

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
