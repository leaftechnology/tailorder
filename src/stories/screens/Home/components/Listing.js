import * as React from "react";
import { Container, Text } from "native-base";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Items from "./Items";
import ListingFooter from "./ListingFooter";

import { filterItemsByCategory } from "../../../../utils";

const Listing = props => {
  const {
    category,
    categories,
    listingItems,
    orderItem,
    setCategory,
    toggleCategoryList,
    visibleCategoryList,
    useDescription,
    setRemarks,
    remarks,
    confirmOrder,
    iconSize,
  } = props;

  const collapseText = visibleCategoryList ? "-" : "+";

  return (
    <Container>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleCategoryList}>
          <Text style={styles.headerText}>
            {collapseText} Category: {category}
          </Text>
        </TouchableOpacity>
      </View>
      <Items
        orderItem={orderItem}
        useDescription={useDescription}
        iconSize={iconSize}
        data={
          category === "All"
          ? listingItems
          : filterItemsByCategory(listingItems, category)
        }
      />
      <ListingFooter
        categories={categories}
        setCategory={setCategory}
        visibility={visibleCategoryList}
        remarks={remarks}
        setRemarks={setRemarks}
        confirmOrder={confirmOrder}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  }
});

export default Listing;
