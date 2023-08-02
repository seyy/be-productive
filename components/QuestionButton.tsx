import React from 'react';
import { TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../constants/theme';
import { RootStackParamList } from '../navigator/RootNavigator';

const QuestionButton = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Help')}>
            <Feather name="help-circle" size={47} color={theme.colors.grey} />
          </TouchableOpacity>
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 10,
        right: 11
    }
})

export default QuestionButton