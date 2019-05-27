import HomeScreen from './screen/HomeScreen';
import SettingsScreen from './screen/SettingsScreen';
import ProfileScreen from './screen/ProfileScreen';
import MessageScreen from './screen/MessageScreen';
import RegisterScreen from './screen/RegisterScreen';
import LoginScreen from './screen/LoginScreen';
import PasswordRecovery1 from './screen/PasswordRecovery1';
import PasswordRecovery2 from './screen/PasswordRecovery2';
import PasswordRecovery3 from './screen/PasswordRecovery3';
import ChatScreen from './screen/ChatScreen';
import SmsValidation from './screen/SmsValidation';
import CameraScreen from './screen/CameraScreen';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import {View, SafeAreaView, ScrollView, Text, Dimensions, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';

export default class App extends Component {
  render() {
    return (
     <AppDrawerNavigator/>
    );
  }
}
var accessToken = "";
const CustomDrawerComponent = (props) => (
  <SafeAreaView style = {styles.safeView}>
  <View style = {styles.backView}>
  <Image source = {require('./assets/icon.png')} style = {styles.logoImg}></Image>
  </View>
  <View>
    <Text style = {styles.navHeadLine}> Menü </Text>
  </View>
  <ScrollView>
    <DrawerItems {...props}/>
  </ScrollView>
  </SafeAreaView>
)
 
const AppDrawerNavigator = createDrawerNavigator({
  Login : LoginScreen,
  Home     : HomeScreen,
  Profile  : ProfileScreen,
  Settings : SettingsScreen,
  Message  : MessageScreen,
  Register:  RegisterScreen,
  PassReco1 : PasswordRecovery1 ,
  PassReco2 : PasswordRecovery2 ,
  PassReco3 : PasswordRecovery3 ,
  Chat : ChatScreen ,
  Camera :  CameraScreen ,
  SmsVal : SmsValidation
},
{
  contentComponent : CustomDrawerComponent,
  contentOptions : {
  activeTintColor : '#FFFFFF',
  inactiveTintColor :'#3D3D3D',
  activeBackgroundColor :'#ff415b',
  inactiveBackgroundColor :'#ffffff',
  itemsContainerStyle: {
    marginTop: 20,
},}});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeView : {
    flex : 1,
  },
  backView : {
    height : 150,
    backgroundColor : 'white',
    alignItems : 'center',
    justifyContent : 'center'
  },
  logoImg : {
    marginTop : '6%',
    height : 50,
    width : 180,
    resizeMode: 'cover',
  },
  navHeadLine : {
    textAlign : 'center',
    fontSize : 16,
    fontWeight : '100',
    color : 'darkgrey',
  }
});