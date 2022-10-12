import { Text, View, Image } from 'react-native';
import { styles } from './style';

const About = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/group_3492.png')} style />
      <Text style={styles.title}> من نحن </Text>
      <Text style={styles.description}>
        {' '}
        نقوم بتنفيذ جميع مقاولات واعمال البناء بجميع المراحل بداية من اعمال
        الحفر للأساسات مرورا بجميع المراحل وحتى اعمال تركيب الكهرباء والسباكة
        والنجارة واعمال السيراميك والرخام والواجهات والدهانات.
      </Text>
      <Text style={styles.description}>
        {' '}
        نقدم مجموعة كبيرة ومتميزة من الافكار والتصميمات لتشطيب العقارات والوحدات
        السكنية والشركات والهيئات والمؤسسات الحكومية وغيرها من الوحدات وتركيب
        كافة الخدمات واعمال التشطيبات الكاملة.
      </Text>
      <Text style={styles.description}>
        نقدم كافة الخدمات الخاصة بتصميم الديكورات وفق احدث الاساليب المتطورة
        والاشكال العصرية
      </Text>
    </View>
  );
};

export default About;
