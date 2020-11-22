import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Grid from 'react-native-grid-component';
import {
    View,
    Text,
    Button,
    TextInput,
    ScrollView,
    StatusBar,
    Animated, 
    Dimensions,
    TouchableOpacity 
} from 'react-native';
const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHight = Dimensions.get('window').height;
import { NavigationContainer ,useNavigation  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Retail,Wholesale,Product,Categories,Customer,Backup,Transactions,Profile,Report,Income,Expanse,DisplayAnImage} from './MainCategories';
import {Gride,TopMenu} from './Menu'
import {styles} from '../styleSheed/style'

function HomeScreen() {
    return (
        <>
            <View >
                <StatusBar backgroundColor='#900'/>
                <View style={styles.header}>
                    <Text style={styles.headerTitleStyle} >STORE DEPO </Text> 
                    <View  style={{position:'absolute'}}>
                        <Text style={{left:windowWidth - 100,top:windowHight - 930}}>
                            <Icon name="user-circle" size={60} color="white"/>
                        </Text>     
                    </View>      
                </View>
                <View style={styles.triangleCorner}/>
            </View>
            <Animated.View style={styles.TopMenu}>
                <TopMenu title='Wholesale' icon='home' navigate='Wholesale' />
                <TopMenu title='Retail' icon='archive' navigate='Retail' /> 
            </Animated.View> 
            <Animated.View style={styles.GrideMenu}>
                <Gride/>    
            </Animated.View>  
        </>
    );
}
const DATA = [
    {
      id: '1',
      title: 'First',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
        id: '4',
        title: 'Third Item',
    },
    {
        id: '5',
        title: 'Third Item',
    },
    {
        id: '6',
        title: 'Third Item',
    },
    {
        id: '7',
        title: 'Third Item',
    },
    {
        id: '8',
        title: 'Third Item',
    },
    {
        id: '9',
        title: 'Third Item',
    },
    {
        id: '10',
        title: 'Third Item',
    },
    {
        id: '11',
        title: 'Third Item',
    },
  ];
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }} >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Wholesale" component={Wholesale}/>
                <Stack.Screen name="Product">
                    {props => (<Product {...props}  data={DATA}/>)} 
                </Stack.Screen>
                <Stack.Screen name="Categories" component={Categories}/>
                <Stack.Screen name="Customer" component={Customer}/>
                <Stack.Screen name="Transactions" component={Transactions}/>
                <Stack.Screen name="Backup" component={Backup}/>
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="Income" component={Income}/>
                <Stack.Screen name="Expanse" component={Expanse}/>
                <Stack.Screen name="Report" component={Report}/>
                <Stack.Screen name="Retail" component={Retail}/>
            </Stack.Navigator>
        </NavigationContainer>       
    );
}
export default App;

