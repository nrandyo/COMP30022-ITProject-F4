import React from "react";
import { Pagination, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ArtifactPagination = ({
  itemsPerPage,
  totalItems,
  onChange,
  currentPage
}) => {
  const numPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Grid centered columns={3}>
      <Grid.Row>
        <Pagination
          defaultActivePage={currentPage}
          pointing
          secondary
          onPageChange={onChange}
          totalPages={numPages}
          boundaryRange={5}
          siblingRange={2}
        />
      </Grid.Row>
    </Grid>
  );
};

export default ArtifactPagination;
