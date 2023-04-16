import { Box, Text } from "@chakra-ui/react";
import React from "react";
import bg from "../assets/food_banner.jpeg";

function Banner() {
  return (
    <Box className='banner'>
      <img src={bg} className='bg' alt='' />

      <Text
        className='header'
        position={"absolute"}
        color={"white"}
        left={0}
        right={0}
        margin={"auto"}
        top={"52vh"}
      >
        Discover new dishes with your regular ingredients.
      </Text>
    </Box>
  );
}

export default Banner;
