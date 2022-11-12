import { Flex, Image, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { continents } from "../../mock/continents";

export function Slides() {
  return (
    <Flex w="100%" maxW={1240} h={[250, 450]} mb={["6", "10"]} marginX="auto">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        loop
      >
        {continents.map((continent) => (
          <>
            <SwiperSlide>
              <Image
                position="absolute"
                src={continent.image}
                alt={continent.name}
                filter="auto"
                brightness="50%"
              />
              <ChakraLink
                position="absolute"
                _hover={{ textDecoration: "none" }}
              >
                <Link href="/continent/europa">
                  <Text
                    color="gray.50"
                    fontSize={["2xl", "5xl"]}
                    fontWeight="bold"
                  >
                    {continent.name}
                    <Text color="gray.50" fontSize={["sm", "2xl"]}>
                      {continent.description}
                    </Text>
                  </Text>
                </Link>
              </ChakraLink>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </Flex>
  );
}
