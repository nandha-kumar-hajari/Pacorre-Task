import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from '../../../utils/Colors';
import Fonts from '../../../utils/Fonts';

const CountdownComponent = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-1`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <View style={{marginVertical: RFValue(16)}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.sectionTitleStyle}>Nicotine Consumption</Text>
          <Text style={styles.sectionSubTitleStyle}>Surprise awaiting in</Text>
        </View>

        <View style={styles.rightViewStyle}>
          <Text style={styles.rightTitleStyle}>This Week</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '95%',
          alignSelf: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.counterTile}>
          <Text style={styles.numberStyle}>{timeLeft.days}</Text>
          <Text style={styles.timeLabelStyle}>Days</Text>
        </View>

        <View style={styles.counterTile}>
          <Text style={styles.numberStyle}>{timeLeft.hours}</Text>
          <Text style={styles.timeLabelStyle}>Hours</Text>
        </View>
        <View style={styles.counterTile}>
          <Text style={styles.numberStyle}>{timeLeft.minutes}</Text>
          <Text style={styles.timeLabelStyle}>Minutes</Text>
        </View>
        <View style={styles.counterTile}>
          <Text style={styles.numberStyle}>{timeLeft.seconds}</Text>
          <Text style={styles.timeLabelStyle}>Seconds</Text>
        </View>
      </View>
    </View>
  );
};

export default CountdownComponent;

const styles = StyleSheet.create({
  sectionTitleStyle: {
    fontFamily: Fonts.SemiBold,
    fontSize: RFValue(14),
    color: Colors.BLACK,
  },
  sectionSubTitleStyle: {
    fontFamily: Fonts.Regular,
    fontSize: RFValue(9),
    marginTop: RFValue(2),
    color: Colors.GRAY.DEFAULT,
  },
  rightViewStyle: {
    backgroundColor: '#E9FEEF',
    paddingHorizontal: RFValue(7),
    paddingVertical: RFValue(3),
    alignItems: 'center',
    alignSelf: 'baseline',
    borderRadius: 3,
  },
  rightTitleStyle: {
    fontFamily: Fonts.SemiBold,
    color: '#67D172',
    fontSize: RFValue(11),
  },
  counterTile: {
    marginVertical: RFValue(8),
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.BASECOLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: RFValue(62),
    height: RFValue(60),
    elevation: 4,
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  numberStyle: {
    fontFamily: Fonts.SemiBold,
    color: '#52A768',
    fontSize: RFValue(12),
  },
  timeLabelStyle: {
    fontFamily: Fonts.Regular,
    color: '#52A768',
    fontSize: RFValue(10),
  },
});
