import React, { useEffect, useReducer } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Switch,
  Text,
  Button,
  Select,
} from "@chakra-ui/react";

export const INITIAL_STATE = {
  VEG: false,
  INTOLARANCE: "",
  DIET: "",
  A_CUISINE: "",
  INGREDIENTS: "",
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "INTOLERANCE_MOD":
      return {
        ...state,
        INTOLARANCE: action.value,
      };
    case "A_CUISINE_MOD":
      return {
        ...state,
        A_CUISINE: action.value,
      };
    case "INGRIEDIENTS":
      return {
        ...state,
        INGRIEDIENTS: action.value,
      };
    case "Veg":
      return {
        ...state,
        VEG: true,
      };
    case "Seafood":
      return {
        ...state,
        INTOLARANCE: `${state?.INTOLARANCE}, SEAFOOD`,
      };

    case "Gluten":
      return {
        ...state,
        INTOLARANCE: `${state?.INTOLARANCE}, GLUTEN`,
      };
    case "Grain":
      return {
        ...state,
        INTOLARANCE: `${state?.INTOLARANCE}, GRAIN`,
      };
    case "Peanut":
      return {
        ...state,
        INTOLARANCE: `${state?.INTOLARANCE}, PEANUT`,
      };
    case "Egg":
      return {
        ...state,
        INTOLARANCE: `${state?.INTOLARANCE}, EGG`,
      };
    case "Egg":
      return {
        ...state,
        INTOLARANCE: `${state?.INTOLARANCE}, EGG`,
      };
    case "Soy":
      return {
        ...state,
        INTOLARANCE: `${state?.INTOLARANCE}, SOY`,
      };

    case "Dairy":
      return {
        ...state,
        INTOLARANCE: `${state?.INTOLARANCE}, DAIRY`,
      };
    case "Wheat":
      return {
        ...state,
        INTOLARANCE: `${state?.INTOLARANCE}, WHEAT`,
      };
    case "Sulfite":
      return {
        ...state,
        INTOLARANCE: `${state?.INTOLARANCE}, SULFITE`,
      };
    case "Tree_Nut":
      return {
        ...state,
        INTOLARANCE: `${state?.INTOLARANCE}, TREE_NUT`,
      };
    case "Shellfish":
      return {
        ...state,
        INTOLARANCE: `${state?.INTOLARANCE}, SHELLFISH`,
      };
    case "Sesame":
      return {
        ...state,
        INTOLARANCE: `${state?.INTOLARANCE}, SESAME`,
      };

    case "Gluten Free":
      return {
        ...state,
        DIET: "Gluten Free",
      };
    case "Ketogenic":
      return {
        ...state,
        DIET: "Ketogenic",
      };
    case "Vegetarian":
      return {
        ...state,
        DIET: "Vegetarian",
      };
    case "Lacto_Vegetarian":
      return {
        ...state,
        DIET: "Lacto_Vegetarian",
      };
    case "Ovo-Vegetarian":
      return {
        ...state,
        DIET: "Ovo_Vegetarian",
      };
    case "Vegan":
      return {
        ...state,
        DIET: "Vegan",
      };
    case "Pescetarian":
      return {
        ...state,
        DIET: "Pescetarian",
      };
    case "Paleo":
      return {
        ...state,
        DIET: "Paleo",
      };
    case "Primal":
      return {
        ...state,
        DIET: "Primal",
      };
    case "Low FODMAP":
      return {
        ...state,
        DIET: "Low FODMAP",
      };
    case "Whole30":
      return {
        ...state,
        DIET: "Whole30",
      };

    case "African":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, African`,
      };
    case "American":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, American`,
      };
    case "British":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, British`,
      };
    case "Cajun":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Cajun`,
      };
    case "Caribbean":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Caribbean`,
      };
    case "Chinese":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Chinese`,
      };
    case "Eastern_European":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Eastern_European`,
      };
    case "European":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, European`,
      };
    case "French":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, French`,
      };
    case "German":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, German`,
      };
    case "Greek":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Greek`,
      };
    case "Indian":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Indian`,
      };
    case "Irish":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Irish`,
      };
    case "Italian":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Italian`,
      };
    case "Japanese":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Japanese`,
      };
    case "Jewish":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Jewish`,
      };
    case "Korean":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Korean`,
      };
    case "Latin_American":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Latin_American`,
      };
    case "Mediterranean":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Mediterranean`,
      };
    case "Mexican":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Mexican`,
      };
    case "Middle_Eastern":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Middle_Eastern`,
      };
    case "Nordic":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Nordic`,
      };
    case "Southern":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Southern`,
      };
    case "Spanish":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Spanish`,
      };
    case "Thai":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Thai`,
      };
    case "Vietnamese":
      return {
        ...state,
        A_CUISINE: `${state?.A_CUISINE}, Vietnamese`,
      };

    default:
      break;
  }
};

function Filters({ dispatch, reducerState }) {
  function updateReducer(TYPE) {
    dispatch({ type: TYPE });
  }

  return (
    <>
      {/* filters */}
      <div className='filters'>
        <Stack direction={"row"} alignItems={"center"}>
          <Switch
            colorScheme='teal'
            size='md'
            onClick={() => updateReducer("Veg")}
          />
          <Text fontSize='md'>VEGETARIAN</Text>
        </Stack>

        {/* Intolarances */}
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {reducerState?.INTOLARANCE
              ? reducerState?.INTOLARANCE.split(",")[
                  reducerState?.INTOLARANCE.split(",").length - 1
                ]
              : "Intolarance"}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => updateReducer("Dairy")}>Dairy</MenuItem>
            <MenuItem onClick={() => updateReducer("Egg")}>Egg</MenuItem>
            <MenuItem onClick={() => updateReducer("Gluten")}>Gluten</MenuItem>
            <MenuItem onClick={() => updateReducer("Grain")}>Grain</MenuItem>
            <MenuItem onClick={() => updateReducer("Peanut")}>Peanut</MenuItem>
            <MenuItem onClick={() => updateReducer("Seafood")}>
              Seafood
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Sesame")}>Sesame</MenuItem>
            <MenuItem onClick={() => updateReducer("Shellfish")}>
              Shellfish
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Soy")}>Soy</MenuItem>
            <MenuItem onClick={() => updateReducer("Sulfite")}>
              Sulfite
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Tree_Nut")}>
              Tree Nut
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Wheat")}>Wheat</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {reducerState?.DIET ? reducerState?.DIET : "Diet"}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => updateReducer("Gluten Free")}>
              Gluten Free
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Ketogenic")}>
              Ketogenic
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Vegetarian")}>
              Vegetarian
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Lacto_Vegetarian")}>
              Lacto-Vegetarian
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Ovo-Vegetarian")}>
              Ovo-Vegetarian
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Vegan")}>Vegan</MenuItem>
            <MenuItem onClick={() => updateReducer("Pescetarian")}>
              Pescetarian
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Paleo")}>Paleo</MenuItem>
            <MenuItem onClick={() => updateReducer("Primal")}>Primal</MenuItem>
            <MenuItem onClick={() => updateReducer("Low_FODMAP")}>
              Low FODMAP
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Whole30")}>
              Whole30
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {reducerState?.A_CUISINE
              ? reducerState?.A_CUISINE.split(",")[
                  reducerState?.A_CUISINE.split(",").length - 1
                ]
              : "Avoid Cuisine"}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => updateReducer("African")}>
              African
            </MenuItem>
            <MenuItem onClick={() => updateReducer("American")}>
              American
            </MenuItem>
            <MenuItem onClick={() => updateReducer("British")}>
              British
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Cajun")}>Cajun</MenuItem>
            <MenuItem onClick={() => updateReducer("Caribbean")}>
              Caribbean
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Chinese")}>
              Chinese
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Eastern_European")}>
              Eastern European
            </MenuItem>
            <MenuItem onClick={() => updateReducer("European")}>
              European
            </MenuItem>
            <MenuItem onClick={() => updateReducer("French")}>French</MenuItem>
            <MenuItem onClick={() => updateReducer("German")}>German</MenuItem>
            <MenuItem onClick={() => updateReducer("Greek")}>Greek</MenuItem>
            <MenuItem onClick={() => updateReducer("Indian")}>Indian</MenuItem>
            <MenuItem onClick={() => updateReducer("Irish")}>Irish</MenuItem>
            <MenuItem onClick={() => updateReducer("Italian")}>
              Italian
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Japanese")}>
              Japanese
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Jewish")}>Jewish</MenuItem>
            <MenuItem onClick={() => updateReducer("Korean")}>Korean</MenuItem>
            <MenuItem onClick={() => updateReducer("Latin_American")}>
              Latin American
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Mediterranean")}>
              Mediterranean
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Mexican")}>
              Mexican
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Middle_Eastern")}>
              Middle Eastern
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Nordic")}>Nordic</MenuItem>
            <MenuItem onClick={() => updateReducer("Southern")}>
              Southern
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Spanish")}>
              Spanish
            </MenuItem>
            <MenuItem onClick={() => updateReducer("Thai")}>Thai</MenuItem>
            <MenuItem onClick={() => updateReducer("Vietnamese")}>
              Vietnamese
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </>
  );
}

export default Filters;
