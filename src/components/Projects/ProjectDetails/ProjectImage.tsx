import {
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Asset } from "contentful";
import { Link } from "react-router-dom";

interface ProjectImageProps {
  image: Asset;
}

function ProjectImage({ image }: ProjectImageProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Stack>
        <Text
          as={Link}
          to="/contact"
          fontFamily="Andale Mono"
          fontSize={18}
          color="secondaryColor"
          textAlign="end"
          cursor="pointer"
        >
          Comprar
        </Text>
        <Image
          src={image.fields?.file?.url as string}
          alt="project-image"
          boxSize="auto"
          minW="xl"
          onClick={onOpen}
        />
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick>
        <ModalOverlay bg="#FFFC" />
        <ModalContent minWidth="fit-content" height="fit-content" my="auto">
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

export default ProjectImage;
