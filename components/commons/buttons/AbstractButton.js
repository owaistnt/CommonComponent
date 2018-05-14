import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const AbstractButton = ({ buttonStyle, textStyle, children, _onPress }) => {
  return (
    <TouchableOpacity onPress={_onPress} style={{ ...buttonStyle }}>
      <Text style={{ ...textStyle }}>{children}</Text>
    </TouchableOpacity>
  );
};

export { AbstractButton };
