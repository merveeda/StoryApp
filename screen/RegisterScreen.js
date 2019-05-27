import React, {Component} from 'react';
import {StyleSheet,ActivityIndicator, Text,Alert, View, TextInput, TouchableOpacity, Image,  KeyboardAvoidingView, ScrollView} from 'react-native';
import Modal  from 'react-native-modal';


export default class RegisterScreen extends Component {
  constructor(props) {
		super(props); 
		this.state = {
      Name: '',
      Surname: '',
      Gender: '',
      Phone: '',
      PasswordHash: '',
      
		};
  }
    submit(){
      this.setState({
        show : true
      });
      let collection={}
      collection.name=this.state.Name,
      collection.surname = this.state.Surname,
      collection.phone = this.state.Phone,
      collection.gender = this.state.Gender,
      collection.passwordhash = this.state.PasswordHash;
      var url = 'Your API URL';
       fetch(url, {
       method: 'POST',
       body: JSON.stringify(collection), 
       headers:{
        'Content-Type': 'application/json'
        }
       }).then(res => res.json())
       .then(response => {
         //loading kaldır.
         this.setState({
          show : false
        });
        if(response.state){
            Alert.alert("Tebrikler !",response.Message)
          }else{
            Alert.alert("Hata :",response.Message)
          }
       })
       .catch(error => console.error('Error:', error));
       }
    static navigationOptions = {
        header : null,
        drawerLockMode: 'locked-closed',
        drawerLabel: () => null,
    };
    state = {
      modalVisible : false,
      show: false,
    }
    _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });
    render() {
      const {navigate} = this.props.navigation; 
      return (
        <View style={styles.container}>
        <View style={styles.opacityBg} >
        <Image source={require('../assets/icon.png')} style={styles.userIconimg}></Image>
        <Text style = {styles.txtHeadline}>KAYIT OL</Text>
        <KeyboardAvoidingView behavior="padding">
        <TextInput editable = {true}  value={this.state.Name} onChangeText={(value) => this.setState({Name: value})} maxLength = {11} style={styles.editInput} placeholder="Ad" placeholderTextColor = "#FFFFFF"></TextInput>
        <TextInput editable = {true}  value={this.state.Surname} onChangeText={(value) => this.setState({Surname: value})} maxLength = {11} style={styles.editInput} placeholder="Soyad" placeholderTextColor = "#FFFFFF"></TextInput>
        <TextInput editable = {true}  value={this.state.Phone} onChangeText={(value) => this.setState({Phone: value})} maxLength = {11} style={styles.editInput} placeholder="Telefon" placeholderTextColor = "#FFFFFF"></TextInput>
        <TextInput editable = {true}  value={this.state.Gender} onChangeText={(value) => this.setState({Gender: value})} maxLength = {11} style={styles.editInput} placeholder="Cinsiyet" placeholderTextColor = "#FFFFFF"></TextInput>
        <TextInput editable = {true}  value={this.state.PasswordHash} onChangeText={(value) => this.setState({PasswordHash: value})} maxLength = {11} style={styles.editInput} placeholder="Sifre" placeholderTextColor = "#FFFFFF"></TextInput>
        {/* <TextInput editable = {true} maxLength = {11} style={styles.editInput} placeholder="Sifre ( Tekrar )" placeholderTextColor = "#FFFFFF"></TextInput> */}
        <TouchableOpacity  onPress={() => this.submit()} style={styles.btnRegister}>
        <Text style={styles.txtRegister}>
          Kayıt Ol 
        </Text>
        </TouchableOpacity>
        <ActivityIndicator animating={this.state.show} size = "large"/>
        <Text style={styles.contractText} onPress = {this._toggleModal}>
           Kullanıcı Sözleşmesini<Text style = {{color : '#ffffff'}}> kabul ediyorum </Text>
        </Text>
        </KeyboardAvoidingView>
        <Modal isVisible={this.state.isModalVisible}>
          <ScrollView>
          <View style ={ styles.ModalContainer}>
            <Text style={styles.contactDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            </Text>
            <TouchableOpacity onPress={this._toggleModal} style= { styles.btnUnderstand}>
              <Text style={styles.btnTxt}> Kapat </Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
          </Modal>
        </View>
        </View>
      );
    }


  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      backgroundColor : '#323542',
      justifyContent: 'center',
      resizeMode: 'cover'
    },
    opacityBg: {
      width: '85%',
      height: '90%',
      justifyContent : 'center',
      backgroundColor: '#323542', 
      borderRadius: 10,
    },
    btnTxt : {
      textAlign: 'center',
      color: '#ffffff'
    },
    userIconimg: {
      height: '7%',
      width: '70%',
      justifyContent : 'center',
      resizeMode: 'contain',
      marginLeft : 'auto',
      marginRight : 'auto',
      marginTop: '10%',
    },
    btnUnderstand : {
      width:'30%',
      backgroundColor:'#ff415b',
      padding: '3%',
      alignSelf: 'flex-end',
      borderRadius: 10,
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
      },
    txtHeadline : {
      marginTop : '5%',
      marginLeft : 'auto',
      marginRight : 'auto',
      fontSize : 25,
      color : '#ffffff',
      justifyContent : 'center'
    },
    contractText : {
      color: '#ff415b',
      fontSize: 13,
      textAlign: 'center',
      marginTop : 15
    },
    locationImg: {
      height: '13%',
      width: '88%',
      justifyContent : 'center',
      marginLeft : 'auto',
      marginRight : 'auto',
      resizeMode: 'contain',
      marginTop: '5%',
    },
    contactDesc : {
      padding:'5%',
      color : '#323542',
      textAlign: 'center',
    },
    ModalContainer : {
      height: 'auto',
      borderRadius: 7,
      padding:'5%',
      width:'90%',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#ffffff',
    },
    editInput :{
      backgroundColor : '#474a55',
      justifyContent: 'center',
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '10%',
      marginTop: 15,
      color : '#ffffff',
      height : '7%',
      borderRadius: 7,
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 2,
    },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      shadowColor : 'black',
      elevation: 3,
    },
    btnRegister : {
      width:'80%',
      backgroundColor:'#ff415b',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding : '3%',
      marginTop: 30,
      borderRadius: 10,
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowColor : 'black',
      shadowRadius: 3.84,
      elevation: 3,
      },
    btnText : {
      color:'#FFFFFF',
      textAlign: 'center'
    },
    txtRegister : {
      color:'#FFFFFF',
      textAlign: 'center'
    },
    txtForgetPass : {
      fontSize: 14,
      color: '#ffffff',
      textAlign: 'center',
      marginTop: '4%',
      marginLeft:'auto',
      marginRight:'auto',
    },
});