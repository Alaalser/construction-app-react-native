import { StyleSheet, Text, View,Image } from 'react-native'
import HeaderImage from '../../components/headerImage'
const Contact = () => {
  return (
    <View style={styles.container}>
      <HeaderImage titleImage={'تواصل معنا'} />
      <View style={styles.container2}>
      <Image source={require('../../assets/Screenshot.png')} style={styles.image} />
      <Text >تواصل معنا</Text>
      </View>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    container2: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    image: {
      width: 300,
      height: 300,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  