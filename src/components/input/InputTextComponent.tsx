import { Image, Pressable, StyleSheet, Text, TextInput, TextInputFocusEvent, TextInputProps, View } from 'react-native'
import React, { useRef } from 'react'
import { colors } from '../../theme/colors';

type Props = {
  value?: string;
  label?: string;
  // placeholder?: string;
  // onChangeText?: (text: string) => void;
  // onBlur?: () => void;
} & TextInputProps

const InputTextComponent = (props: Props) => {
  const focusRef = useRef<TextInput>(null);
  // const hasContent = useMemo(() => 
  //   props.value 
  //     ? props.value.length > 0 
  //     : false
  // , [props.value])

  const handleOnCancelFill = () => {
    if (props.onChangeText) {
      props.onChangeText('');
    }
  }

  const handleOnBlur = (e: TextInputFocusEvent) => {
    if (props.onBlur) {
      props.onBlur(e);
    }
    focusRef.current?.blur();
  }
  
  return (
    <View
      style={styles.container}
    >
      <View style={styles.content}>
        {focusRef.current?.isFocused() && <Text style={styles.labelText}>{props.label}</Text>}
        <TextInput
          ref={focusRef}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor={colors.violetMedium}
          onBlur={handleOnBlur}
          onChangeText={props.onChangeText}
          onFocus={props.onBlur}
          style={styles.input}
          {...props}
        />
      </View>
      {focusRef.current?.isFocused() && (
        <Pressable onPress={handleOnCancelFill}>
          <Image
            source={require('../../assets/icons/close.png')}
            style={styles.closeIcon}
            resizeMethod='scale'
          />
        </Pressable>
      )}
    </View>
  )
}

export default InputTextComponent

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 60,
    backgroundColor: colors.searchColorBg,
    borderWidth: 1.5,
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  input: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 0,
  },
  labelText: {
    fontWeight: '500',
    color: colors.textBrightViolet,
    fontSize: 10,
    lineHeight: 0,
  },
  closeIcon: {
    width: 25,
    height: 25,
  },
})