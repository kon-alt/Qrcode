import React from 'react';
import {View, Button, Image, Assets} from 'react-native-ui-lib';
import LinearGradient from 'react-native-linear-gradient';
import {INavigation} from '../../types/navigationTypes';
import {StyleSheet} from 'react-native';
import {s} from '../../utils/scale';
import {GRADIENT} from '../../utils/constants';

export const Home = ({navigation}: INavigation) => {

  const handleScanner = () => {
    navigation.navigate('Scanner');
  };
  const handleChooseFromLib = () => {
    navigation.navigate('ChooseFromLib');
  };
  const handleJumpToForm = () => {
    navigation.navigate('ScannerForm');
  };

  /*
  * 90deg, #E4003A -0.01%, #E4003A 2.87%, #E72826 43.3%, #EC6608 99.37%, #EC6608 99.99%
  * */

  return (
      <LinearGradient
          start={GRADIENT.start}
          end={GRADIENT.end}
          locations={GRADIENT.locations}
          colors={GRADIENT.color}

          style={styles.linearGradient}>
        <View flex center>
          <Image source={Assets.icons.logo} width={s(195)} height={s(81)}/>
          <Button
              marginV-10
              label="Сканировать чек"
              onPress={handleScanner}
          />
          <Button
              marginV-10
              label="Выбрать фото чека"
              onPress={handleChooseFromLib}
          />
          <Button
              marginV-10
              label="Ввести данные в ручную"
              onPress={handleJumpToForm}
          />
        </View>
      </LinearGradient>

  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});
