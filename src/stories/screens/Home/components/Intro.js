import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Button, Content, Text, Input, Item, Picker } from "native-base";

import CheckBox from "./CheckBox";

const window = Dimensions.get("window");

const _renderByCond = (component, cond) => {
  return cond ? component : null;
};

const Intro = props => {
  const {
    onDineIn,
    setTableNumber,
    orderType,
    setOrderType,
    isNewOrder,
    toggleIsNewOrder,
    tableNumber,
  } = props;

  return (
    <Content contentContainerStyle={styles.content}>
      <View style={styles.view}>
        <Text style={styles.text}>
          Enter No/Type
        </Text>
        <CheckBox
          text="New Order"
          checked={isNewOrder}
          onPress={toggleIsNewOrder}
        />
        {
          _renderByCond(
            <Item regular style={styles.item}>
              <Input
                keyboardType="numeric"
                placeholder="Table No"
                onChangeText={setTableNumber}
                value={tableNumber}
              />
            </Item>
          , !isNewOrder || orderType === "Dine-in" || orderType === "Family")
        }
        {
          _renderByCond(
            <View style={styles.dialogView}>
              <Picker
                mode="dialog"
                prompt="Select Type"
                selectedValue={orderType}
                onValueChange={setOrderType}
              >
                <Picker.Item label="Dine-in" value="Dine-in" />
                <Picker.Item label="Takeaway" value="Takeaway" />
                <Picker.Item label="Delivery" value="Delivery" />
                <Picker.Item label="Online" value="Online" />
                <Picker.Item label="Family" value="Family" />
              </Picker>
            </View>
          , isNewOrder)
        }
        <View style={styles.typeView}>
          <Button
            style={styles.typeButton}
            onPress={onDineIn}
          >
            <Text>Order</Text>
          </Button>
        </View>
      </View>
    </Content>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#efefef",
  },
  text: {
    fontSize: 21,
    marginBottom: 10,
    fontWeight: "bold",
  },
  view: {
    padding: 15,
    width: window.width < 1024 ? "50%" : "25%",
    borderRadius: 5,
    alignSelf: "center",
    backgroundColor: "white",
  },
  item: {
    borderColor: "#efefef",
  },
  typeView: {
    marginTop: 15,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  typeButton: {
    borderRadius: 0,
  },
  takeAwayButton: {
    marginRight: 10,
    backgroundColor: "#777777",
  },
  dialogView: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#efefef",
  },
});

export default Intro;
