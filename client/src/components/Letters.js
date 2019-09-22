import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import ArtifactItem from "./ArtifactItem";
import ArtifactPagination from "./ArtifactPagination";
import axios from "axios";

const Letters = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await axios.get("/api/artifacts/letter");
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

export default Letters;
