import { StyleSheet, Platform, Dimensions } from "react-native";

import Colors from "./Colors";
import Fonts from "./Fonts";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.white_FFFFFF
  },
  justifyAlignCenter: {
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  bgImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: Colors.black_000000,
    alignItems: "center"
  },
  imageStyle: {
    flex: 1,
    width: "60%",
    height: "70%"
  },
  inputTextElement: {
    color: Colors.blackBlue_384259,
    fontSize: 16,
    marginLeft: 8,
    paddingLeft: 30,
    width: Platform.OS === "ios" ? width - 36 : width - 30
  },
  placeholderElement: {
    fontFamily: "myriadProRegular",
    color: Colors.grey_707070,
    paddingVertical: 8
  },
  normalText: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: Colors.blackBlueColor
  },
  errorText: {
    fontFamily: "myriadProRegular",
    fontSize: 16,
    color: Colors.red,
    backgroundColor: "rgba(0, 0, 0, 0)"
  }
});
