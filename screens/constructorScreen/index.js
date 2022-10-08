import {View, FlatList, Text, Button } from 'react-native';
import { indexData } from '../../contractorItem';
import Card from '../../components/card';
import HeaderImage from '../../components/headerImage';
import {styles} from './style'

const ConstructorScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <HeaderImage titleImage={'المقاولات'} titleIndex={'الفهرس'} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={indexData}
          numColumns={2}
          renderItem={({ item }) => <Card img={item.image}>{item.title}</Card>}
          keyExtractor={(item) => item.id}
        />
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>Home!</Text>
          <Button
            title="Go to Settings"
            onPress={() => navigation.navigate('About')}
          />
        </View>
      </View>
    </>
  );
};

export default ConstructorScreen;

