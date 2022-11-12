import { Center, Divider, Flex, Text } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slides } from "../components/Slides";
import { TravelTypesSection } from "../components/TravelTypesSection";

export default function Home() {
  return (
    <Flex flexDir="column">
      <Header />
      <Banner />
      <TravelTypesSection />

      <Center mt={["9", "20"]} mb={["6", "14"]}>
        <Divider w={90} borderColor="gray.500" />
      </Center>

      <Text align="center" fontSize={["xl", "4xl"]} mb={["5", "14"]}>
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Slides />
    </Flex>
  );
}
