import React, {useEffect} from 'react';
import {View, Text, TextField, Button} from 'react-native-ui-lib'
import {useAppSelector} from "../../hooks/useAppSelector";
import {useDispatch} from "react-redux";
import {clearScannerData} from "../../store/scannerSlice";
import {StyleSheet, ScrollView, Alert} from "react-native";
import {guidelineBaseHeight, scale} from "../../utils/scale";
import {INavigation} from "../../types/navigationTypes";


export const ScannerForm = ({navigation}: INavigation) => {
    const dispatch = useDispatch()
    const {data} = useAppSelector(state => state.scanner)

    useEffect(() => {
        function clearScreen() {
            dispatch(clearScannerData())
        }

        return () => clearScreen()
    }, [])

    const handleFetch = () => {
        Alert.alert(
            'Как будто отправка данных на сервер',
            `Это отправляем: ${data}`,
            [
                {text: 'OK', onPress: () => navigation.navigate('Home')},
            ],
            {cancelable: false}
        )
    }

    return (
        <ScrollView style={{flex: 1}}>
            {
                data !== ''
                    ? (
                        <>
                            <Text>Здесь как будто получили с сервера декодированный Qr string и отобразили его</Text>
                            <Text> {data} </Text>
                        </>
                    ) :
                    null

            }
            <View paddingH-20 style={{marginVertical: scale(50)}}>
                <TextField
                    migrate
                    label="Price"
                    placeholder="ФН"
                    floatingPlaceholder
                    containerStyle={{flex: 1}}
                    fieldStyle={styles.withUnderline}
                />
                <TextField
                    migrate
                    label="Price"
                    placeholder="ФД"
                    floatingPlaceholder
                    containerStyle={{flex: 1}}
                    fieldStyle={styles.withUnderline}
                />
                <TextField
                    migrate
                    label="Price"
                    placeholder="ФПД"
                    floatingPlaceholder
                    containerStyle={{flex: 1}}
                    fieldStyle={styles.withUnderline}
                />
                <TextField
                    migrate
                    label="Price"
                    placeholder="Дата"
                    floatingPlaceholder
                    containerStyle={{flex: 1}}
                    fieldStyle={styles.withUnderline}
                />
                <TextField
                    migrate
                    label="Price"
                    placeholder="Время"
                    floatingPlaceholder
                    containerStyle={{flex: 1}}
                    fieldStyle={styles.withUnderline}
                />
                <TextField
                    migrate
                    label="Price"
                    placeholder="Сумма"
                    floatingPlaceholder
                    containerStyle={{flex: 1}}
                    fieldStyle={styles.withUnderline}
                />
                <Button
                    marginT-10
                    label="Отправить"
                    onPress={handleFetch}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {},
    withUnderline: {
        borderBottomWidth: 1,
        borderColor: '#cccccc',
        paddingBottom: 4
    },
    withFrame: {
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 4,
        borderRadius: 2
    }
});
