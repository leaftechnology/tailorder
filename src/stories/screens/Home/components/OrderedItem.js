import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "native-base";
import { createAnimatableComponent } from "react-native-animatable";

import { isItemRemarks } from "../../../../utils";

const AnimatableView = createAnimatableComponent(View);

// Animation Constants
const DURATION = 180; // milliseconds
const ANIMATION = "slideInRight";

const renderNumberText = (itemName, data) => {
  if (isItemRemarks(itemName)) {
    return null;
  }
  return <Text>{data.toFixed(2)}</Text>;
};

const OrderedItem = props => {
  const { useDescription } = props;
  const { itemName, itemCode, qty, rate } = props.data;

  return (

    <AnimatableView
      useNativeDriver
      style={styles.view}
      duration={DURATION}
      animation={ANIMATION}
    >
      {renderNumberText(itemName, qty)}
      <Text style={styles.nameText}>
        {useDescription ? itemName : itemCode}
      </Text>
      {renderNumberText(itemName, rate)}
    </AnimatableView>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  nameText: {
    textAlign: "center",
  },
});

export default OrderedItem;
