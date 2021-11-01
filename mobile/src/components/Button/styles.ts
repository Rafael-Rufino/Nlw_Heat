import { StyleSheet } from "react-native";
import { FONTS } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  title: {
    fontFamily: FONTS.BOLD,
    fontSize: 14,
  },
  icon: {
    marginRight: 12,
  },
});
