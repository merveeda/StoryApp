import React, {Component} from 'react';
import {StyleSheet,  View, ScrollView, Image, TouchableOpacity, Text, ImageBackground} from 'react-native';
import { Icon } from 'native-base';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Icon name = "person" style = {{fontSize : 15, color : tintColor}}/>
    )
  };
    render() {
      const {navigate} = this.props.navigation;  
     
      return (  
        <ImageBackground source={require('../assets/Images/bghome.png')} style = {styles.container}> 
            <ScrollView style={styles.opacityBg} > 
            <View style = {styles.bgShadow}>
            <View style = { styles.profileCont}>
          <Image source= {require('../assets/Images/story/boy.jpg')}style={styles.myprofileImg} />
            </View>
            <View style = {styles.txtCont}>
           <Text style = {styles.Nametxt}> John Doe </Text>
            </View>
            </View>
            <View style = { styles.StoryContainer }>
          <Image source= {require('../assets/Images/story/nature.jpg')}style={styles.storyImgFirst} />
          <Image source= {require('../assets/Images/story/juice.jpg')}style={styles.storyImgEnd} />
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
          </ImageBackground>
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
        justifyContent: 'center',
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
      bgShadow : {
        width : '36%',
        backgroundColor : '#ff415b',
        shadowOpacity : 5,
        elevation : 4,
        justifyContent : 'center',
        marginLeft : 'auto',
        marginRight : 'auto'
      },
    profileCont : {
      flexDirection : 'row',
      width : '100%',
      height : 'auto',
      marginTop : '20%'
    },
    txtCont : {
      flexDirection : 'row',
      width : '100%',
      height : 'auto',
      marginTop : 10,
      marginBottom : 20
    },
    StoryContainer : {
      flexDirection : 'row',
      width : '100%',
      height : 'auto',
      marginTop : 60
    },
    storyImgFirst : {
      height : 120,
      marginLeft: 'auto',
      marginRight: 'auto',
      width : 120,
      justifyContent : 'flex-start',
      borderRadius : 150/2,
      borderWidth: 2,
      borderColor : '#ff415b',
      flexDirection : 'column'
    },
    storyImgEnd : {
      height : 120,
      width : 120,
      marginLeft: 'auto',
      marginRight: 'auto',
      justifyContent : 'flex-end',
      borderRadius : 150/2,
      borderWidth: 2,
      borderColor : '#ff415b'
    },
    myprofileImg : {
      height : 60,
      width : 60,
      marginLeft: 'auto',
      marginRight: 'auto',
      justifyContent : 'center',
      borderRadius : 150/2,
      shadowOpacity : 5,
      elevation : 4,
    },
    Nametxt : {
      justifyContent : 'center',
      fontSize : 14,
      fontWeight : '100',
      marginLeft : 'auto',
      marginRight : 'auto'
    },
  
});