import { BackIcon } from "./svg/BackIcon";
import React from 'react';
import { TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GoBack = () => {
    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
          <TouchableOpacity onPress={handleGoBack}>
            <BackIcon />
          </TouchableOpacity>
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 30,
        left: 30,
    }
})

export default GoBack