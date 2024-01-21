import { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { sections } from "../../content/index.js";

const isBrowser = () => typeof window !== 'undefined';


const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const scrollSet = () => {
    if (window.scrollY >= 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  if (isBrowser()) {
    window.addEventListener("scroll", scrollSet);
  }

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
        fontSize={24}
        fontWeight={100}
        cursor="pointer"
        onClick={() => scrollToTop()}
      >
        Magdalena Jordán
      </Text>
      <Flex fontSize={18} fontWeight={100} marginLeft="auto">
        {Object.values(sections).map((section, key) => (
          <Text
            key={key}
            fontSize={16}
            color={activeSection === section.id ? "blue" : "black"}
            marginLeft="20px"
            cursor="pointer"
            onClick={(event) => {
              setActiveSection(section.id);
              event.preventDefault();
              document
                .getElementById(section.id)
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            {section.title}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
