import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100vw"
      h={["12", "24"]}
      p={["0.5", "1"]}
      align="center"
      justify="center"
    >
      <Image
        src="/images/logo.svg"
        alt="world trip"
        w={["20", "100%"]}
        h={["5", "100%"]}
        maxW={184}
        maxH={45}
      />
    </Flex>
  );
}
