import React, { Component } from "react";
import { render } from "react-dom";
import UpdateArtifact from "./UpdateArtifact";
import axios from "axios";

class EditArtifact extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       name: "React",
  //       artifactData: [
  //         { uId: 1, email: "foo@test.com", userName: "bar" },
  //         { uId: 2, email: "baz@test.com", userName: "foobar" }
  //       ]
  //     };
  //   }

  state = {
    artifact: []
  };
  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`/api/artifacts/${id}`).then(res => {
      const artifact = res.data;
      console.log(artifact);
      this.setState(() => ({ artifact }));
    });
  }

  render() {
    return (
      <div>
        {this.state.artifact.map(artifact => (
          <UpdateArtifact
            key={artifact.id}
            item={artifact}
            data={this.props.location.data}
          />
        ))}
      </div>
    );
  }
}

export default UpdateArtifact;
