import * as React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { Footer, Text, Button } from "native-base";


const OrderFooter = props => {
  let {
    orderedItemsTotal,
    // orderedItemsLength,
    // onClear,
    // onOrder,
    // confirmOrder,
    // clearOrderedItems,
    // tax,
    taxes,
    // taxAmount,
      roundoff
  } = props;
   let roundoff_value = 0
    console.log(orderedItemsTotal)
  if(roundoff && orderedItemsTotal > 0){
      let get_modulo = parseFloat(orderedItemsTotal) % parseInt(orderedItemsTotal,10)
      console.log(get_modulo)
      if(get_modulo > 0.05){
          orderedItemsTotal = parseInt(orderedItemsTotal,10) + 1
          roundoff_value = get_modulo

      } else if (get_modulo <= 0.05 && get_modulo > 0){
          orderedItemsTotal = (parseInt(orderedItemsTotal,10))
          roundoff_value = (parseInt(orderedItemsTotal,10) + 1) - parseFloat(orderedItemsTotal)
      }
  }

  console.log(orderedItemsTotal)
  console.log(roundoff_value)
  return (
      <View style={styles.infoView}>

          {taxes.length > 0 ? (
                <FlatList
                    numColumns={1}
                    data={taxes}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) =>

                        <View style={styles.viewInner}>
                          <Text style={[styles.text, styles.totalText]}>{item.name}</Text>
                          <Text>{item.totalAmount.toFixed(2)}</Text>

                        </View>
                    }
                />

          ) : null}
          {roundoff ? (
              <View style={styles.viewInner}>
                <Text style={[styles.text, styles.totalText]}>Roundoff</Text>
                <Text>{roundoff_value.toFixed(2)}</Text>
              </View>
          ) : null}

        <View style={styles.viewInner}>
          <Text style={[styles.text, styles.totalText]}>Total</Text>
          <Text>{parseFloat(orderedItemsTotal).toFixed(2)}</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 130,
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  infoView: {
    borderTopWidth: 1,
    borderTopColor: "#efefef",
  },
  orderView: {
    flex: 1,
  },
  totalText: {
    fontSize: 18,
    color: "#777777",
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
    taxText: {
    fontSize: 15,
    color: "#777777",
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  delete: {
    alignSelf: "center",
  },
    viewInner: {
        paddingLeft: 20,
        paddingRight: 20,
    width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        fontWeight: "bold",
    },

});

export default OrderFooter;

