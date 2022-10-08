import About from './screens/about';
import Contact from './screens/contact';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConstructorScreen from './screens/constructorScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="الرئيسية"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'الرئيسية') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'تواصل معنا') {
            iconName = focused
              ? 'information-circle-sharp'
              : 'information-circle-outline';
          } else if (route.name === 'من نحن') {
            iconName = focused ? 'megaphone' : 'megaphone-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="من نحن" component={About} />
      <Tab.Screen name="الرئيسية" component={ConstructorScreen} />
      <Tab.Screen name="تواصل معنا" component={Contact} />
    </Tab.Navigator>
  );
}
