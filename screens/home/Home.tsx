import React from 'react';
import {View, Button} from 'react-native-ui-lib'
import {INavigation} from "../../types/navigationTypes";

export const Home = ({navigation}: INavigation) => {

    const handleScanner = () => {
        navigation.navigate('Scanner')
    }
    const handleChooseFromLib = () => {
        navigation.navigate('ChooseFromLib')
    }
    const handleJumpToForm = () => {
        navigation.navigate('ScannerForm')
    }

    return (
        <View flex center>
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
    );
};
