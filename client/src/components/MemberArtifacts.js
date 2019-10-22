import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Item,
  Button,
  Label,
  Menu,
  Input,
  Icon,
  Divider
} from "semantic-ui-react";
import axios from "axios";
import ArtifactItem from "./ArtifactItem";
import ArtifactPagination from "./ArtifactPagination";

const MemberArtifacts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await axios.get(`/api/member/1/artifacts`);
      setItems(res.data);
      setLoading(false);
    };

    fetchItems();
  }, []);

  // Get current artifacts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (e, pageInfo) => {
    setCurrentPage(pageInfo.activePage);
  };

  return (
    <Container>
        <Divider horizontal>
          <Header as="h4">
            {/* <Icon name="info circle" /> */}
            Artifacts Owned
          </Header>
        </Divider>
      <ArtifactItem items={currentItems} loading={loading} />
      <ArtifactPagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        onChange={paginate}
        currentPage={currentPage}
      />
    </Container>
  );
};

// class MemberArtifact extends Component {

//   state = { 
//     artifacts: [] };

//     componentDidMount() {
//       const { id } = this.props.match.params;
  
//       axios.get(`/api/member/${id}/artifacts`).then(res => {
//         const artifacts = res.data;
//         this.setState(() => ({ artifacts }));
//       });
//     }


//   render() {
//     return (
      // <Container>
      //   <Divider horizontal>
      //     <Header as="h4">
      //       {/* <Icon name="info circle" /> */}
      //       Artifacts Owned
      //     </Header>
      //   </Divider>
//         <Item.Group divided>
//           <Item>
//             <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
//             <Item.Content>
//               <Item.Header as="a">{"item.Name"}</Item.Header>
//               <Item.Meta>
//                 <span className="cinema">{"item.DateAcquireYear"}</span>
//               </Item.Meta>
//               <Item.Description>{"asda"}</Item.Description>
//               <Item.Extra>
//                 <Button as={Link} to={"/artifactpage/"} primary floated="right">
//                   Additional Info
//                   <Icon name="right chevron" />
//                 </Button>
//                 <Label>Limited</Label>
//               </Item.Extra>
//             </Item.Content>
//           </Item>
//         </Item.Group>
//       </Container>
//     );
//   }
// }

export default MemberArtifacts;
