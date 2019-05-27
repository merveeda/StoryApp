import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView ,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button
} from 'react-native';


export default class ChatScreen extends React.Component {
    static navigationOptions = {
        header : null,
        drawerLabel: () => null
    };
    
    constructor(props) {
      super(props);
      this.state = {
        data: [
          {id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet"},
          {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
          {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
          {id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
          {id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
          {id:6, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
          {id:7, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
          {id:8, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
          {id:9, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
        ]
      };
    }
  
    renderDate = (date) => {
      return(
        <Text style={styles.time}>
          {date}
        </Text>
      );
    }
    render() {

      return (
        <KeyboardAvoidingView style={styles.container}  behavior="padding">
          <FlatList style={styles.list}
            data={this.state.data}
            keyExtractor= {(item) => {
              return item.id;
            }}
            renderItem={(message) => {
              console.log(item);
              const item = message.item;
              let inMessage = item.type === 'in';
              let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
              return (
                <View style={[styles.item, itemStyle]}>
                  {!inMessage && this.renderDate(item.date)}
                  <View style={[styles.balloon]}>
                    <Text>{item.message}</Text>
                  </View>
                  {inMessage && this.renderDate(item.date)}
                </View>
              )
            }}/>
          <View style={styles.footer}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs}
                  placeholder="Write a message..."
                  underlineColorAndroid='transparent'
                  onChangeText={(name_address) => this.setState({name_address})}/>
            </View>
  
              <TouchableOpacity style={styles.btnSend}>
                <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
              </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor : '#323542',
    },
    topNavbar : {
      width: '100%', 
      flexDirection : 'row',
      height : 60,
      borderColor : 'grey',
      backgroundColor : '#ed3851',
      shadowOpacity : 5,
      elevation : 4,
    },
  homeActive : {
    marginLeft : 'auto',
    marginRight : 'auto',
    justifyContent : 'center',
    marginTop : '6%',
    width: '30%',
    height : 20,
    resizeMode: 'contain',
  },
  homeImg  : {
    width: '100%',
    height : 30,
    marginLeft : 'auto',
    marginRight : 'auto',
  },
  profileActive : {
    marginLeft : 'auto',
    marginRight : 'auto',
    justifyContent : 'center',
    marginTop : '6%',
    width: '30%',
    height : 20,
    resizeMode: 'contain',
  },
  profileImg : {
    height : 20, 
    width : 20,
    marginLeft : 'auto',
    marginRight : 'auto',
  },
  settingActive : {
    marginLeft : 'auto',
    marginRight : 'auto',
    justifyContent : 'center',
    marginTop : '6%',
    width: '30%',
    height : 20,
    resizeMode: 'contain',
  },
  settingImg : {
    height : 20, 
    width : 20,
    marginLeft : 'auto',
    marginRight : 'auto',
  },
    list:{
      paddingHorizontal: 17,
    },
    footer:{
      flexDirection: 'row',
      height:60,
      backgroundColor: '#474a55',
      paddingHorizontal:10,
      padding:5,
    },
    btnSend:{
      backgroundColor:"#ff415b",
      width:43,
      height:40,
      borderRadius:360,
      alignItems:'center',
      justifyContent:'center',
    },
    iconSend:{
      width:30,
      height:30,
      alignSelf:'center',
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      height:40,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      marginRight:10,
    },
    inputs:{
      height:40,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
    },
    balloon: {
      maxWidth: 250,
      padding: 15,
      borderRadius: 20,
    },
    itemIn: {
      alignSelf: 'flex-start'
    },
    itemOut: {
      alignSelf: 'flex-end'
    },
    time: {
      alignSelf: 'flex-end',
      margin: 15,
      fontSize:12,
      color:"#808080",
    },
    item: {
      marginVertical: 14,
      flex: 1,
      flexDirection: 'row',
      backgroundColor:"#eeeeee",
      borderRadius:300,
      padding:5,
    },
  });  