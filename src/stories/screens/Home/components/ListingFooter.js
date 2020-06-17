import * as React from "react";
import { StyleSheet } from "react-native";
import { Footer, Input, Item } from "native-base";

import Categories from "./Categories";

const ListingFooter = props => {
  const {
    setCategory,
    visibility,
    categories,
    remarks,
    setRemarks,
    confirmOrder,
  } = props;

  if (confirmOrder) {
    return (
      <Footer style={styles.footerRemarks}>
        <Item regular style={styles.item}>
          <Input
            value={remarks}
            onChangeText={setRemarks}
            placeholder="Remarks (e.g. with/without spicy)"
          />
        </Item>
      </Footer>
    );
  }

  if (!visibility) {
    return null;
  }

  return (
    <Footer style={styles.footer}>
      <Categories
        categories={categories}
        setCategory={setCategory}
      />
    </Footer>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 200,
    marginTop: 10,
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  footerRemarks: {
    height: 55,
    marginTop: 10,
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  item: {
    marginLeft: 0,
    height: "100%",
  },
});

export default ListingFooter;
