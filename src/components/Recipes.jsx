import React from "react";
import Recipe from "./Recipe";
import { Box, Text } from "@chakra-ui/react";

function Recipes({ apiData }) {
  return (
    <>
      <Box mt={"3rem"}>
        <Text as={"b"} pt={"3rem"} fontSize={"xl"}>
          Recipes you would like.
        </Text>
      </Box>

      {apiData.map((elem) => (
        <Recipe data={elem} />
      ))}
    </>
  );
}

export default Recipes;
