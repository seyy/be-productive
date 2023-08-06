import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import SlideItem from './SlideItem';
import { theme } from '../../constants/theme';
import { tasks } from '../../assets/mocks';

const Home = () => {
  const renderItem = ({ item }) => <SlideItem item={item} />;

  return (
    <View style={styles.taskContainer}>
      <Carousel
        data={tasks}
        renderItem={renderItem}
        sliderWidth={242}
        sliderHeight={242}
        itemWidth={212}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskContainer: {
    backgroundColor: 'black',
    marginTop: 104,
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
});

export default Home;
