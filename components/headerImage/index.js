import { ImageBackground, Text, View } from 'react-native';
import { styles } from './style';

const HeaderImage = ({ titleImage, titleIndex }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/image.png')}
      >
        <Text style={styles.text}>{titleImage}</Text>
      </ImageBackground>
      <Text style={styles.index}>{titleIndex}</Text>
    </View>
  );
};

export default HeaderImage;
