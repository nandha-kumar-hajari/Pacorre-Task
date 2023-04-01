import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SearchIcon, QuitSmoke} from '../../utils/Images';
import Styles from './DashboardStyles';
import PlanCard from './components/PlanCard';
import CountdownComponent from './components/CountdownComponent';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import AchivementsComponent from './components/AchivementsComponent';
import SupplementsComponent from './components/SupplementsComponent';
export default function DashBoardScreen() {
  // const data = useSelector(state => staPte.appData);

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: RFValue(20)}}
        contentContainerStyle={Styles.scrollConatiner}>
        {/* SearchBar */}
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
        <View style={Styles.greetViewStyle}>
          <Text style={Styles.titleStyle}>Hello,</Text>
          <Text style={Styles.nameStyle}>Katheryn</Text>
        </View>

        <PlanCard />
        <CountdownComponent />
        <AchivementsComponent />
        <SupplementsComponent />
      </ScrollView>
    </SafeAreaView>
  );
}