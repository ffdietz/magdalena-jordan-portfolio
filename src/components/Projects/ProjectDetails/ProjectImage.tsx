import { Image, Modal, ModalContent, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { sections } from "@content";
import { Asset } from "contentful";

interface ProjectImageProps {
  image: Asset
}

function ProjectImage({image}: ProjectImageProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
              ?.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
        >
          Comprar
        </Text>
        <Image
          src={image.fields?.file?.url as string}
          alt="project-image"
          boxSize="auto"
          onClick={onOpen}
        />
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick>
        <ModalOverlay bg="#FFFC"/>
        <ModalContent minWidth="8xl" height="fit-content" my="auto">
          <Image
            src={image.fields?.file?.url as string}
            alt="project-image"
            objectFit="contain"
            onClick={onOpen}
          />
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProjectImage