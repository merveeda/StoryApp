import React, {Component} from 'react';
import {StyleSheet, Text, View,  ScrollView, TouchableOpacity, Image, TouchableHighlight} from 'react-native';
import { Icon } from 'native-base';

export default class SettingsScreen extends Component {
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Icon name = "settings" style = {{fontSize : 15, color : tintColor}}/>
    )}

    render() {
        const {navigate} = this.props.navigation;
        return (
         <View style = {styles.container}>
           <ScrollView>
           <Icon name = "settings" style = {styles.topsettingIcon}/>
           <View style= {styles.opacityBg}>
           <TouchableOpacity onPress = {() => navigate('Home')} style = {styles.SetButton}>
               <Text style = {styles.btnTxt}> 
                   Hesap Ayarları
               </Text>
           </TouchableOpacity>

           <TouchableOpacity onPress = {() => navigate('Permission')} style = {styles.SetButton}>
               <Text style = {styles.btnTxt}> 
                   İzin Ayarları
               </Text>
           </TouchableOpacity>

           <TouchableOpacity onPress = {() => navigate('Home')} style = {styles.SetButton}>
               <Text style = {styles.btnTxt}> 
                   Gizlilik Politikası
               </Text>
           </TouchableOpacity>

           <TouchableOpacity onPress = {() => navigate('Home')} style = {styles.SetButton}>
               <Text style = {styles.btnTxt}> 
                   Oturumu Kapat
               </Text>
           </TouchableOpacity>
           </View>
           </ScrollView>
           <View style = {styles.bottombar}>
            <TouchableOpacity  style = {styles.menu} onPress={() => this.props.navigation.openDrawer()} >
            <Image source = {require('../assets/Images/topNavBar/menu.png')} style = {styles.menuIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity  style = {styles.nullLogo}/>
            <TouchableOpacity  style = {styles.cameras} onPress = {() => navigate('Camera')}>
            <Image source = {require('../assets/Images/topNavBar/lens.png')} style = {styles.cameraImg}></Image>
            </TouchableOpacity>
            </View>
         </View>
          );
      }
  }
  const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor : '#323542',
        resizeMode: 'cover',
        flex: 1,
        flexDirection: 'column',
      },
      bottombar : {
        width: '100%', 
        flexDirection : 'row',
        height : '8%',
        borderColor : 'grey',
        backgroundColor : '#323542',
        shadowOpacity : 5,
        elevation : 4,
        alignItems: 'center',
      },
      menu : {
        marginLeft : 'auto',
        marginRight : 'auto',
        justifyContent : 'flex-start',
        marginTop : '1%',
        width: '30%',
        height : 20,
        resizeMode: 'contain',
      },
      cameraImg : {
        height : 30, 
        width : 30,
        marginLeft : 'auto',
        marginRight : 'auto',
      },
      menuIcon : {
        height : 20, 
        width : 20,
        marginLeft : 'auto',
        marginRight  : 'auto',
        justifyContent : 'center'
      },
      cameras : {
        marginLeft : 'auto',
        marginRight : 'auto',
        justifyContent : 'flex-end',
        marginTop : '1%',
        width: '30%',
        height : 20,
        resizeMode: 'contain',
      },
      nullLogo : {
        justifyContent : 'center',
      },
      topsettingIcon : {
        fontSize : 55,
        marginLeft : 'auto',
        marginRight : 'auto',
        color : '#ff415b',
        marginTop : '20%',
      },
      SetButton : {
        backgroundColor: '#474a55',
        padding : '3%',
        borderRadius : 20,
        marginTop : '10%',
        width : '85%',
        padding : '4%',
        marginLeft :'auto',
        marginRight :'auto',
        shadowOpacity : 5,
        elevation : 4,
      },
      btnTxt : {
        textAlign : 'center',
        fontSize : 13,
        color : '#FFFFFF',
        fontWeight : '100'
      },
      opacityBg: {
        width: '80%',
        height: 'auto',
        backgroundColor: '#ff415b',
        borderRadius: 10,
        marginTop : 50,
        marginLeft : 'auto',
        marginRight :'auto',
        paddingLeft : '10%',
        paddingRight : '10%',
        paddingBottom : '10%',
        borderRadius : 20,
        shadowOpacity : 5,
        elevation : 4,
      },
})