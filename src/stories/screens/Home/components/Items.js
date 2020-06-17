import * as React from "react";
import { FlatList } from "react-native";

import Item from "./Item";
import ui from "../../../ui";

class Items extends React.PureComponent {
  _renderItem = ({ item, index }) => {
    const { orderItem, useDescription, iconSize } = this.props;
    return (
      <Item
        data={item}
        onPress={orderItem}
        useDescription={useDescription}
        iconSize={iconSize}
      />
    );
  }
  _keyExtractor = (item, index) => `item-${index}`

  render() {
    const { data,iconSize } = this.props;
    return (
      <FlatList
        data={data}
        numColumns={ui.getColumns(iconSize)}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

export default Items;
