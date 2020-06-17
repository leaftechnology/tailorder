import * as React from "react";
import { FlatList } from "react-native";

import Category from "./Category";

class Categories extends React.PureComponent {
  _renderItem = ({ item, index }) => {
    const { setCategory } = this.props;
    return (
      <Category
        text={item}
        setCategory={setCategory}
      />
    );
  }

  _keyExtractor = (item, index) => `category-${index}`

  render() {
    const { categories } = this.props;
    return (
      <FlatList
        data={categories}
        horizontal={true}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

export default Categories;
