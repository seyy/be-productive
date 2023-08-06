import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
import { theme } from '../constants/theme';

interface OptionsButtonProps {
    onPress : () => void;
}

const OptionsButton: React.FC<OptionsButtonProps> = ({ onPress }) => {
  return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <SimpleLineIcons name="options-vertical" size={18} color={theme.colors.darkgrey} />
        </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 23,
        right: 15,
    }
})

export default OptionsButton