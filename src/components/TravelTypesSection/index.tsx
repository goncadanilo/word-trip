import { Wrap } from "@chakra-ui/react";
import { TravelTypeItem } from "./TravelTypeItem";

export function TravelTypesSection() {
  return (
    <Wrap
      mt={["9", "28"]}
      spacingX={["24", "44"]}
      spacingY="6"
      justify="center"
    >
      <TravelTypeItem icon="/images/cocktail.svg" label="vida noturna" />
      <TravelTypeItem icon="/images/surf.svg" label="praia" />
      <TravelTypeItem icon="/images/building.svg" label="moderno" />
      <TravelTypeItem icon="/images/museum.svg" label="clássico" />
      <TravelTypeItem icon="/images/earth.svg" label="e mais..." />
    </Wrap>
  );
}
