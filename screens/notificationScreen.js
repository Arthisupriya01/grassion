import React, { Component } from 'react';  
import { StyleSheet,View } from 'react-native';  
  
export default function notificationScreen() {  
    
        return (  
            <View style={styles.container}>  
                <View style={styles.powderblue} />  
                <View style={styles.skyblue} />  
                <View style={styles.steelblue} />  
            </View>  
        );  
    }  

const styles = StyleSheet.create({  
    container:{  
        flex: 1,  
        flexDirection: 'row',// set elements horizontally, try column. 
        alignItems:'center',
        justifyContent: 'center', 
    },  
    powderblue:{  
        width: 60,  
        height: 60,  
        backgroundColor: 'powderblue',  
    },  
    skyblue:{  
        width: 60,  
        height: 60,  
        backgroundColor: 'skyblue',  
    },  
    steelblue:{  
        width: 60,  
        height: 60,  
        backgroundColor: 'steelblue',  
    }  
})