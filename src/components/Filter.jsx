import { SmallCloseIcon } from "@chakra-ui/icons";
import {
  Badge,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

function Filter({ tags, dispatch, tagName, type }) {
  // converts string to array.
  let tagsArray = tags.split(",");

  // gets rid of the initial "_blank";
  tagsArray = tagsArray.filter((elem) => elem != "");

  // removes duplicates from array.
  tagsArray = [...new Set(tagsArray)];

  function removeIntol(identifier, type) {
    tagsArray = tagsArray.filter((elem) => elem != identifier);
    let tagsString = tagsArray.join(",");
    dispatch({ type: `${type}_MOD`, value: tagsString });
  }

  return (
    <>
      {tagsArray.length !== 0 ? (
        <Stack
          direction='row'
          marginTop={"2rem"}
          border={"2px solid #efefef"}
          borderRadius={"6px"}
          padding={".5rem 1rem"}
        >
          <Text as='b' fontSize={"md"}>
            {tagName}:
          </Text>
          {tagsArray.map((intol, index) => (
            <Tag
              size={"md"}
              key={index}
              borderRadius='full'
              variant='subtle'
              fontWeight={"600"}
              colorScheme='red'
            >
              <TagLabel>{intol.toUpperCase()}</TagLabel>
              <TagCloseButton onClick={() => removeIntol(intol, type)} />
            </Tag>
          ))}
        </Stack>
      ) : (
        ""
      )}
    </>
  );
}

export default Filter;
