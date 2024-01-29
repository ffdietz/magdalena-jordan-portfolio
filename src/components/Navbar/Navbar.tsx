import { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { mJordan, sections } from "@content";
import { Link } from "react-router-dom";

const isBrowser = () => typeof window !== "undefined";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  function scrollToTop() {
    if (isBrowser()) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 0.2,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Flex
      width="full"
      height={16}
      background="#FFF"
      position="fixed"
      zIndex={1}
      alignItems="center"
      px={12}
      border="1px"
      borderColor="#000"
      fontFamily="Neue Machina"
    >
      <Text
        as={Link}
        to="/"
        fontSize={24}
        fontWeight={100}
        cursor="pointer"
        onClick={() => scrollToTop()}
      >
        {mJordan}
      </Text>
      <Flex fontSize={18} fontWeight={100} marginLeft="auto">
        {Object.values(sections).map((section, key) => (
          <Text
            as={Link}
            key={key}
            fontSize={16}
            color={activeSection === section.id ? "blue" : "black"}
            marginLeft={8}
            cursor="pointer"
            to={section.id}
          >
            {section.title}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
