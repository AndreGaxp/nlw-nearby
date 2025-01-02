import { Text, Pressable, PressableProps } from "react-native"
import { s } from "./style"

type Props = PressableProps & {
  name: string
  iconId: string
  isSelected?: boolean
}

export function Category({ name, iconId, isSelected = false, ...rest}: Props){
  return(
    <Pressable style={[s.container]}>
      <Text>{name}</Text>
    </Pressable>
  )
}
