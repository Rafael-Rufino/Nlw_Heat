import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 36,
    marginLeft: 16,
  },
  message: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },

  userName: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginLeft: 16,
  },
});
