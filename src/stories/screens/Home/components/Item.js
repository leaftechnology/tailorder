import * as React from "react";
import { Text } from "native-base";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";

import ui from "../../../ui";

class Item extends React.PureComponent {
  onPress = () => this.props.onPress(this.props.data);


  render() {
    const { useDescription, iconSize } = this.props;
    const { name, itemName, standardRate, color } = this.props.data;

    const itemStyle = {
      backgroundColor: color.toLowerCase().replace(/\s/g, ""),
      width: ui.getIconSize(iconSize),
      height: ui.getIconSize(iconSize),
    };
    const fontStyle = {
      fontSize: ui.getFontSize(iconSize),
    };
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={[styles.view, itemStyle]}>
          <Text style={[styles.text, fontStyle]}>
            {useDescription ? itemName : name}
          </Text>
          <Text style={[styles.price,fontStyle]}>
            {standardRate.toFixed(2)}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: ui.itemSize,
    height: ui.itemSize,
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#afafaf",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "bold",
  },
  price: {
    fontWeight: "bold",
    textAlign: "right",
  }
});

export default Item;

