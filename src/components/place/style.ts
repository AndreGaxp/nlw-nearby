import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  container:{
    height: 120,
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 12,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  image:{
    width: 115,
    height: 105,
    backgroundColor: colors.gray[200],
    borderRadius: 8
  },
  content:{
    flex: 1,
    gap: 4
  },
  name:{
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[600]
  },
  description:{
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[500]
  },
  footer:{
    flexDirection: 'row',
    gap: 7,
    marginTop: 10
  },
  tickets:{
    fontSize: 12,
    fontFamily: fontFamily.regular,
    color: colors.gray[400]
  }
})