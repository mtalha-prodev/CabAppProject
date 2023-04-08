import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {fontSize, screenSize, themeColor} from '../constant';

const Privacy = () => {
  return (
    <View style={style.container}>
      <ScrollView style={{flex: 1}}>
        <Text style={style.title}>Terms And Conditions</Text>
        <Text style={style.text}>
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order to provide placeholder text to mockup
          various fonts for a type specimen book
        </Text>
        <Text style={style.text}>
          It's difficult to find examples of lorem ipsum in use before Letraset
          made it popular as a dummy text in the 1960s, although McClintock says
          he remembers coming across the lorem ipsum passage in a book of old
          metal type samples. So far he hasn't relocated where he once saw the
          passage, but the popularity of Cicero in the 15th century supports the
          theory that the filler text has been used for centuries.
        </Text>
        <Text style={style.text}>
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order to provide placeholder text to mockup
          various fonts for a type specimen book
        </Text>
        <Text style={style.text}>
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order to provide placeholder text to mockup
          various fonts for a type specimen book
        </Text>
        <Text style={style.text}>
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero's De Finibus in order to provide placeholder text to mockup
          various fonts for a type specimen book
        </Text>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: screenSize.wrapperWidth,
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    color: themeColor.titleColor,
    fontSize: fontSize.normalTitle,
    marginVertical: screenSize.titleTopMargin,
  },
  text: {
    color: themeColor.txtColor,
    fontSize: fontSize.txt,
    textAlign: 'justify',
  },
});

export default Privacy;
