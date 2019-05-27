import React, {Component} from 'react';
import {StyleSheet,  View, ScrollView, Image, TouchableOpacity} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import { ListItem } from 'react-native-elements'
import { Icon } from 'native-base';


export default class MessageScreen extends Component {
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Icon name = "chatbubbles" style = {{fontSize : 15, color : tintColor}}/>
    ),
  };
   
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
         <SearchBar style = {styles.searchBar}fontColor="darkgrey" iconColor="darkgrey" shadowColor="#282828" cancelIconColor="darkgrey" backgroundColor="#f1f1f1" placeholder="Search here"
           onPress={() => alert("onPress")}
          />
      <ScrollView>
      <TouchableOpacity onPress = {() => navigate('Chat')}>
      <ListItem style = {styles.cardCont}
        roundAvatar
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'} }}
        title={'Amy Farha'}
      />
      </TouchableOpacity>      
       <ListItem style = {styles.cardCont}
        roundAvatar
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'} }}
        title={'Amy Farha'}
        onPress={() => alert("onPress")}
      />
       <ListItem style = {styles.cardCont}
        roundAvatar
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'} }}
        title={'Amy Farha'}
        onPress={() => alert("onPress")}
      />
       <ListItem style = {styles.cardCont}
        roundAvatar
        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'} }}
        title={'Amy Farha'}
        onPress={() => alert("onPress")}
      />
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
        backgroundColor : '#f1f1f1',
        resizeMode: 'cover',
        flex: 1,
        flexDirection: 'column',
      },
    cardCont : {
      marginTop : 20,
      width : '90%',
      marginLeft : 'auto',
      marginRight : 'auto'
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
});