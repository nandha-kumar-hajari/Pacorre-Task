import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import * as wpActions from '../../redux/actions';
import Toast from 'react-native-toast-message';
import Colors from '../../utils/Colors';
import Icon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';
import Fonts from '../../utils/Fonts';
import TextField from '../../components/TextField';
import {Store} from '../../redux';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProfileScreen = (props: any) => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [editName, setEditName] = useState(false);
  const [showSubmitName, setShowSubmitName] = useState(false);
  const [mobile, setMobile] = useState<string>('');
  const [editMobile, setEditMobile] = useState(false);
  const [showSubmitMobile, setShowSubmitMobile] = useState(false);

  const [email, setEmail] = useState<string>('');
  const [language, setLanguage] = useState<string>('');

  const onPressEditName = () => {
    setEditName(!editName);
    setShowSubmitName(!showSubmitName);
  };

  const submitName = () => {
    dispatch(wpActions.saveUserName(name));
    setEditName(!editName);
    setShowSubmitName(!showSubmitName);
    Toast.show({
      type: 'success',
      text1: 'Name Submitted successfully!',
    });
  };

  const onPressEditMobile = () => {
    setEditMobile(!editMobile);
    setShowSubmitMobile(!showSubmitMobile);
  };

  const submitMobile = () => {
    dispatch(wpActions.saveMobile(mobile));
    setEditMobile(!editMobile);
    setShowSubmitMobile(!showSubmitMobile);
    Toast.show({
      type: 'success',
      text1: 'Mobile Submitted successfully!',
    });
  };

  useEffect(() => {
    setName(Store.getState().appData.userName);
    setMobile(Store.getState().appData.mobile);
    setEmail(Store.getState().appData.email);
    setLanguage(Store.getState().appData.language);
  }, []);

  const renderTile = ({item}: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: RFValue(15),
          paddingHorizontal: RFValue(15),
          borderRadius: 3,
          marginTop: RFValue(10),
          backgroundColor: '#F7F7F7',
        }}>
        <Text
          style={{
            fontFamily: Fonts.SemiBold,
            color: Colors.BLACK,
            fontSize: RFValue(12),
          }}>
          {item}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}
        style={styles.container}>
        <View style={styles.headerView}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{
                marginRight: 10,
              }}>
              <Icon
                name="chevron-left"
                style={{}}
                size={RFValue(26)}
                color={Colors.BLACK}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Personal Information</Text>
          </View>
          <EntypoIcon
            name="dots-three-vertical"
            style={{marginRight: 10}}
            size={RFValue(18)}
            color={Colors.BLACK}
          />
        </View>

        <View style={styles.iconView}>
          <Text style={styles.iconInitial}>K</Text>
          <View style={styles.iconEdit}>
            <EntypoIcon name="edit" size={RFValue(18)} color={Colors.WHITE} />
          </View>
        </View>

        <TextField
          iconName="user"
          label="User name"
          value={name}
          showEdit={!showSubmitName}
          isEditable={editName}
          showSubmit={showSubmitName}
          onChangeText={(text: string) => setName(text)}
          onPressSubmit={submitName}
          onPressEdit={onPressEditName}
          maxLength={12}
        />
        <TextField
          iconName="phone"
          label="Mobile"
          value={mobile}
          showEdit={!showSubmitMobile}
          keyboardType="number-pad"
          isEditable={editMobile}
          showSubmit={showSubmitMobile}
          onChangeText={(text: string) => setMobile(text)}
          onPressSubmit={submitMobile}
          onPressEdit={onPressEditMobile}
          maxLength={12}
        />
        <TextField
          iconName="mail"
          label="Email"
          value={email}
          isEditable={false}
        />

        <TextField
          iconName="dribbble"
          value={language}
          label="Language"
          isEditable={false}
        />

        <FlatList
          data={[
            'Help and Feedback',
            'Notifications',
            'Settings',
            'Privacy and Security',
          ]}
          style={{width: '90%'}}
          renderItem={renderTile}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(5),
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: Fonts.SemiBold,
    color: Colors.BLACK,
    fontSize: RFValue(16),
  },
  iconView: {
    width: RFValue(100),
    height: RFValue(100),
    backgroundColor: '#62CE6B',
    borderRadius: 100,
    marginVertical: RFValue(15),
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  iconInitial: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: RFValue(50),
    color: Colors.WHITE,
    fontFamily: Fonts.Regular,
    fontSize: RFValue(45),
  },
  iconEdit: {
    backgroundColor: Colors.BASEDARK,
    height: RFValue(30),
    width: RFValue(30),
    borderRadius: 100,
    borderColor: Colors.WHITE,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
