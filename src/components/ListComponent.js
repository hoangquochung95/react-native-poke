import React , { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native'; 
import { getRequest } from '../Utils'
import DetailComponent from './DetailComponent'
import ItemComponent from './ItemComponent';
export default class ListComponent extends Component {
    state = {
        data: null,
        listView: null,
        isShowModal: false,
        urlSelected:''
    }
    componentWillMount(){
        var that = this;
        getRequest('http://pokeapi.co/api/v2/pokemon/?limit=100')
        .then(response => {
            if(response.status === 200){
                that.setState({
                    data: response.data.results
                })
            }
        })
        .catch(error => console.log(error));;
    };
    _keyExtractor = (item, index) => item.url;
    _renderItem = (item) => {
       
    };
    detailHandle = (url) => {
        console.log(url)
       this.setState({
            isShowModal:true,
            urlSelected:url
       });
    }
    modalClodedHandle = () => {
        this.setState({
            isShowModal:false,
            urlSelected:''
        });
    }
    render(){
        return (
            <View>
                 <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={(item) => (
                        <ItemComponent 
                            onDetailHandle={this.detailHandle}
                            item={item.item}
                        />
                    )}
                />
                 <DetailComponent
                    onModalClosed={this.modalClodedHandle}
                    urlSelected={this.state.urlSelected}
                    isShowModal={this.state.isShowModal}
                >
                </DetailComponent>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});