import * as React from "react";
import { Text } from "native-base";
import { View, TouchableOpacity, StyleSheet } from "react-native";

class Category extends React.PureComponent {
  setCategory = () => this.props.setCategory(this.props.text);

  render() {
    const { text } = this.props;
    return (
      <TouchableOpacity onPress={this.setCategory}>
        <View style={styles.view}>
          <Text style={styles.text}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: 200,
    height: "100%",
    borderWidth: 1,
    borderColor: "#efefef",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "#afafaf",
    fontWeight: "bold",
    textAlign: "center",
  },
  selectedText: {
    fontSize: 18,
    color: "#4c4c4c",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Category;
