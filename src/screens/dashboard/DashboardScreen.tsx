import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  SearchIcon,
  QuitSmoke,
  ShareGreen,
  ProfileImg,
} from '../../utils/Images';
import Styles from './DashboardStyles';
import PlanCard from './components/PlanCard';
import CountdownComponent from './components/CountdownComponent';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import AchivementsComponent from './components/AchivementsComponent';
import SupplementsComponent from './components/SupplementsComponent';
import ArticlesComponent from './components/ArticlesComponent';
import RewardsComponent from './components/RewardsComponent';
import {Store} from '../../redux';
import {useIsFocused} from '@react-navigation/native';

export default function DashBoardScreen(props: any) {
  const [name, setName] = useState('');
  const isFocussed = useIsFocused();

  useEffect(() => {
    setName(Store.getState().appData.userName);
  }, [isFocussed]);

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: RFValue(20)}}
        contentContainerStyle={Styles.scrollConatiner}>
        {/* SearchBar */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View style={Styles.searchView}>
            <Image
              source={SearchIcon}
              resizeMode="contain"
              style={Styles.searchIcon}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor={'#9A9A9A'}
              style={Styles.inputStyle}
            />
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Profile')}>
            <Image
              source={ProfileImg}
              style={{height: RFValue(30), width: RFValue(30)}}
            />
          </TouchableOpacity>
        </View>
        <View style={Styles.greetViewStyle}>
          <Text style={Styles.titleStyle}>Hello,</Text>
          <Text style={Styles.nameStyle}>{name ? name : 'User'}</Text>
        </View>

        <PlanCard />
        <CountdownComponent />
        <AchivementsComponent />
        <SupplementsComponent />
        <ArticlesComponent />
        <RewardsComponent />

        <View style={Styles.bottomViewStyle}>
          <Image
            source={ShareGreen}
            style={Styles.shareIconStyle}
          />
          <Text
            style={Styles.shareTextStyle}>
            Share your rewards with your friends in just a click.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
