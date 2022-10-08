import { Text, View, Image } from 'react-native';
import {styles} from './style'

const Card = ({ children, img }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={img} style={styles.image} />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Card;
