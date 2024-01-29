import { Stack } from "@chakra-ui/react"

interface SectionProps{
  id: string,
  children: React.ReactNode
}

export function Section({ children, id }: SectionProps) {
  return (
    <Stack id={id} h="100dvh" pt={16} align="center">
      {children}
    </Stack>
  )
}
