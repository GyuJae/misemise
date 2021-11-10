import React from "react";
import { useDailys } from "../contexts/DailyContext";
import { useLocation } from "../contexts/Location.context";
import { useStation } from "../contexts/MeasuringStation.context";
import Container from "../styled/Container";
import Text from "../styled/Text";

const LocationName = () => {
  const { location } = useLocation();
  const { dailys } = useDailys();
  return (
    <Container height={100}>
      <Text fontSize={25} content={location} />
      <Text fontSize={15} content={dailys[0].dataTime} />
    </Container>
  );
};

export default LocationName;
