import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Stack,
  Heading,
  Button,
  Image,
  StackDivider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Badge,
  Grid,
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import parse from "html-react-parser";
import { AddIcon } from "@chakra-ui/icons";

function Recipe({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  return (
    <>
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        mt={"1rem"}
        allowToggle
        w={"70vw"}
      >
        <AccordionItem alignItems={"center"}>
          <h2>
            <AccordionButton backgroundColor={"blackAlpha.200"}>
              <Box as='span' flex='1' textAlign='left'>
                {/* Title */}
                {data.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} textAlign={"left"} mt={"2rem"}>
            <div className='hero'>
              {/* Image */}
              <img src={data.image} className='img' alt='Dish Image' />

              <div className='sec_part'>
                {/* Mostly preffered as */}
                <Text as={"b"}>Mostly prefered as:</Text>
                <Grid templateColumns='repeat(2, 1fr)' gap={"1rem"} mt={"1rem"}>
                  {data.dishTypes.map((dish) => (
                    <Badge w={"max-content"} colorScheme='orange'>
                      {dish}
                    </Badge>
                  ))}
                </Grid>

                {/* Summary */}
                <div>
                  <Button variant={"link"} onClick={onOpen} mt={"2rem"}>
                    More about the dish.
                  </Button>

                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Summary of the dish</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>{parse(data.summary)}</ModalBody>

                      <ModalFooter></ModalFooter>
                    </ModalContent>
                  </Modal>
                </div>

                {/* Ingredient list */}
                <div>
                  <Button variant={"link"} onClick={onOpen1} mt={"1rem"}>
                    Ingredient List
                  </Button>

                  <Modal isOpen={isOpen1} onClose={onClose1}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Ingredients</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        {data.analyzedInstructions[0].steps.map((step) =>
                          step.ingredients.map((ingredient, index) => (
                            <Tag
                              size={"md"}
                              key={index}
                              variant='subtle'
                              colorScheme='blue'
                              margin={".5rem"}
                            >
                              <TagLeftIcon boxSize='12px' as={AddIcon} />
                              <TagLabel>{ingredient.name}</TagLabel>
                            </Tag>
                          ))
                        )}
                      </ModalBody>

                      <ModalFooter></ModalFooter>
                    </ModalContent>
                  </Modal>
                </div>
              </div>
            </div>

            {/* Diet compatible */}

            {/* Instructions */}
            <Card mt={"3rem"}>
              <CardHeader>
                <Heading size='md'>Instructions</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  {data.analyzedInstructions[0].steps.map((step, index) => (
                    <Box>
                      <Heading size='xs' textTransform='uppercase'>
                        {`Step ${index + 1}:`}
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        {step.step}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </CardBody>
            </Card>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default Recipe;
