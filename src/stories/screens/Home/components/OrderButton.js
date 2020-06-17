import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "native-base";

const OrderButton = props => {
  const { confirmOrder, onOrder } = props;

  return (
    <Button
      full
      onPress={onOrder}
      style={styles.button}
      success={confirmOrder}
    >
      <Text style={styles.text}>
        {confirmOrder ? "Send Order" : "Confirm Order"}
      </Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    height: "100%",
  },
  text: {
    fontSize: 20,
  },
});

export default OrderButton;
