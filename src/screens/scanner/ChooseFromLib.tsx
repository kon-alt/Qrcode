import React, {useState, useEffect} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {View, Button, Image} from 'react-native-ui-lib'
import {ScrollView, SafeAreaView, StatusBar, Alert} from 'react-native'
import {
    Asset,
    ImageLibraryOptions, ImagePickerResponse,
} from "../../types/imageLibraryTypes";
import {guidelineBaseHeight} from "../../utils/scale";
import {INavigation} from "../../types/navigationTypes";


const options: ImageLibraryOptions = {
    mediaType: 'photo'
}

export const ChooseFromLib = ({navigation}: INavigation) => {
    const [resourcePath, setResourcePath] = useState<Asset>()
    const [chooseImages, setChooseImages] = useState<boolean>(false)
    useEffect(() => {
        !resourcePath &&
        launchImageLibrary(options, (res: ImagePickerResponse) => {
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.errorCode) {
                console.log('ImagePicker Error: ', res.errorCode);
            } else {
                let asset = res?.assets?.length ? res.assets[0] : {}
                setResourcePath(asset);
            }
        });
    }, [chooseImages])


    const sendFile = () => {
        Alert.alert(
            'Как будто отправка фото на сервер',
            'Нажмите OK и будете перенаправлены на главную',
            [
                {text: 'OK', onPress: () => navigation.navigate('Home')},
            ],
            {cancelable: false}
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        }}>
            <ScrollView style={{
                marginHorizontal: 10,
            }}>
                <View style={{
                    justifyContent: 'flex-end',
                    minHeight: guidelineBaseHeight - 100,
                    flex: 1
                }}>
                    {resourcePath ? (
                        <>
                            <Image
                                style={{
                                    flex: 1,
                                    aspectRatio: 0.7,
                                    resizeMode: 'contain'
                                }}
                                source={{uri: resourcePath.uri}}/>
                            <Button
                                marginT-10
                                label="Отправить"
                                onPress={sendFile}
                            />
                        </>
                    ) : (
                        <Button
                            label="Выбрать из галереи"
                            onPress={() => setChooseImages(!chooseImages)}
                        />
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
