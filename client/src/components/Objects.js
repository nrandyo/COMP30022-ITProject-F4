import React, { Component, useState, useEffect } from "react";
import {
  Input,
  Menu,
  Button,
  Icon,
  Image,
  Item,
  Label,
  Container,
  Header,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import ArtifactNav from "./ArtifactNav";
import ArtifactItem from "./ArtifactItem";
import ArtifactPagination from "./ArtifactPagination";
import axios from "axios";

const Objects = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     physicalObjects: [
  //       {
  //         ArtifactID: null,
  //         Name: null,
  //         Geotag: null,
  //         Tags: null,
  //         DateAddedYear: null,
  //         DateAddedMonth: null,
  //         DateAddedDay: null,
  //         DateSentYear: null,
  //         DateSentMonth: null,
  //         DateSentDay: null,
  //         DateAcquireYear: null,
  //         DateAcquireMonth: null,
  //         DateAcquireDay: null,
  //         AccuracyAdded: null,
  //         AccuracyAcquire: null,
  //         AccuracySent: null,
  //         Text: null,
  //         Heir: null,
  //         CurrentOwner: null,
  //         User_UserID: 1,
  //         Photo_PhotoID: null
  //       }
  //     ],
  //     error: {}
  //   };
  // }

  // componentDidMount() {
  //   this.handleLoad();
  // }

  // handleLoad = () => {
  //   var self = this;
  //   axios
  //     .get("/api/artifacts/physical")
  //     .then(function(response) {
  //       var d = response.data;
  //       self.setState({ physicalObjects: d });
  //     })
  //     .catch(function(err) {
  //       self.setState({ error: err });
  //     });
  // };

  // render() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await axios.get("/api/artifacts/physical");
      setItems(res.data);
      setLoading(false);
    };

    fetchItems();
  }, []);

  const sort_by = (field, reverse, primer) => {

    const key = primer ?
      function(x) {
        return primer(x[field])
      } :
      function(x) {
        return x[field]
      };
  
    reverse = !reverse ? 1 : -1;
  
    return function(a, b) {
      return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
  }  

  // Get current artifacts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  const paginate = (e, pageInfo) => {
    setCurrentPage(pageInfo.activePage);
  };

  // const { physicalObjects } = this.state;
  return (
    <Container>
      <ArtifactItem items={currentItems} loading={loading} />

      <ArtifactPagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        onChange={paginate}
        currentPage={currentPage}
      />
    </Container>
    // <Container>
    //   <Item.Group divided>
    //     {physicalObjects.map((obj, index) => (
    //       <ArtifactItem key={index} artifact={obj} />
    //     ))}
    //   </Item.Group>
  );
};

export default Objects;
