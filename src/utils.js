import { Toast } from "native-base";
import { Alert } from "react-native";


exports.filterItemsByCategory = function(items, category) {
  return items.filter(item => item.category === category);
};


exports.showDangerToast = function(text, position) {
  Toast.show({
    text,
    position,
    type: "danger",
    buttonText: "Okay",
  });
};


exports.showSuccessToast = function(text, position, duration = 1500) {
  Toast.show({
    text,
    position,
    duration,
    type: "success",
    buttonText: "Okay",
  });
};


exports.isItemRemarks = function(itemName) {
  const lastChar = itemName[itemName.length - 1];
  return lastChar === "*";
};


exports.printAlert = function(onPressYes, onPressNo) {
  Alert.alert(
    "Print Order",
    "Would you like to print the order to the kitchen?",
    [
      { text: "No", onPress: onPressNo, style: "cancel" },
      { text: "Yes", onPress: onPressYes }
    ]
  );
};
