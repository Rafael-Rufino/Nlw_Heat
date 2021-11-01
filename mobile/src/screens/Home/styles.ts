import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 18,
    backgroundColor: COLORS.BLACK_SECONDARY,
    color: COLORS.WHITE,
    // justifyContent: "center",
    // alignItems: "center",
    paddingTop: getStatusBarHeight() + 17,
  },
});
