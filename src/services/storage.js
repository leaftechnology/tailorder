import { AsyncStorage } from "react-native";

export const retrieveFromStorage = (storageKey) => {
  return AsyncStorage.getItem(storageKey)
    .then(item => item ? JSON.parse(item) : null);
};

export const saveToStorage = (storageKey, value) => {
  const valueString = JSON.stringify(value);
  console.log(valueString)
  return AsyncStorage.setItem(storageKey, valueString);
};
