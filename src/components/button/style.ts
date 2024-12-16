import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    height: 56,
    maxHeight: 56,
    backgroundColor: colors.green.base,
    borderRadius: 10,
    flexDirection: "row",
    gap: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    textAlign: "center",
    color: colors.gray[100],
    fontSize: 16,
  },
});
