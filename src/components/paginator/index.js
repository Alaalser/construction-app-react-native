import { View, Animated, useWindowDimensions } from 'react-native';
import { styles } from './style';

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.dot1}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: ['#ccc', '#493d8a', '#ccc'],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[styles.dot, { backgroundColor: dotWidth }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
