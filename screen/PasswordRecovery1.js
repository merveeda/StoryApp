import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView} from 'react-native';

export default class PasswordRecovery1  extends Component {
    static navigationOptions = {
        header : null,
        drawerLabel: () => null
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <KeyboardAvoidingView style={styles.container}  behavior="padding">
        <View style={styles.container}>
        <View style={styles.opacityBg} >
        <Image source={require('../assets/Images/darklogo.png')} style={styles.darkLogoImg}></Image>
        <Image source = {require('../assets/Images/important.png')} style = {styles.infIcon}/>
        <Text style = {styles.txtInformation}> Şifrenizi sıfırlamanız için telefonunuza 4 haneli doğrulama kodu göndereceğiz </Text>
        <TextInput editable = {true} maxLength = {11} style={styles.phoneInput} placeholder="Tel (+90)" placeholderTextColor = "#FFFFFF"></TextInput>
        <TouchableOpacity style={styles.btnSend} onPress={() => navigate('PassReco2')}>
        <Text style={styles.txtSend}>
            GÖNDER
        </Text>
        </TouchableOpacity>
        </View>
        </View>
        </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor : '#323542',
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode: 'cover'
    },
    opacityBg: {
      width: '85%',
      height: '70%',
      justifyContent :'center',
      alignItems : 'center',
      backgroundColor: '#ff415b',
      borderRadius: 10,
    },
    infIcon :{
      width : 25,
      height : 25,
      marginTop : '5%',
    },
    txtInformation :{
      color : '#474a55',
      fontSize : 13,
      textAlign : 'center',
      marginTop : '5%',
      padding : '2%'
    },
    darkLogoImg: {
      height: 70,
      width: '70%',
      justifyContent :'center',
      marginLeft : 'auto',
      marginRight : 'auto',
      resizeMode: 'cover',
      marginTop: 15,
    },
    phoneInput :{
      justifyContent: 'center',
      width: '70%', 
      backgroundColor : '#474a55',
      marginLeft: 'auto',
      marginRight: 'auto',
      color : 'white',
      paddingLeft: '10%',
      marginTop: '10%',
      height : '6%',
      color:'black',
      borderRadius: 7,
     },
    btnSend : {
      width:'70%',
      backgroundColor:'#FFFFFF',
      padding: '3%',
      alignSelf: 'flex-end',
      marginTop: 20,
      borderRadius: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
      },
      txtSend : {
      color: '#474a55',
      textAlign: 'center'
      }
})