import React, { Component } from 'react';  
import { StyleSheet,View , Image, Text} from 'react-native';  
  
export default function exploreScreen() {  
    
        return (  
            <View style={styles.containe}>  
              <Image
                    source={require("../assets/arrow.jpg")}
                    style={{ height: 20, width: 20, borderRadius: 10 , marginTop: 30 , left : 0}}
                   />
            <View style={styles.container}>  
           
                  <Image
                    source={require("../assets/explore.jpg")}
                    style={{ height: 400, width: 400, borderRadius: 10 , marginTop: 30}}
                   />
                    <Text style={{ height: 20, width: 300, borderRadius: 10 ,color: "red",fontStyle: "center", marginTop: 40}}>
                        This feature is currently not operational due to surge of COVID-19 cases</Text>
            </View>  
            </View>
        );  
    }  

const styles = StyleSheet.create({  
    containe:{  
        flex: 1,  
      // set elements horizontally, try column. 
        alignItems:'left',
        // justifyContent: 'center', 
    },  
    container:{  
        flex: 1,  
      // set elements horizontally, try column. 
        alignItems:'center',
        // justifyContent: 'center', 
    },  
    
})