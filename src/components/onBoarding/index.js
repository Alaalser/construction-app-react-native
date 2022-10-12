import { View, Image, useWindowDimensions } from 'react-native';
import { styles } from './style';

const OnBoardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width, resizeMode: 'contain' }]}
      />
    </View>
  );
};

export default OnBoardingItem;
