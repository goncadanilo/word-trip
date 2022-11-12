import { Box, Flex, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";
import { mostPopularCities } from "../../mock/cities";

export default function Continent() {
  return (
    <Flex flexDir="column">
      <Header hasBackLink />
      <Box
        bgImage={`url(https://s3-alpha-sig.figma.com/img/9700/0556/be698d9fa6470e23713e801d9f04e27d?Expires=1668988800&Signature=RdxXhOjD-8JY7hgT0VS8YwSHLnWeiz4gTWKgD76KIlrhvZIwwJjptTCuxcJuddpGNEG23IU-adNP~cJgS7bGG~hb9ZSF0SzMeqCP3O7vrSnnWWIlq12rCnazZcHfuCL4NYW~E5JOWm9fMfoZR84xZeuvmBl-Jd7yU5zprv5p6nMNPrD7ZLPjlPim2rmta-ufPLRKqAwM6jfPxsomj6rGZbHx48c4mUEbroTQHjFgQKMBZypWJZvKtm97JcNwIKtK-Fk8l-pF2Z~wi8j2kSbHRowfYUIFigqHVUNirD7OuG5REHj1IW7SVvanigVxPsFHNxw5Z1ICk1mQRs2EHUvvOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height={["150", "500"]}
      >
        <Flex
          h="100%"
          alignItems={["center", "flex-end"]}
          justify={["center", "flex-start"]}
          pl={["0", "36"]}
          pb={["0", "14"]}
        >
          <Heading color="gray.50" fontSize={["28px", "5xl"]}>
            Europa
          </Heading>
        </Flex>
      </Box>

      <Box h="100%" mt={["6", "20"]} px={["4", "36"]}>
        <Flex flexDir={["column", "row"]} justify="space-between">
          <Text
            maxW="600"
            fontSize={["sm", "2xl"]}
            lineHeight={["5", "9"]}
            textAlign="justify"
            fontWeight="400"
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>

          <HStack spacing={10} mt={["4", "0"]}>
            <Info legend="países" numberOf={50} />
            <Info legend="línguas" numberOf={60} />
            <Info legend="cidades +100" numberOf={27} hasTooltip={true} />
          </HStack>
        </Flex>

        <Box mt={["8", "20"]}>
          <Text fontSize={["2xl", "4xl"]}>Cidades +100</Text>
          <SimpleGrid
            mt={["5", "10"]}
            columns={[1, 4]}
            spacing={[5, 10]}
            my={["5", "45px"]}
          >
            {mostPopularCities.map((city) => (
              <Card
                key={city.cityName}
                name={city.cityName}
                image={city.cityImage}
                countryName={city.countryName}
                countryCode={city.countryCode}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
}
