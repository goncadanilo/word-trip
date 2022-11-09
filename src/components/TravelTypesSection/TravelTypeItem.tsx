import {
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  WrapItem,
} from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

interface TravelTypeItemProps {
  icon: string;
  label: string;
}

export function TravelTypeItem({ icon, label }: TravelTypeItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (!isWideVersion) {
    return (
      <WrapItem>
        <HStack>
          <Icon as={FaCircle} fontSize="sm" color="yellow.500" />
          <Text fontSize="lg">{label}</Text>
        </HStack>
      </WrapItem>
    );
  }

  return (
    <WrapItem>
      <Stack align="center" justify="center" spacing="6">
        <Image src={icon} alt={label} w={85} />
        <Text fontSize="2xl">{label}</Text>
      </Stack>
    </WrapItem>
  );
}
