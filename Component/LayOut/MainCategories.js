import React ,{Component,useState } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    ScrollView,
    StatusBar,
    Animated, 
    Dimensions,
    TouchableOpacity,
    SafeAreaView ,
    FlatList,
    Image,
    Easing,
    PermissionsAndroid
} from 'react-native';

import Contacts from 'react-native-contacts';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Neomorph,Shadow } from 'react-native-neomorph-shadows';
import {styles} from '../styleSheed/style'
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
   export const  Wholesale = ({navigation}) =>{
        return(
            <View>
            <SafeAreaView>
            <StatusBar backgroundColor='#900'/>
                <View style={styles.productHeader}>
                    <View style={styles.productHeaderChild}>
                        <Icon name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>
                    </View>
                </View>
            </SafeAreaView>
        </View>
        )
    }
    
    export const Retail = ({navigation}) =>{
        return(
            <View>
                <SafeAreaView>
                <StatusBar backgroundColor='#900'/>
                    <View style={styles.productHeader}>
                        <View style={styles.productHeaderChild}>
                            <Icon name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        )
    }

    export const Categories = ({navigation}) =>{ 

        const [contact,setContact] = useState([])
       
        return(
            <View>
                <SafeAreaView>
                <StatusBar backgroundColor='#900'/>
                    <View style={styles.productHeader}>
                        <View style={styles.productHeaderChild}>
                            <Icon name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        )
    }

    export const Product = (props) =>{
        const {
            navigation,
            data
        } = props;
        const renderItem  = ({ item }) => (
            <View style={styles.flatItem}>
                <View>
                    <Image source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}}  
                    style={{width:160, height:'100%',borderRadius:3}} />
                </View>
                <View style={{padding:10}}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </View>
          );
          const flatCarousel  = ({ item }) => (
            <TouchableOpacity activeOpacity={0.8} style={{ position:'relative',height:230,margin:3,borderStyle:'solid', borderWidth: 1, borderRadius: 9,borderColor: 'pink',}}>
                <View style={{height:100}} >
                    <Image source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}}  
                    style={styles.featureProductImage} />
                </View>
                <View style={{padding:4,position:'absolute'}}>
                    <View style={{top:108,color:'#000',left:11}}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    
                    <View style={{top:153,left:11,width:129}}>
                        <Button  title='Buy' />
                    </View>
                </View>
            </TouchableOpacity>
        );  
        return(
            <View style={{backgroundColor:'#f2e9e9',overflow:'hidden'}}>
            <StatusBar backgroundColor='#900'/>
                <SafeAreaView >
                    <View style={styles.productHeader}>
                        <View style={styles.productHeaderChild}>
                            <Icon name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>
                        </View>
                    </View>
                    <ScrollView >
                    <View style={styles.featureProduct}>
                        <Text style={{fontSize:18,paddingHorizontal:9,color:'#000',paddingVertical:9}} >Product Feature</Text>
                        <Animated.FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={styles.flatList}
                            data={data}
                            renderItem={flatCarousel}  
                            keyExtractor={item => item.id}
                       /> 
                    </View>
                    <View>
                    <Text style={{fontSize:18,paddingHorizontal:9,color:'#000',paddingVertical:9}} >Latest Product</Text>
                        <FlatList
                            style={styles.flatList}
                            data={data}
                            renderItem={renderItem}  
                            keyExtractor={item => item.id}
                       /> 
                    </View>
                    </ScrollView>  
                </SafeAreaView>
            </View>
        )
    }
    
  
    export  class DisplayAnImage extends Component {  
        constructor () {  
            super()  
            this.spinValue = new Animated.Value(0)//declare spinValue as a new Animated.Value and pass 0 (zero) in it.  
        }  
        componentDidMount () {  
            this.spin()  
        }  
        //create a spin method and call it from componentDidMount  
        spin () {  
            this.spinValue.setValue(0) //set spinValue to 0 (zero)  
            Animated.spring(    //calling Animated.timing() method, it takes two arguments:  
                this.spinValue, // value  
                {           // and config object  
                    toValue: 1, //and setting spinValue to 1  
                    duration: 1000, //within 4000 milliseconds  
                    easing: Easing.linear  
                }  
            ).start(() => this.spin())  
        }  
        render () {  
            const spin = this.spinValue.interpolate({  
                inputRange: [0, 5],  
                outputRange: ['0deg', '380deg']  
            })  
            return (  
                <View style={styles.container}>  
                    <Animated.Image  
                        style={{  
                            width: 227,  
                            height: 200,  
                            transform: [{rotate : spin}] }}  
                            source={{uri:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'}}   
                    />  
                </View>  
            )  
        }  
    } 


    export const Customer = ({navigation}) =>{
        return(
            <View>
                <SafeAreaView>
                    <StatusBar backgroundColor='#900'/>
                    <View style={styles.productHeader}>
                        <View style={styles.productHeaderChild}>
                            <Icon name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>
                        </View>
                    </View>
                    
                </SafeAreaView>
            </View>
        )
    }
    export const Transactions = ({navigation}) =>{
        return(
        <View>
            <SafeAreaView>
            <StatusBar backgroundColor='#900'/>
                <View style={styles.productHeader}>
                    <View style={styles.productHeaderChild}>
                        <Icon name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>

                    </View>
                    
                </View>
            </SafeAreaView>
        </View>
        )
    }
    export const Backup = ({navigation}) =>{
        return(
            <View>
                <SafeAreaView>
                <StatusBar backgroundColor='#900'/>
                    <View style={styles.productHeader}>
                        <View style={styles.productHeaderChild}>
                            <Icon name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
    export const Profile = ({navigation}) =>{
        return(
            <View>
                <SafeAreaView>
                <StatusBar backgroundColor='#900'/>
                    <View style={styles.productHeader}>
                        <View style={styles.productHeaderChild}>
                            <Icon name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
    export const Income = ({navigation}) =>{
        return(
            <View>
            <SafeAreaView>
            <StatusBar backgroundColor='#900'/>
                <View style={styles.productHeader}>
                    <View style={styles.productHeaderChild}>
                        <Icon name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>
                    </View>
                </View>
            </SafeAreaView>
        </View>
        )
    }
    export const Expanse = ({navigation}) =>{
        return(
            <View>
                <SafeAreaView>
                <StatusBar backgroundColor='#900'/>
                    <View style={styles.productHeader}>
                        <View style={styles.productHeaderChild}>
                            <Icon name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
    export const Report = ({navigation}) =>{
        return(
            <View>
                <SafeAreaView>
                <StatusBar backgroundColor='#900'/>
                    <View style={styles.productHeader}>
                        <View style={styles.productHeaderChild}>
                            <Icon name="arrow-left" size={30} color="white" onPress={() => navigation.goBack()}/>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        )
    }



