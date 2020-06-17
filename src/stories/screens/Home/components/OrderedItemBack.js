import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Button } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class OrderedItemBack extends React.PureComponent {
  removeItem = () => this.props.removeItem(this.props.index, this.props.rowMap)
  decreaseQty = () => this.props.decreaseQty(this.props.index, this.props.rowMap)

  render() {
    return (
      <View style={styles.view}>
        <Button style={styles.viewButton}>
          <Icon active name="pencil" size={21} color="white" />
        </Button>
        <Button
          danger
          style={styles.viewButton}
          onPress={this.decreaseQty}
          onLongPress={this.removeItem}
        >
          <Icon active name="minus-circle" size={21} color="white" />
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewButton: {
    width: 75,
    height: 50,
    justifyContent: "center",
  },
});

export default OrderedItemBack;
