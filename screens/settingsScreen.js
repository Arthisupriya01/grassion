import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, Image , StyleSheet} from 'react-native';
import {Bubble,Composer ,  GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const settingsScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
        
        <Image
                    source={require("../assets/tele.jpg")}
                    style={{ height: 30, width: 30, borderRadius: 10 , marginTop: 30}}
                   />
        </View>
      </Send>
    );
  };
const  renderComposer = props => {
    return (
      <View style={{flexDirection: 'row'}}>
        
        <Composer {...props} />
        <Button>Submit</Button>
      </View>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  return (
    <View style={{flex: 2}}>
      <View style={{backgroundColor: '#E5E5E5', padding: 20 ,width: '100%', alignItems : 'center'}} > 
          <Text style ={{color: 'Black', fontSize : 20}}>Consult </Text>
        </View>
<View style= {{ backgroundColor: 'rgba(196, 196, 196, 0.14)',borderRadius: 10, padding: 20 , width : '10' , alignItems : 'center' , flexDirection : 'row'  }} >
      <
            Image
            source={require("../assets/Mask.jpg")}
            style={{ height: 40, width: 40,alignItems: 'left' }}
           / >
<View style={{paddingLeft : 20}}> 

<Text style ={{color: '#8B8888', fontSize : 15}}>                                                                                                                                            View Profile</Text>    
  <Text style ={{color: '#000000', fontSize : 20}}>ABCD</Text>
  <Text style ={{color: '#8B8888', fontSize : 20}}>fitness Trainer</Text>
  </View>
  {/* <View style={{ alignItems: 'right'}}>         
  <Text>view Profile</Text>
  
  </View>   */}

</View>
    <GiftedChat
      
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      
    />
    
    </View>
    
  );
};

export default settingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});