import { Flex } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex flexDir="column" h="100vh">
      <Header />
      <Banner />
    </Flex>
  );
}
