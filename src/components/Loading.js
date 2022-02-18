import React from "react";
import { Div, Icon } from "atomize";

const Loading = () => {
  return (
    <Div
      bg="white"
      d="flex"
      align="center"
      justify="center"
      pos="absolute"
      top="0"
      bottom="0"
      right="0"
      left="0"
      style={{ zIndex: 2, minHeight: "100vh", minWidth: "100vw" }}
    >
      <Icon name="Loading3" size="8rem" color="brand500" />
    </Div>
  );
};

// const LoadingComponent = () => (
//     <Div d="flex" align="center" justify="center" h="100%">
//         <Icon name="Loading3" size="20px" color="brand500" />
//     </Div>
// )

export default Loading;
