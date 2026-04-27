import {
  type StyleProp,
  TextInput,
  type TextInputProps,
  type ViewStyle,
} from "react-native"
import Animated from "react-native-reanimated"

import { colors } from "@/shared/theme/colors"
import { styles } from "./styles"

type InputProps = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>
}

export const Input = ({ containerStyle, style, ...props }: InputProps) => (
  <Animated.View style={[styles.container, containerStyle]}>
    <TextInput
      placeholderTextColor={colors.grayscale[300]}
      style={[styles.input, style]}
      {...props}
    />
  </Animated.View>
)
