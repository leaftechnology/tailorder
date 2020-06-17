import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Container, Text, Footer } from "native-base";


import OrderedItems from "./OrderedItems";
import OrderFooter from "./OrderFooter";


const Order = props => {
  const {
    orderedItems,
    orderedItemsTotal,
    orderedItemsLength,
    onClear,
    onOrder,
    removeItem,
    confirmOrder,
    clearOrderedItems,
    useDescription,
    decreaseQty,
    tax,
    taxes,
    taxAmount,
      roundoff
  } = props;

  return (
    <Container>
      <View style={styles.header}>
        <Text style={styles.headerText}>Qty</Text>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Rate</Text>
      </View>
      <View>
      <OrderedItems
        removeItem={removeItem}
        decreaseQty={decreaseQty}
        orderedItems={orderedItems}
        useDescription={useDescription}
      />

      <OrderFooter
          roundoff={roundoff}
        onClear={onClear}
        onOrder={onOrder}
        taxes={taxes}
        confirmOrder={confirmOrder}
        clearOrderedItems={clearOrderedItems}
        orderedItemsTotal={orderedItemsTotal}
        orderedItemsLength={orderedItemsLength}
        tax={tax}
        taxAmount={taxAmount}
      />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
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

export default Order;
