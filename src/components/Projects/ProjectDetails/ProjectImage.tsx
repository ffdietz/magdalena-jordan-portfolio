import { Image } from "@chakra-ui/react";
import { Asset } from "contentful";

interface ProjectImageProps {
  image: Asset
}

function ProjectImage({image}: ProjectImageProps) {
  return <Image src={image.fields?.file?.url as string} alt="" />;
}

export default ProjectImage