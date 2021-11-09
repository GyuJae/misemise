import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.fullWidth};
  height: ${(props) => props.theme.fullHeight};
`;

const GifImg = styled.Image`
  width: ${(props) => props.theme.fullWidth};
  height: ${(props) => props.theme.fullHeight};
`;

const Loading = () => {
  return (
    <Container>
      <GifImg
        source={{
          uri: "https://thumbs.gfycat.com/ElegantTemptingAfricanwildcat-size_restricted.gif",
        }}
      />
    </Container>
  );
};

export default Loading;
