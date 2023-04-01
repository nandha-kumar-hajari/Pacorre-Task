import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import Fonts from '../../../utils/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from '../../../utils/Colors';
import {RightArrow, TabletImg} from '../../../utils/Images';

const SupplementsComponent = () => {
  const [data, setData] = useState([
    {
      title: 'Oxycodone',
      time: '10:00 AM',
      status: 'Completed',
    },
    {
      title: 'Naxolone',
      time: '4:00 PM',
      status: 'Skipped',
    },
    {
      title: 'Oxycodone',
      time: '10:00 AM',
      status: 'Before Eating',
    },
  ]);

  const renderItem = ({item}: object) => {
    return (
      <View style={styles.itemContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image style={styles.iconStyle} source={TabletImg} />
          <View>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemSubtitle}>
              {item.time} ● {item.status}
            </Text>
          </View>
        </View>

        <Image style={styles.itemRightIcon} source={RightArrow} />
      </View>
    );
  };

  return (
    <View style={{marginVertical: RFValue(20)}}>
      <Text style={styles.title}>Supplements</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SupplementsComponent;

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: RFValue(16),
    color: Colors.BLACK,
  },
  rowStyle: {
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: '#F5F7F3',
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: RFValue(5),
    marginTop: RFValue(10),
  },
  iconStyle: {
    height: RFValue(15),
    width: RFValue(15),
    marginRight: RFValue(15),
  },
  itemTitle: {
    fontFamily: Fonts.SemiBold,
    color: Colors.BLACK,
    fontSize: RFValue(14),
  },
  itemSubtitle: {
    fontFamily: Fonts.SemiBold,
    color: '#9B9B9B',
    fontSize: RFValue(13),
  },
  itemRightIcon: {
    height: RFValue(13),
    width: RFValue(15),
  },
});
