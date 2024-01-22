import { Image, Stack, Text } from "@chakra-ui/react";
import { sections } from "@content";
import { Asset } from "contentful";

interface ProjectImageProps {
  image: Asset
}

function ProjectImage({image}: ProjectImageProps) {

  return (
    <Stack>
      <Text
        fontFamily="Andale Mono"
        fontSize={24}
        color="blue"
        textAlign="end"
        cursor="pointer"
        onClick={(event) => {
          event.preventDefault();
          document
            .getElementById(sections["contact"].id)
            ?.scrollIntoView({ behavior: "smooth", block: "center"});
        }}
      >
        Comprar
      </Text>
      <Image
        src={image.fields?.file?.url as string}
        alt="project-image"
        boxSize="auto"
      />
    </Stack>
  );
}

export default ProjectImage