import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CheckBox } from "native-base";

const ChildCheckBox = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.view}>
        <CheckBox
          style={styles.checkbox}
          checked={props.checked}
          onPress={props.onPress}
        />
        <Text style={styles.text}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
  },
  text: {
    color: "#555",
    fontSize: 18,
  },
});

export default ChildCheckBox;
