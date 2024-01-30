import { Stack } from "@chakra-ui/react"

interface SectionProps{
  id?: string,
  children: React.ReactNode
}

export function Section({ children, id }: SectionProps) {
  return (
    <Stack id={id} h="100dvh" pt="navPadding" align="center">
      {children}
    </Stack>
  );
}
