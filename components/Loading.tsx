import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import Face from "./Face";
import { Animated } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.fullWidth};
  height: ${(props) => props.theme.fullHeight};
  background-color: #ef6c00;
`;

const Loading = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(1000),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 10,
      }
    ).start();
  }, [fadeAnim]);
  return (
    <Container>
      <Face size={300} wantGrade={"3"} />
      <Animated.Text
        style={{
          fontSize: 15,
          color: "white",
          opacity: fadeAnim,
        }}
      >
        Loading...
      </Animated.Text>
    </Container>
  );
};

export default Loading;
