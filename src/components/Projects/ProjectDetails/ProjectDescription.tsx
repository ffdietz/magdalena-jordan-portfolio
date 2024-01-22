import { Text } from "@chakra-ui/react";

interface ProjectDescriptionProps {
  description: string
}

function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <Text fontFamily="Andale Mono" overflowY="scroll" h={48} fontSize={20}>
      {description}
    </Text>
  );
}

export default ProjectDescription;
