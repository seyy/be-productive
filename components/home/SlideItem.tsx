import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { theme } from '../../constants/theme';
import OptionsButton from '../OptionsButton';
import TaskModal from '../modals/taskModal';

const SlideItem = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.pink }]}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.textDescription}>{item.description}</Text>
      
      <OptionsButton onPress={() => setModalVisible(true)} />

      <TaskModal 
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        task={item}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    borderRadius: 33,
    height: 242,
    width: 212,
    justifyContent: 'center',
    alignItems:'center',
  },
  text: {
    color: theme.colors.black,
    fontStyle: 'italic',
    fontSize: 17,
    fontWeight: '700',
    marginTop: 20,
    position: 'absolute',
    top: 0,
    left: 15, 
  },
  textDescription: {
    color: theme.colors.darkgrey,
    fontSize: 13,
    fontWeight: '700',
    position: 'absolute',
    fontStyle: 'italic',
    top: 55,
    left: 15,
  }
});

export default SlideItem;
