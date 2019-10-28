import React from "react";
import { Link } from "react-router-dom";
import NumberArtifacts from "./NumberArtifacts";
import {
  Button,
  Icon,
  Item,
  Container,
  Loader,
  Table,
  Label
} from "semantic-ui-react";

const MemberList = ({ members, loading }) => {
  //   formatDate = (date) => {
  //     var d = new Date(date).toDateString();
  //     return d;
  //    }
  if (loading) {
    return (
      <Container style={{ minHeight: 600, padding: "1em 0em" }}>
        <Loader active inline="centered" />
      </Container>
    );
  }
  function cleanPath(path) {
    if (path === "") {
      return "placeholder.png";
    } else {
      return path;
    }
  }
  console.log(members);
  return (
    <Container text style={{ minHeight: 400, padding: "1em 0em" }}>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            {/* <Table.HeaderCell>Artifacts Owned</Table.HeaderCell> */}
            <Table.HeaderCell>More</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {members.map(member => {
            var path = member.FilePath;
            return (
              <Table.Row>
                <Table.Cell>{member.FamilyMemberID}</Table.Cell>
                <Table.Cell>
                  {member.FirstName + " " + member.LastName}
                </Table.Cell>
                {/* <NumberArtifacts param={member.FamilyMemberID} /> */}
                <Table.Cell selectable>
                  <a href={"/familymember/" + member.FamilyMemberID}>
                    View Profile
                  </a>
                </Table.Cell>
              </Table.Row>

              // <Item>
              //   {/* <Item.Image
              //     src={require("../artifactImages/" + cleanPath(path))}
              //   /> */}
              //   <Item.Content>
              //     <Item.Header
              //       as={Link}
              //       to={"/familymember/" + member.FamilyMemberID}
              //     >
              //       {member.FirstName + " " + member.LastName}
              //     </Item.Header>
              //     {/* <Item.Meta>
              //       <span className="cinema">{member.DateAcquireYear}</span>
              //     </Item.Meta> */}
              //     {/* <Item.Description>{member.Description}</Item.Description> */}
              //     <Item.Extra>
              //       <Button
              //         as={Link}
              //         to={"/familymember/" + member.ArtifactID}
              //         primary
              //         floated="right"
              //       >
              //         Additional Info
              //         <Icon name="right chevron" />
              //       </Button>
              //       {/* <Label>{member.Tags}</Label> */}
              //       {/* {handleTags(member.Tags)} */}
              //     </Item.Extra>
              //   </Item.Content>
              // </Item>
            );
          })}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default MemberList;
