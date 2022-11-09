import { Flex } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypesSection } from "../components/TravelTypesSection";

export default function Home() {
  return (
    <Flex flexDir="column" h="100vh">
      <Header />
      <Banner />
      <TravelTypesSection />
    </Flex>
  );
}
