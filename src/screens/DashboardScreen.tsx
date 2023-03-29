import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

export default function DashBoardScreen() {
  const data = useSelector(state => state.appData);
  return (
    <View style={styles.container}>
      <View style={styles.rowStyle}>
        <Text style={styles.labelStyle}>Name</Text>
        <Text style={{...styles.labelStyle, width: 30}}>:</Text>
        <Text style={styles.valueStyle}>
          {data.userName ? data.userName : ''}
        </Text>
      </View>
      <View style={styles.rowStyle}>
        <Text style={styles.labelStyle}>Email</Text>
        <Text style={{...styles.labelStyle, width: 30}}>:</Text>
        <Text style={styles.valueStyle}>{data.email ? data.email : ''}</Text>
      </View>

      <View style={styles.rowStyle}>
        <Text style={styles.labelStyle}>Mobile</Text>
        <Text style={{...styles.labelStyle, width: 30}}>:</Text>
        <Text style={styles.valueStyle}>{data.mobile ? data.mobile : ''}</Text>
      </View>

      <View style={styles.rowStyle}>
        <Text style={styles.labelStyle}>Address</Text>
        <Text style={{...styles.labelStyle, width: 30}}>:</Text>
        <Text style={styles.valueStyle}>
          {data.address ? data.address : ''}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowStyle: {flexDirection: 'row', marginTop: 14},
  labelStyle: {
    fontSize: 17,
    color: '#24272D',
    fontWeight: '600',
    width: 100,
  },
  valueStyle: {
    fontSize: 17,
    color: '#24272D',
    fontWeight: '600',
    width: 160,
  },
});
