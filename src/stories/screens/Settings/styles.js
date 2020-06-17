import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    flex: null,
    width: window.width < 1024 ? "75%" : "50%",
    marginTop: 15,
    flexWrap: "nowrap",
    alignSelf: "center",
  },
  cardView: {
    padding: 15,
  },
  cardViewNext: {
    borderTopWidth: 1,
    borderTopColor: "#efefef"
  },
  cardHelpText: {
    color: "#afafaf",
    marginBottom: 15,
  },
  copyrightText: {
    color: "#afafaf",
    textAlign: "center",
  },
  footerView: {
    marginTop: 10,
    marginBottom: 15,
  },
  checkBoxView: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
  },
  checkBoxText: {
    marginLeft: 10,
  },
  headerLeft: {
    flex: 1,
  },
  headerBody: {
    flex: 1,
    alignItems: "center",
  },
  headerRight: {
    flex: 1,
  },
  bodyTitle: {
    textAlign: "center",
  },
  save: {
    color: "white",
    padding: 10,
  },
  helpText: {
    color: "#afafaf",
    fontWeight: "bold",
  },
  dialogView: {
    width: 180,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#efefef",
  },
  formInputText: {
    marginBottom: 5,
  },
});

export default styles;
