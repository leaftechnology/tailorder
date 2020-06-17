import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Spinner, Text } from "native-base";

const Syncing = props => (
  <View style={styles.view}>
    <Spinner color="#3F51B5" />
    <Text style={styles.text}>
      Syncing from ERPNext
    </Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    color: "#afafaf",
    textAlign: "center",
  },
});

export default Syncing;
