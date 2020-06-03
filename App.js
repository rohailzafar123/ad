import 'react-native-gesture-handler';
import React, {useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text ,Button, TextInput ,AsyncStorage} from 'react-native';
import { Form,Input } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
  const [name, setName] = React.useState('');
  const [name1, setName1] = React.useState('');
  const [total, setTotal] = React.useState('');
  const [empty, setEmpty] = React.useState('');
  
  useEffect(() => {
    AsyncStorage.setItem('name', total);
  })
  adding = () => {
    setTotal(name + name1);
  };
  
  return (
    
    <View > 
    
      <TextInput style={{borderBottomWidth:1}}
      value={name}
      onChangeText={value => setName(value)}
      />
      <TextInput style={{borderBottomWidth:1}}
      value={name1}
      onChangeText={value => setName1(value)}
      // type="text"
      />
      <Text style={{
        fontSize:20,
      }}>
        {name}
      </Text>
      <Text style={{
        fontSize:20,
      }}>
        {name1}
      </Text>
      <Text style={{
        fontSize:20,
      }}>
        {total}
      
      </Text>
    <Button
      title="heeloo"
      onPress={() => this.adding()}
      />
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        // this.storeData() &&
        navigation.navigate('Profile', { name: 'Jane' })
        // || () => 
      }
      />
      </View>
  );
}
 function Profile({ navigation }) {
  
  const [get,setGat] = React.useState('');
  
        useEffect(() => getResult())

        getResult = () => {
          AsyncStorage.getItem('name')
          .then((value) => {
            console.log(value , 'adsd')
            setGat(value)
          })
        }
  return (
    <View style={{ alignItems:'center',
    alignSelf:'center'}}>

    <Text>
    hello
    </Text>
    <Text>
    {get}
    </Text>
      </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}