import { Flex, Stack, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100vw"
      align="center"
      justify="space-between"
      px={["4", "36"]}
      py={["7", "0"]}
      h={["40", "100%"]}
      maxH={335}
      bgImage="url('/images/banner.png')"
    >
      <Stack spacing={["2", "5"]}>
        <Text fontSize={["xl", "4xl"]} color="gray.50">
          5 Continentes, <br /> infinitas possibilidades.
        </Text>
        <Text fontSize={["sm", "xl"]} maxW={[300, 500]} color="gray.100">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Stack>
    </Flex>
  );
}
