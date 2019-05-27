import React, { Component } from 'react';
import { StyleSheet, Alert, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

export default class SmsValidation extends Component {

    static navigationOptions = {
        header: null,
        drawerLabel: () => null
    };
    constructor(props) {
        super(props)
        this.state = {
            resultCode: '',            
        };
    }
   
    smsVal(){
        const {navigate} = this.props.navigation; 
        let collection = {}
        collection.phone = this.props.navigation.getParam('phone');
        collection.resultCode = this.state.resultCode;
         var url = 'Your API URL';
         var obj =  {
             method : 'POST',
             headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                'Authorization' : this.props.navigation.getParam('token'),
             },
             body : JSON.stringify(collection)};
             console.log(obj)
                console.log(JSON.stringify(collection));
         fetch(url,obj)
         .then(res => res.json()) 
         .then(response => {
             if(response.Result){
                 navigate('Home');
             }else{
                Alert.alert("Hata: "+Response.Message);
             }
         })
         .catch(error => console.error('Error:', error));
         }
        //  var obj = {
        //      method : 'Post',
        //      headers : {
        //        'Accept' : 'application/json',
        //        'Content-Type' : 'application/json',
        //        'Authorization' : this.props.navigation.getParam('token'),
        //      },
        //      body : JSON.stringify({
        //          'phone' : this.props.navigation.getParam('phone'),
        //          'resultCode' : collection,
        //      }),
        //  };
        //  console.log(obj, collection);
        //  fetch(url, obj)
        //  .then((response) => response.text())
        //  .then((responseData) => {
        //    console.log('validate sonuc : ' + responseData );
        //  })
        //  .catch(function(err){
        //      console.log('validate hata' + err);
        //  });
    
    componentDidMount = () => {
       setTimeout(() => {
             console.log('Fetched');
                 var url = 'https://doganozturk.net/api/user/SendSms';
                 var obj = {
                     method: 'Post',
                     headers: {
                       'Accept': 'application/json',
                       'Content-Type': 'application/json',
                       'Authorization': this.props.navigation.getParam('token'),
                     },
                     body:JSON.stringify({
                             'Phone': this.props.navigation.getParam('phone'),
                          }),
                 };
                 console.log(obj);
                 fetch(url, obj)
                 .then((response) => response.text())
                 .then((responseData) => {
                     console.log('sonuc:'+responseData);
                 })
                 .catch(function(err) {
                     console.log('hatta:'+err);
                });
                 }, 1000)
      }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.container}>
                    <View style={styles.opacityBg} >
                        <Image source={require('../assets/Images/darklogo.png')} style={styles.darkLogoImg}></Image>
                        <Image source={require('../assets/Images/identification.png')} style={styles.infIcon} />
                        <Text style={styles.txtInformation}> Lütfen telefonunuza gelen 4 haneli doğrulama kodunu giriniz </Text>
                        <TextInput value={this.state.resultCode} onChangeText={(value) => this.setState({resultCode: value})} editable={true} maxLength={11} style={styles.phoneInput} placeholder=" _ _ _ _" placeholderTextColor="#FFFFFF"></TextInput>
                        <TouchableOpacity style={styles.btnSend} onPress={() => this.smsVal()}>
                            <Text style={styles.txtSend}>İLERİ</Text>
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
        backgroundColor: '#323542',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover'
    },
    opacityBg: {
        width: '85%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff415b',
        borderRadius: 10,
    },
    infIcon: {
        width: 25,
        height: 25,
        marginTop: '5%',
    },
    txtInformation: {
        color: '#474a55',
        fontSize: 13,
        textAlign: 'center',
        marginTop: '5%',
        padding: '2%'
    },
    darkLogoImg: {
        height: 70,
        width: '70%',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        resizeMode: 'cover',
        marginTop: 15,
    },
    phoneInput: {
        justifyContent: 'center',
        width: '70%',
        backgroundColor: '#474a55',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        textAlign: 'center',
        marginTop: '10%',
        height: '6%',
        color: 'black',
        borderRadius: 7,
    },
    btnSend: {
        width: '70%',
        backgroundColor: '#FFFFFF',
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
    txtSend: {
        color: '#474a55',
        textAlign: 'center'
    }
})