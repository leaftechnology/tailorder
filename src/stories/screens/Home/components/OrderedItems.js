import * as React from "react";
import { View, StyleSheet, Text,  } from "react-native";

import { Footer } from "native-base";

import { SwipeListView } from "react-native-swipe-list-view";

import OrderedItem from "./OrderedItem";
import OrderedItemBack from "./OrderedItemBack";

class OrderedItems extends React.PureComponent {
  removeItem = (index, rowMap) => {
    rowMap[`ordered-item-${index}`].closeRow();
    this.props.removeItem(index);
  }

  decreaseQty = (index, rowMap) => {
    rowMap[`ordered-item-${index}`].closeRow();
    this.props.decreaseQty(index);
  }

  _renderItem = ({ item, index }) => (
    <OrderedItem
      data={item}
      useDescription={this.props.useDescription}
    />
  )

  _renderHiddenItem = (data, rowMap) => (
    <OrderedItemBack
      rowMap={rowMap}
      index={data.index}
      removeItem={this.removeItem}
      decreaseQty={this.decreaseQty}
    />
  )

  _renderSeparator = () => (
    <View style={styles.separator} />
  );


  _keyExtractor = (item, index) => (`ordered-item-${index}`)

  render() {
    const { orderedItems } = this.props;
    return (
          <SwipeListView
            useFlatList
            leftOpenValue={75}
            rightOpenValue={-75}
            data={orderedItems}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            renderHiddenItem={this._renderHiddenItem}
          />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: "#efefef",
  },
    header: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#efefef",
    },
    headerText: {
        fontWeight: "bold",
    }

});

export default OrderedItems;
