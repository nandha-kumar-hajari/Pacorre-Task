import {ViewStyle, StyleSheet, ImageStyle, TextStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

interface Styles {
  container: ViewStyle;
  scrollConatiner: ViewStyle;
  searchView: ViewStyle;
  searchIcon: ImageStyle;
  inputStyle: ViewStyle;
  greetViewStyle: ViewStyle;
  titleStyle: TextStyle;
  nameStyle: TextStyle;
  bottomViewStyle: ViewStyle;
  shareIconStyle: ImageStyle;
  shareTextStyle: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {flex: 1, backgroundColor: Colors.WHITE},
  scrollConatiner: {
    // alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  searchView: {
    paddingHorizontal: RFValue(14),
    paddingVertical: RFValue(8),
    backgroundColor: '#F8F8F6',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: RFValue(12),
    borderRadius: RFValue(6),
  },
  searchIcon: {
    height: RFValue(21),
    width: RFValue(21),
    marginRight: RFValue(6),
  },
  inputStyle: {
    alignItems: 'center',
    fontFamily: Fonts.SemiBold,
    fontSize: RFValue(15),
    width: '75%',
    marginBottom: -4,
  },
  greetViewStyle: {
    alignSelf: 'flex-start',
    marginVertical: RFValue(15),
  },
  titleStyle: {
    fontFamily: Fonts.Bold,
    color: Colors.BLACK,
    fontSize: RFValue(20),
  },
  nameStyle: {
    fontFamily: Fonts.Regular,
    color: Colors.BLACK,
    fontSize: RFValue(20),
  },
  bottomViewStyle: {
    paddingVertical: RFValue(12),
    width: '98%',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: RFValue(14),
    backgroundColor: '#E6F6F2',
  },
  shareIconStyle: {
    height: RFValue(15),
    width: RFValue(15),
    marginRight: RFValue(5),
  },
  shareTextStyle: {
    fontFamily: Fonts.SemiBold,
    color: Colors.BLACK,
    fontSize: RFValue(10),
    width: '97%',
  },
});
