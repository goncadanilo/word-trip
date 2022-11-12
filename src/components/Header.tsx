import { Flex, Icon, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

interface HeaderProps {
  hasBackLink?: boolean;
}

export function Header({ hasBackLink = false }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100vw"
      h={["12", "24"]}
      p={["0.5", "1"]}
      align="center"
      justify="center"
    >
      {hasBackLink && (
        <ChakraLink position="absolute" left={["4", "36"]}>
          <Link href="/">
            <Icon as={IoIosArrowBack} fontSize={["md", "2xl"]} />
          </Link>
        </ChakraLink>
      )}

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
