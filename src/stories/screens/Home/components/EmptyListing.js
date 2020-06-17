import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Icon } from "native-base";

const EmptyListing = props => {
  let syncMessage = "Sync your items from EPRNext";

  if (props.syncMessage) {
    syncMessage = props.syncMessage;
  }

  return (
    <View style={styles.view}>
      <Icon name="alert" style={styles.icon} />
      <Text style={styles.text}>
        No data found
      </Text>
      <Text style={styles.text}>
        {syncMessage}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 48,
    color: "#afafaf",
    textAlign: "center",
  },
  text: {
    fontSize: 30,
    color: "#afafaf",
    textAlign: "center",
  },
});

export default EmptyListing;
