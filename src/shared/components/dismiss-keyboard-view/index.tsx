import type { ReactNode } from "react"
import { Keyboard, TouchableWithoutFeedback } from "react-native"
import { KeyboardAvoidingView } from "react-native-keyboard-controller"

type DismissKeyboardViewProps = {
  children: ReactNode
}

export const DismissKeyboardView = ({ children }: DismissKeyboardViewProps) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
)
