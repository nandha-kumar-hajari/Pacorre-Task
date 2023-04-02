import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Fonts from '../../../utils/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from '../../../utils/Colors';

import {ProfileImg, ThinkGreenImg} from '../../../utils/Images';

const Tab = createMaterialTopTabNavigator();

const renderListItem = () => {
  return (
    <View style={styles.renderItemViewStyle}>
      <View style={styles.renderItemimageContainerStyle}>
        <Image
          source={ThinkGreenImg}
          style={{height: RFValue(50), width: RFValue(50)}}
        />
      </View>
      <View style={{paddingHorizontal: RFValue(14)}}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: RFValue(1),
          }}>
          <Image source={ProfileImg} style={styles.renderItemProfileImg} />
          <Text style={styles.profileNameStyle}>Thomas Oppong</Text>
        </View>
        <Text style={styles.titleStyle}>6 Habits to control smoking</Text>
        <Text style={styles.descriptionStyle}>
          Key lifestyle habits that can keep your brain healthy
        </Text>
        <View style={styles.reachViewStyle}>
          <Text style={styles.reachCountStyle}>10.4k</Text>
          <Text style={styles.reachCountStyle}>45 Comments</Text>
        </View>
      </View>
    </View>
  );
};

const TopArticles = () => {
  let data = [1, 2, 3, 4];
  return (
    <View style={{height: RFValue(200), backgroundColor: Colors.WHITE}}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        style={{flex: 1}}
        horizontal={true}
        renderItem={renderListItem}
      />
    </View>
  );
};

const AllArticles = () => {
  let data = [1, 2, 3, 4];
  return (
    <View style={{height: RFValue(200), backgroundColor: Colors.WHITE}}>
      <FlatList
        data={data}
        style={{flex: 1}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderListItem}
      />
    </View>
  );
};

const ArticlesComponent = () => {
  return (
    <View
      style={{height: RFValue(230), flex: 1, backgroundColor: Colors.WHITE}}>
      <Tab.Navigator
      screenOptions={{swipeEnabled:false}}
        tabBarOptions={{
          style: {backgroundColor: 'white', elevation: 0},
        
        }}>
        <Tab.Screen
          options={{
            tabBarPressColor: 'transparent',
            tabBarItemStyle: {
              width: RFValue(110),
              height: RFValue(34),
              elevation: 0,
              padding: 0,
            },
            tabBarIndicatorStyle: {backgroundColor: Colors.BASECOLOR},
            tabBarIndicatorContainerStyle: {
              width: RFValue(90),
            },
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  textAlignVertical: 'bottom',
                  color: focused ? Colors.BLACK : Colors.GRAY,
                  fontFamily: Fonts.Bold,
                  fontSize: focused ? RFValue(15) : RFValue(12),
                  width: RFValue(100),
                }}>
                Top Articles
              </Text>
            ),
          }}
          name="Top Articles"
          component={TopArticles}
        />
        <Tab.Screen
          options={{
            tabBarPressColor: 'transparent',
            tabBarItemStyle: {
              width: RFValue(110),
              height: RFValue(34),
              elevation: 0,
              padding: 0,
            },
            tabBarIndicatorStyle: {backgroundColor: Colors.BASECOLOR},
            tabBarIndicatorContainerStyle: {
              width: RFValue(90),
            },
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? Colors.BLACK : Colors.GRAY,
                  fontFamily: Fonts.Bold,
                  fontSize: focused ? RFValue(15) : RFValue(12),
                  width: RFValue(100),
                  textAlignVertical: 'bottom',
                  alignSelf: 'baseline',
                }}>
                All Articles
              </Text>
            ),
          }}
          name="All Articles"
          component={AllArticles}
        />
      </Tab.Navigator>
    </View>
  );
};

export default ArticlesComponent;

const styles = StyleSheet.create({
  renderItemViewStyle: {
    borderRadius: RFValue(6),
    marginHorizontal: RFValue(4),
    marginVertical: RFValue(5),
    backgroundColor: '#F0F0F0',
  },
  renderItemimageContainerStyle: {
    borderTopLeftRadius: RFValue(10),
    borderTopRightRadius: RFValue(10),
    paddingHorizontal: RFValue(40),
    backgroundColor: '#E6F6F2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: RFValue(20),
  },
  renderItemProfileImg: {
    height: RFValue(15),
    width: RFValue(15),
    borderColor: Colors.BASECOLOR,
    borderWidth: 2,
    borderRadius: 100,
    marginRight: RFValue(3),
  },
  profileNameStyle: {
    fontFamily: Fonts.SemiBold,
    color: Colors.BASECOLOR,
    fontSize: RFValue(12),
  },
  titleStyle: {
    fontFamily: Fonts.SemiBold,
    fontSize: RFValue(12),
    color: Colors.BLACK,
  },
  descriptionStyle: {
    fontFamily: Fonts.Regular,
    fontSize: RFValue(9),
    color: Colors.GRAY.DARK,
    maxWidth: RFValue(150),
  },
  reachViewStyle: {
    flexDirection: 'row',
    width: RFValue(160),
    justifyContent: 'space-between',
    marginTop: RFValue(4),
  },
  reachCountStyle: {
    fontFamily: Fonts.Regular,
    fontSize: RFValue(9),
    color: Colors.GRAY.DARK,
    maxWidth: RFValue(150),
  },
});
