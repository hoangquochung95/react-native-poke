import React , { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { changeLoginStatus } from '../store/actions/action';

class LoginComponent extends Component {
  state = {
      username:'',
      password:''
  };
  loginHandle = () => {
    if(this.state.username.trim() === 'admin' && this.state.password.trim() === '123456' ){
      this.props.onChangeLoginStatus(true);
      this.props.navigation.navigate('ListComponent');
    }else{
      this.props.onChangeLoginStatus(false);
    }
  };
  userTypeHandle = (val) => {
    this.setState({
      username : val
    });
  };
  passTypeHandle = (val) => {
    this.setState({
      password : val
    });
  }
  render(){
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/poke-icon.png')}
          style={styles.logoImg}
        ></Image>
        <TextInput
          style={styles.userInput}
          value={this.state.username}
          onChangeText={this.userTypeHandle}
        ></TextInput>
        <TextInput
          style={styles.userInput}
          value={this.state.password}
          onChangeText={this.passTypeHandle}
        ></TextInput>
        <Text>{ this.props.isLogged && 'Login success '}</Text>
        <Button
          title="Login"
          onPress={this.loginHandle}
          style={styles.loginButton}
          color="#007791"
        ></Button>
        <Text style={styles.comment}>
        //Username : admin{"\n"}
        //Password:123456
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged : state.userReducer.isLogged 
  }
}

const mapDispatchToProp = dispatch => {
  return {
      onChangeLoginStatus : (isAdmin) => dispatch(changeLoginStatus(isAdmin))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInput: {
    width:"80%",
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  logoImg : {
    width:100,
    height:100,
    marginBottom: 10,
  },
  comment:{
    color:'#cecece'
  }
});

export default connect(mapStateToProps,mapDispatchToProp)(LoginComponent);