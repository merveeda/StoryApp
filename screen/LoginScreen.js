import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ActivityIndicator, KeyboardAvoidingView, Alert } from 'react-native';



export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Phone: '',
      Password: '',
    };
  }
  submit() {
    this.setState({
      show: true
    });
    let collection = {}
    collection.phone = this.state.Phone,
    collection.password = this.state.Password;
    var url = '// Your API URL';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(collection),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        this.setState({
          show: false
        });
        const {navigate} = this.props.navigation; 
        if (response.Hata === null) {
          Alert.alert("Hoşgeldiniz !", response.Token)
          navigate('Home')
        } else if(response.Token === null) {
          Alert.alert("Hata :", response.Hata)
        }
        else if(response.Token !== null && response.Phone !== null && response.Hata === "ValidateSMS"){
          navigate('SmsVal', {token:response.Token,phone:response.Phone})
        }
      }).catch(error => console.error('Error:', error));
  }
  static navigationOptions = {
    header: null,
    drawerLockMode: 'locked-closed',
    drawerLabel: () => null,
  }
  state = {
    show: false,
  }
  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container} source={require('../assets/Images/Login.png')}>
        <View style={styles.opacityBg} >
          <Image source={require('../assets/icon.png')} style={styles.userIconimg}></Image>
          <Image source={require('../assets/location.png')} style={styles.locationImg}></Image>
          <KeyboardAvoidingView behavior="padding">
            <TextInput editable={true} value={this.state.Phone} onChangeText={(value) => this.setState({Phone: value})} maxLength={11} style={styles.nameInput} placeholder="Telefon" placeholderTextColor="#FFFFFF" keyboardType="number-pad"></TextInput>
            <TextInput editable={true} value={this.state.Password}  onChangeText={(value) => this.setState({Password: value})} maxLength={11} style={styles.passInput} placeholder="Şifre" placeholderTextColor="#FFFFFF" keyboardType="number-pad"></TextInput>
            <TouchableOpacity style={styles.btnLogin} onPress={() => this.submit()}>
              <Text style={styles.btnText}> GİRİŞ YAP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('Register')} style={styles.btnRegister}>
              <Text style={styles.txtRegister}>
                Kayıt Ol
        </Text>
            </TouchableOpacity>
            <ActivityIndicator animating={this.state.show} size="large" />
            <Text style={styles.txtForgetPass} onPress={() => navigate('PassReco1')}>
              Şifremi Unuttum
         </Text>
          </KeyboardAvoidingView>
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
    backgroundColor: '#323542',
    justifyContent: 'center',
    resizeMode: 'cover'
  },
  opacityBg: {
    width: '85%',
    height: '90%',
    justifyContent: 'center',
    backgroundColor: '#323542',
    borderRadius: 10,
  },
  userIconimg: {
    height: '7%',
    width: '70%',
    justifyContent: 'center',
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
  },
  locationImg: {
    height: '13%',
    width: '88%',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    resizeMode: 'contain',
    marginTop: '5%',
  },
  passInput: {
    backgroundColor: '#474a55',
    justifyContent: 'center',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '12%',
    marginTop: 20,
    color: '#ffffff',
    paddingLeft: '10%',
    borderRadius: 7,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowRadius: 3.84,
    elevation: 3,
  },
  nameInput: {
    backgroundColor: '#474a55',
    justifyContent: 'center',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '10%',
    marginTop: 30,
    color: '#ffffff',
    height: '12%',
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: 'black',
    elevation: 3,
  },
  btnLogin: {
    width: '80%',
    backgroundColor: '#ff415b',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '4%',
    marginTop: 30,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowRadius: 3.84,
    elevation: 3,
  },
  btnText: {
    color: '#FFFFFF',
    textAlign: 'center'
  },
  btnRegister: {
    width: '80%',
    backgroundColor: '#ff415b',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '4%',
    marginTop: 10,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowRadius: 3.84,
    elevation: 3,
  },
  txtRegister: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  txtForgetPass: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: '4%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});