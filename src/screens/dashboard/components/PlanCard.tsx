import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import COLORS from '../../../utils/Colors';
import Fonts from '../../../utils/Fonts';
import {SearchIcon, QuitSmoke} from '../../../utils/Images';

const PlanCard = () => {
  return (
    <View style={styles.outerContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent:"space-between",
        }}>
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.titleStyle}>Your plan for today</Text>

            <Text style={styles.subtitleStyle}>1 of 4 completed</Text>
            <Text style={styles.showMore}>Show More</Text>
          </View>
        </View>
        <Image source={QuitSmoke} style={styles.imgStyle} />
      </View>
    </View>
  );
};

export default PlanCard;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#E6F6F2',
    alignSelf: 'flex-start',
    borderRadius: RFValue(6),
    // marginHorizontal: RFValue(20),
    // width: RFValue(280),

    justifyContent: 'space-between',
    width: '100%',
  },
  innerContainer: {
    flexDirection: 'row',
    marginVertical: RFValue(20),
    paddingHorizontal: RFValue(16),
  },
  titleStyle: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.BLACK,
    fontSize: RFValue(14),
    width: RFValue(70),
  },
  subtitleStyle: {
    fontFamily: Fonts.Regular,
    color: COLORS.GRAY.DARK,
    fontSize: RFValue(8),
    width: RFValue(75),
    marginTop: RFValue(5),
  },
  showMore: {
    fontFamily: Fonts.SemiBold,
    color: '#DC5F48',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    fontSize: RFValue(12),
    width: RFValue(75),
    marginTop: RFValue(10),
  },
  imgStyle: {
    height: RFValue(150),
    marginTop: -RFValue(70),
    width: RFValue(170),
    // backgroundColor:'red',
    // alignSelf: 'flex-end',
  },
});
