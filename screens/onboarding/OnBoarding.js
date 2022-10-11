import { Animated, View, FlatList, Pressable } from 'react-native';
import slides from '../../slides';
import OnBoardingItem from '../../components/OnBoardingItem';
import Paginator from '../../components/Paginator';
import { useRef, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style';

const OnBoarding = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  console.log(currentIndex);

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const onNavigate = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled
          data={slides}
          renderItem={({ item }) => (
            <>
              <OnBoardingItem item={item} />
            </>
          )}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          ref={slidesRef}
          viewConfig={viewConfig}
          onViewableItemsChanged={viewableItemsChanged}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />
      {currentIndex == 1 ? (
        <Pressable onPress={onNavigate} style={styles.arrow}>
          <AntDesign name="arrowright" size={24} color="white" />
        </Pressable>
      ) : null}
    </View>
  );
};

export default OnBoarding;
