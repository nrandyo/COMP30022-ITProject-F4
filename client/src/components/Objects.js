import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import ArtifactItem from "./ArtifactItem";
import ArtifactPagination from "./ArtifactPagination";
import axios from "axios";

const Objects = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await axios.get("/api/artifacts/physical");
      setItems(res.data);
      setLoading(false);
    };

    fetchItems();
  }, []);

  // const sort_by = (field, reverse, primer) => {
  //   const key = primer
  //     ? function(x) {
  //         return primer(x[field]);
  //       }
  //     : function(x) {
  //         return x[field];
  //       };

  //   reverse = !reverse ? 1 : -1;

  //   return function(a, b) {
  //     return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
  //   };
  // };

  // Get current artifacts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (e, pageInfo) => {
    setCurrentPage(pageInfo.activePage);
  };

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
  );
};

export default Objects;
