import React, {Component} from 'react';
import {StyleSheet, Text, View,  ScrollView, TouchableOpacity, Image} from 'react-native';

export default class PermissionScreen extends Component {
    static navigationOptions = {
        header : null,
        drawerLabel: () => null
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
         <View style = {styles.container}>
            <View style = {styles.topNavbar} >
            <TouchableOpacity  style = {styles.settingActive} onPress = {() => navigate('Settings')} >
               <Image source = {require('../assets/Images/topNavBar/settings.png')} style = {styles.settingImg}></Image>
             </TouchableOpacity>
            
            <TouchableOpacity style = {styles.homeActive} onPress = {() => navigate('Home')}>
            <Image source = {require('../assets/Images/logo.png')} style = {styles.homeImg}></Image>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.profileActive} onPress = {() => navigate('Profile')}>
            <Image source = {require('../assets/Images/topNavBar/user.png')}     style = {styles.profileImg}></Image>
            </TouchableOpacity>
           </View>
           <ScrollView>

          
           </ScrollView>
         </View>
          );
      }
  }
  const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor : '#f1f1f1',
        resizeMode: 'cover',
        flex: 1,
        flexDirection: 'column',
      },
      topNavbar : {
        width: '100%', 
        flexDirection : 'row',
        height : 70,
        borderColor : 'grey',
        backgroundColor : '#FF706F',
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
        height : 40,
        marginLeft : 'auto',
        marginRight : 'auto',
        resizeMode: 'contain',
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
      topsettingIcon : {
        width : 100,
        height : 100,
        marginLeft : 'auto',
        marginRight : 'auto',
        marginTop : 30,
      },
     
})