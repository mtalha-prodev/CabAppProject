import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {fontSize, screenSize, themeColor} from '../constant';

const VisaCard = () => {
  return (
    <View style={style.visaCard}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: fontSize.normalTitle,
            fontWeight: fontSize.bold,
            color: themeColor.titleColor,
          }}>
          Add Details
        </Text>
        <Text
          style={{
            fontSize: fontSize.normalTitle,
            fontWeight: fontSize.bold,
            color: themeColor.titleColor,
          }}>
          edit
        </Text>
      </View>
      <LinearGradient
        colors={[
          themeColor.bgColorTwo,
          themeColor.bgColorOne,
          themeColor.bgColor,
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.02, 0.6, 1]}
        style={style.linearColor}>
        <Text
          style={{
            fontSize: 40,
            color: themeColor.bgCard,
            alignSelf: 'flex-end',
          }}>
          Visa
        </Text>
        <View style={{}}>
          <Text style={{fontSize: fontSize.btnTxt, color: themeColor.bgCard}}>
            MEGAN SUSAN
          </Text>
          <Text
            style={{fontSize: fontSize.normalTitle, color: themeColor.bgCard}}>
            5423 7865 7734 2034
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  visaCard: {
    width: screenSize.wrapperWidth,
    alignSelf: 'center',
  },
  linearColor: {
    height: 200,
    marginVertical: 10,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default VisaCard;
