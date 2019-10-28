import React from "react";
import { Pagination, Grid } from "semantic-ui-react";

const MemberPagination = ({
  membersPerPage,
  totalMembers,
  onChange,
  currentPage
}) => {
  const numPages = Math.ceil(totalMembers / membersPerPage);
  console.log(numPages);
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

export default MemberPagination;
