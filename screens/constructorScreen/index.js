import { View, FlatList, Text, Button, Pressable } from 'react-native';
import { indexData } from '../../contractorItem';
import Card from '../../components/card';
import HeaderImage from '../../components/headerImage';
import { styles } from './style';

const ConstructorScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <HeaderImage titleImage={'المقاولات'} titleIndex={'الفهرس'} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={indexData}
          numColumns={2}
          renderItem={({ item }) => (
            <Card id={item.id} img={item.image}>
              {item.title}
            </Card>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default ConstructorScreen;
