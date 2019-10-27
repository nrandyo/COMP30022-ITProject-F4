import React, { useState, useEffect } from "react";
import { Table, Container, Header, Divider } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
const ArtifactTable = ({ owner }) => {
  const [member, setMember] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      // const { id } = this.props.match.params;
      const res = await axios.get(`/api/familymember/${owner}`);
      setMember(res.data);
      console.log(res.data);
    };

    fetchItems();
  }, []);

  return (
    <Table.Row>
      {member.map(mem => (
        <React.Fragment>
          <Table.Cell>Current Owner</Table.Cell>
          <Table.Cell>
            <Link to={`/familymember/${owner}`} activeClassName="active">
              {mem.Firstname + " " + mem.Lastname}
            </Link>
          </Table.Cell>
        </React.Fragment>
      ))}
    </Table.Row>
  );
};

export default ArtifactTable;
