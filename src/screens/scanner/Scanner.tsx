import React from 'react';
import {StyleSheet, Alert} from 'react-native'
import {View, TouchableOpacity, Text} from 'react-native-ui-lib'
import {useDispatch} from 'react-redux'

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {setScannerData} from "../../store/scannerSlice";
import {INavigation} from "../../types/navigationTypes";

/*
* t=20220105T1640
* &
* s=1312.10
* &
* fn=9280440301062965
* &
* i=58000
* &
* fp=542152255&n=1
* */

export const Scanner = ({navigation}: INavigation) => {
    const dispatch = useDispatch()


    const onSuccess = (e: any): void => {
        console.log('@@@ ', e.type)
        const validType = e.type === 'QR_CODE'
        if (validType) {
            const data = e.data
            const onSendData = () => {
                dispatch(setScannerData(data))
                navigation.navigate('ScannerForm')
            }

            Alert.alert(
                'Как будто отправка данных на сервер',
                `Это отправляем: ${data}`,
                [
                    {text: 'OK', onPress: () => onSendData()},
                ],
                {cancelable: false}
            )
        } else {
            Alert.alert(
                'Только QR code',
                `Можно сканировать только QR code`,
                [
                    {text: 'OK', onPress: () => navigation.navigate('Home')},
                ],
                {cancelable: false}
            )
        }
    };

    return (
        <View flex>
            <QRCodeScanner
                onRead={(e) => onSuccess(e)}
                cameraProps={{flashMode: RNCamera.Constants.FlashMode.auto}}
                cameraTimeoutView={<Text>Не активна 10 сек</Text>}
                topContent={
                    <Text style={styles.centerText}>
                        Наведите камеру на QR code
                    </Text>
                }
                bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable}>
                        <Text style={styles.buttonText}>Str:</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});
