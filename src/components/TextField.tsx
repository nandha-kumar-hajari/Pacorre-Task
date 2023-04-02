import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
} from 'react-native';
import React, {FC} from 'react';
import Fonts from '../utils/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface TextInputProps {
  iconName?: any;
  label?: string;
  isEditable?: boolean;
  showEdit?: boolean;
  showSubmit?: boolean;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  disabled?: boolean;
  onChangeText?: () => {};
  onPressEdit?: () => void;
  onPressSubmit?: () => void;
  maxLength?: number;
}
const TextField: FC<TextInputProps> = ({
  iconName,
  keyboardType,
  label,
  isEditable,
  showEdit,
  showSubmit,
  value,
  disabled,
  onChangeText,
  onPressEdit,
  onPressSubmit,
  maxLength,
}: TextInputProps) => {
  return (
    <View
      style={{
        paddingHorizontal: RFValue(10),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: RFValue(5),
        borderRadius: 3,
        width: '90%',
        backgroundColor: '#F7F7F7',
        marginTop: RFValue(10),
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <FeatherIcon
          name={iconName}
          style={{marginHorizontal: 10}}
          size={RFValue(18)}
          color={Colors.BASEDARK}
        />
        <View>
          <Text
            style={{
              fontFamily: Fonts.SemiBold,
              color: Colors.BLACK,
              fontSize: RFValue(10),
            }}>
            {label}
          </Text>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            editable={isEditable}
            maxLength={maxLength}
            style={{
              width: RFValue(200),
              padding: 0,
              fontFamily: Fonts.SemiBold,
              color: Colors.GRAY.CONTRAST,
            }}
          />
        </View>
      </View>
      {showEdit ? (
        <Text
          onPress={onPressEdit}
          style={{
            fontFamily: Fonts.SemiBold,
            fontSize: RFValue(12),
            color: Colors.BASEDARK,
          }}>
          Edit
        </Text>
      ) : null}

      {showSubmit ? (
        <Text
          onPress={onPressSubmit}
          style={{
            fontFamily: Fonts.SemiBold,
            fontSize: RFValue(12),
            color: Colors.BASEDARK,
          }}>
          Submit
        </Text>
      ) : null}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({});
