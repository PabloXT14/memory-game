import { colors } from "@/shared/theme/colors"
import {
  type StyleProp,
  TextInput,
  type TextInputProps,
  View,
  type ViewStyle,
} from "react-native"

import { styles } from "./styles"

type InputProps = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>
}

export const Input = ({ containerStyle, style, ...props }: InputProps) => (
  <View style={[styles.container, containerStyle]}>
    <TextInput
      placeholderTextColor={colors.grayscale[300]}
      style={[styles.input, style]}
      {...props}
    />
  </View>
)
