import React , { Component } from 'react';
import { StyleSheet, Text, View, Modal, Button, Image } from 'react-native'; 
import { getRequest } from '../Utils'

export default class DetailComponent extends Component{
    state = {
        weight : null,
        base_experience : null,
        height: null,
        img : null,
        name : null
    };
    showHandle = () => {
        var that = this;
        getRequest(that.props.urlSelected)
        .then(response => {
            if(response.status === 200){
                that.setState({
                    weight : response.data.weight,
                    base_experience : response.data.base_experience,
                    height: response.data.height,
                    img : response.data.sprites.front_shiny,
                    name : response.data.name.toUpperCase()
                })
            }
        })
        .catch(error => console.log(error));;
    };

    render(){
        return (
            <Modal
                onRequestClose={this.props.onModalClosed}
                visible={this.props.isShowModal === true}
                animationType="slide"
                onShow={this.showHandle}
                >
                <View style={styles.modalContainer}>
                    <View>
                        <View style={{ flexDirection:'row',justifyContent:'center' }}>
                            <Image
                                style={{ width: 150, height: 150 }}
                                source={{ uri: this.state.img }}
                            />
                        </View>
                        <View style={styles.infoPoke}>
                            <Text style={{fontSize: 20, fontWeight:'bold',color:'red'}}> Name : {this.state.name}</Text>
                            <Text style={styles.fontStyle}> Weight : {this.state.weight}</Text>
                            <Text style={styles.fontStyle}> Base experience : {this.state.base_experience}</Text>
                            <Text style={styles.fontStyle}> Height : {this.state.height}</Text>
                        </View>
                    </View>
                    <View>
                        <Button title="Close" onPress={this.props.onModalClosed} />
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
      margin: 22
    },
    fontStyle : {
        fontSize: 20,
        marginBottom: 5,
    },
    infoPoke:{
        marginTop: 10,
        backgroundColor:'#d1cece',
        borderRadius: 10,
        borderColor: '#c4c1c1',
        borderWidth: 1,
        marginBottom: 10,
        padding: 20,
    }
  });