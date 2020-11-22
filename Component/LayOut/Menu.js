import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Grid from 'react-native-grid-component';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  StatusBar,
  Animated, 
  Dimensions,
  TouchableOpacity 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../styleSheed/style'
// const windowWidth = Dimensions.get('window').width;


export const TopMenu = (props) =>{
  const navigation = useNavigation();
  return(
      <TouchableOpacity 
       style={styles.card}
       onPress={() => navigation.navigate(props.navigate)} activeOpacity={0.7} >
          <Text style={{textAlign:'center'}}>
              <Icon name={props.icon} size={100} color="#900" />
              {props.title}
          </Text>
      </TouchableOpacity>
  )
};

export  const Gride = () => {
  const navigation = useNavigation();
  const renderItem = (data, i) => (
      <TouchableOpacity
       style={[styles.item]} 
       key={i} onPress={()=> navigation.navigate(data.navigate)} 
       >
      <Icon name={data.icon} size={40} color="#900" style={{textAlign:'center'}} />
      <Text style={{textAlign:'center',fontSize:9}}>
          {data.title}
      </Text>
      </TouchableOpacity>
  );
  return (
    <Grid
      style={styles.list}
      renderItem={renderItem}
      data={[
              {title:'Category',icon:'sitemap',navigate:'Categories'},
              {title:'Product',icon:'inbox',navigate:'Product'},
              {title:'Customer',icon:'users',navigate:'Customer'}, 
              {title:'Transaction',icon:'server',navigate:'Transactions'},
              {title:'Backup',icon:'database',navigate:'Backup'},
              {title:'Profile',icon:'user-circle',navigate:'Profile'},
              {title:'Income',icon:'dollar',navigate:'Income'},
              {title:'Expanse',icon:'expand',navigate:'Expanse'},
              {title:'Report',icon:'file-text',navigate:'Report'} 
          ]}
      numColumns={3}
    />
  )
}

