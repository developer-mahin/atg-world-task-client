import { Box, Container } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <Container>
      <Box>
        
      </Box>
    </Container>
  );
};

export default ViewDetails;
