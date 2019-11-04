import React, { useState, useEffect } from "react";
import axios from "axios";
// import NumberArtifacts from "./NumberArtifacts";
import { Table } from "semantic-ui-react";

const NumberArtifacts = ({ param }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(`/api/member/${param}/artifacts`);
      setItems(res.data);
    };

    fetchItems();
  }, []);
  //   console.log(param);
  const numArtifacts = items.length;
  console.log(numArtifacts);
  return <Table.Cell>{numArtifacts}</Table.Cell>;
};

export default NumberArtifacts;
