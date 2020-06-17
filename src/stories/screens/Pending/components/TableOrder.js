import * as React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

import ui from "../../../ui";

class TableOrder extends React.PureComponent {
  onLongPress = () => {
    this.props.onLongPress(
      this.props.id
    );
  }
    onTablePress = () => {
    this.props.onTablePress(
      this.props.id
    );
  }

  render() {
      const { number,iconSize } = this.props;

      const itemStyle = {
          width: ui.getIconSize(iconSize),
          height: ui.getIconSize(iconSize),
      };
    return (
      <TouchableOpacity onLongPress={this.onLongPress} onPress={this.onTablePress}>
        <View style={[styles.view, itemStyle]}>
          <Text style={styles.text}>
            Table {number}
          </Text>
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginRight: 15,
    marginTop: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#afafaf",
  },
  text: {
    fontSize: 21,
    fontWeight: "bold",
  },
});

export default TableOrder;
