import React from "react";
import { Button, Input } from "@chakra-ui/react";

function SearchBar({ dispatch }) {
  return (
    <>
      {/* Search */}
      <Input
        variant='filled'
        w={"60vw"}
        h={"7vh"}
        placeholder='Ingredients'
        onChange={(e) =>
          dispatch({ type: "INGREDIENTS", value: e.target.value })
        }
      />
    </>
  );
}

export default SearchBar;
