import React , { Component } from 'react';
import { StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native'; 

export default class ItemComponent extends Component{
    detailHandle = () => {
        this.props.onDetailHandle(this.props.item.url);
    }
    render(){
        return (
            <TouchableOpacity onPress={this.detailHandle}>
                <View style={styles.itemInList}>
                    <Image 
                        source={require('../../assets/pokeball.png')}
                        style={styles.imgItem}
                    />
                    <Text style={styles.namePoke}>{this.props.item.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    itemInList:{
        justifyContent:'space-around',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection:'row'
    },
    namePoke:{
        fontSize:14,
        fontWeight:'bold'
    },
    imgItem:{
        width:50,
        height:50
    }
});