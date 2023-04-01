import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Fonts from '../../../utils/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from '../../../utils/Colors';
import {VictoryBar, VictoryChart} from 'victory-native';
import ProgressCircle from 'react-native-progress-circle';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const AchivementsComponent = () => {
  const data = [
    {['Weekly Data']: 'Past week', earnings: 10},
    {['Weekly Data']: 'This week', earnings: 5},
  ];
  const [fill, setFill] = useState(57);

  return (
    <View>
      <Text style={styles.title}>Achievements</Text>
      <View style={styles.rowStyle}>
        <VictoryChart width={210} style={{}} height={180} domainPadding={14}>
          <VictoryBar
            data={data}
            // domain={{x: [2.5, 2.5], y: [0, 10]}}
            alignment="middle"
            padding={{top: 20, bottom: 60, left: -30}}
            x="Weekly Data"
            y="earnings"
            animate={true}
            barWidth={27}
            style={{
              labels: {
                font: Fonts.Bold,
              },
              data: {fill: Colors.BASECOLOR, fontFamily: Fonts.Regular},
            }}
          />
        </VictoryChart>
        <AnimatedCircularProgress
          size={RFValue(110)}
          width={13}
          fill={fill}
          tintColor={Colors.BASECOLOR}
          backgroundColor="#3d5875">
          {fill => (
            <Text style={styles.fillText}>
              {fill}%{'\n'}
              success
            </Text>
          )}
        </AnimatedCircularProgress>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '95%',
          alignSelf: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.counterTile}>
          <Text style={styles.numberStyle}>240 Rs.</Text>
          <Text style={styles.LabelStyle}>Saved</Text>
        </View>

        <View style={styles.counterTile}>
          <Text style={styles.numberStyle}>17 mins</Text>
          <Text style={styles.LabelStyle}>Hours</Text>
        </View>
        <View style={styles.counterTile}>
          <Text style={styles.numberStyle}>2%</Text>
          <Text style={styles.LabelStyle}>Heart Improved</Text>
        </View>
        <View style={styles.counterTile}>
          <Text style={styles.numberStyle}>2 Mt</Text>
          <Text style={styles.LabelStyle}>CO2 Reduced</Text>
        </View>
      </View>
    </View>
  );
};

export default AchivementsComponent;

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: RFValue(14),
    color: Colors.BLACK,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fillText: {
    fontFamily: Fonts.SemiBold,
    color: Colors.BASEDARK,
    fontSize: RFValue(12),
    textAlign: 'center',
  },

  counterTile: {
    marginVertical: RFValue(8),
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.BASECOLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    width: RFValue(72),
    height: RFValue(45),
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
  LabelStyle: {
    fontFamily: Fonts.Regular,
    color: '#52A768',
    fontSize: RFValue(8),
  },
});
