import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import * as wpActions from '../redux/actions';
import Toast from 'react-native-toast-message';
const ProfileScreen = (props: any) => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const onPressSubmit = () => {
    dispatch(wpActions.saveUserName(name));
    dispatch(wpActions.saveMobile(mobile));
    dispatch(wpActions.saveEmail(email));
    dispatch(wpActions.saveAddress(address));
    Toast.show({
      type: 'success',
      text1: 'Profile Submitted successfully!',
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="User Name"
      />

      <TextInput
        style={styles.textInputStyle}
        placeholder="Mobile"
        value={mobile}
        keyboardType="number-pad"
        maxLength={10}
        onChangeText={text => setMobile(text)}
      />
      <TextInput
        style={styles.textInputStyle}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Email ID"
      />
      <TextInput
        style={styles.textInputStyle}
        value={address}
        multiline={true}
        numberOfLines={3}
        onChangeText={text => setAddress(text)}
        placeholder="Address"
      />

      <TouchableOpacity onPress={onPressSubmit} style={styles.buttonStyle}>
        <Text style={{color: '#fff', fontSize: 14}}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Dashboard')}
        style={{...styles.buttonStyle, backgroundColor: '#93A6E4'}}>
        <Text style={{color: '#fff', fontSize: 14}}>Go To Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    width: '90%',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginTop: 10,
  },
  buttonStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#62AE41',
    borderRadius: 8,
    marginTop: 20,
  },
});
