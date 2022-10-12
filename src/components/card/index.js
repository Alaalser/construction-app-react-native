import { useNavigation } from '@react-navigation/native';
import { Text, Pressable, Image } from 'react-native';
import { styles } from './style';

const Card = ({ children, img,id }) => {

  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigate('Details', {
          itemId: id,
        })
      }
      style={styles.cardContainer}
    >
      <Image source={img} style={styles.image} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Card;
