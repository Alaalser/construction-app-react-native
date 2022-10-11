import { Text, View, Image } from 'react-native';
import HeaderImage from '../../components/headerImage';
import { styles } from './style';
const Contact = () => {
  return (
    <View style={styles.container}>
      <HeaderImage titleImage={'تواصل معنا'} />
      <View style={styles.container2}>
        <Image
          source={require('../../assets/Screenshot.png')}
          style={styles.image}
        />
        <Text>تواصل معنا</Text>
      </View>
    </View>
  );
};

export default Contact;
