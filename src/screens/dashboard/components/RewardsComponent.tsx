import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Fonts from '../../../utils/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from '../../../utils/Colors';
import {GreenBG} from '../../../utils/Images';

const RewardsComponent = () => {
  return (
    <View style={{marginVertical: RFValue(10)}}>
      <Text style={styles.title}>Rewards</Text>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={() => {
          return <Image source={GreenBG} style={styles.imgStyle} />;
        }}
      />
    </View>
  );
};

export default RewardsComponent;

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: RFValue(16),
    color: Colors.BLACK,
  },
  imgStyle: {
    height: RFValue(100),
    width: RFValue(100),
    borderRadius: 6,
    marginRight: RFValue(6),
  },
});
