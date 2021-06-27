import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Linking , Image,} from 'react-native';

export default function App(){

const [people, setPeople]= useState
([
  { message: 'lorem ipsum dolor sir amet, consectetur adipiscing elit,sed do elusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod', heading: 'Upcoming session', key: '1', status: 'new'},
  { message: 'lorem ipsum dolor sir amet, consectetur adipiscing elit,sed do elusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod', heading: 'Completed Session', key: '2', status: 'old'},
  { message: 'lorem ipsum dolor sir amet, consectetur adipiscing elit,sed do elusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod', heading: 'Trainer Online', key: '3', status: 'new'},
  { message: 'lorem ipsum dolor sir amet, consectetur adipiscing elit,sed do elusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod', heading: 'Water Reminder', key: '4', status: 'new'},
  
]);

return (
    
  <View style = {styles.container}>
      <Image
                    source={require("../assets/arrow.jpg")}
                    style={{ height: 20, width: 20, borderRadius: 10 , marginTop: 5}}
                   />
    <View style={{alignItems: 'center', width: '100%', padding: 1}}>
    
        
    <Text style={{fontSize:25,justifyContent:'center'}}>Notifications</Text>
    </View>
    <FlatList
    style={{paddingTop : 4}}
    keyExtractor = {(item) => item.key}
    data = {people}
    renderItem = {({item}) => (
      <View style={{width : '100%' , padding : 30}} >
        
      <View style={{flex : 1,backgroundColor: item.status==='new'?'gainsboro':'ghostwhite', borderRadius: 10, marginTop: -25, borderBottomEndRadius: 10}}>
        {item.status==='new'?(<View style={{borderRadius: 15, backgroundColor: '#25AAE1',position: 'absolute',width: '32px',height: '32px',right: '-10px',top: '-13px'}}>
        <Text style={{color: 'white', paddingTop : 4 , paddingLeft : 2}}>New</Text>
      </View>) : (<View></View>)
        }
      
        <Text style={{fontSize: 22, paddingLeft: 10,paddingTop : 10, color: item.status==='new'?'black':'lightgrey'}}>{item.heading}</Text>
        
       <Text style = {{
         marginTop: 5,
         padding: 5,
         fontSize: 18,
         color: item.status==='new'?'black':'lightgrey'
      }}
      > {item.message} </Text>
      </View>
      </View>
      )}
  />
    
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    // paddingHorizontal: 10,
    
  },
  
});