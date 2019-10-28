import React, { useState, useEffect } from "react";
import { Icon, Divider, Header, Container } from "semantic-ui-react";
import MemberList from "./MemberList";
import MemberPagination from "./MemberPagination";
import axios from "axios";

const MemberView = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage] = useState(4);

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      const res = await axios.get("/api/familymember/all");
      setMembers(res.data);

      setLoading(false);
    };

    fetchMembers();
  }, []);

  // Get current artifacts
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);
  console.log(membersPerPage);
  console.log(members.length);
  console.log(currentPage);
  // Change page
  const paginate = (e, pageInfo) => {
    setCurrentPage(pageInfo.activePage);
  };

  return (
    <Container>
      {/* <ArtifactNav /> */}
      <Divider horizontal>
        <Header as="h4">
          <Icon name="book" />
          Member List
        </Header>
      </Divider>
      <MemberList members={currentMembers} loading={loading} />
      <MemberPagination
        membersPerPage={membersPerPage}
        totalMembers={members.length}
        onChange={paginate}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default MemberView;
