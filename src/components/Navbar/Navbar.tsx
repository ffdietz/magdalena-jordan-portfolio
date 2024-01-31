import { Flex, Text } from "@chakra-ui/react";
import { mJordan, sections } from "@content";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

  return (
    <Flex
      w="full"
      h="navHeight"
      background="#FFF"
      position="fixed"
      zIndex={1}
      alignItems="center"
      px={12}
      border="1px"
      borderColor="black"
      fontFamily="Neue Machina"
    >
      <Text as={Link} to="/" fontSize={18} fontWeight={600} cursor="pointer">
        {mJordan}
      </Text>
      <Flex fontSize={18} fontWeight={100} marginLeft="auto">
        {Object.values(sections).map((section, key) => (
          <Text
            key={key}
            as={NavLink}
            to={section.id}
            fontSize={16}
            fontWeight={900}
            color="primaryColor"
            marginLeft={8}
            cursor="pointer"
            _activeLink={{ color: "secondaryColor" }}
          >
            {section.title}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
