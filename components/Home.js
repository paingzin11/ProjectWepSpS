import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MuseumListScreen from './TabComponents/TabHomeScreen';
import Settings from './TabComponents/TabSettingsScreen';
import Job from './TabComponents/TabJobScreen';
import Business from './TabComponents/TabBusinessScreen';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    
        <Tab.Navigator
            
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Museum List') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'Settings') {
                  iconName = focused ? 'settings' : 'settings-outline';
                } else if (route.name === 'Job'){
                  iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                } else if (route.name === 'Business'){
                  iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                }

                return <Ionicons name={iconName} size={35.5} color={'#98A8F8'} />;
              },
              
            })}

            tabBarOptions={{
              activeTintColor: '#fff',
              inactiveTintColor: 'lightgray',
              activeBackgroundColor: '#00FFD1',
              inactiveBackgroundColor: '#dcfcfa',
                  style: {
                        //backgroundColor: '#000000',
                        paddingBottom: 3
                  }
           }}
            
        >
          <Tab.Screen name="Museum List" component={MuseumListScreen}  options={{headerShown: false}} />
          <Tab.Screen name="Job" component={Job} options={{headerShown: false}}/>
          <Tab.Screen name="Business" component={Business} options={{headerShown: false}}/>
          <Tab.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
        </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
