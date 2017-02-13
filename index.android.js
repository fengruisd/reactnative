/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';



export default class firstDemo extends Component {


constructor(props) {
 super(props);
 this.state = {
      pageIndex:0
    };



 }

 _onPressButton(){
         this.setState({pageIndex:1});
         }

  render() {
  switch(this.state.pageIndex) {
    case 0:
        return (
              <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton.bind(this)}>
                          <Text style={styles.instructions}>Button B</Text>
                        </TouchableHighlight>
              </View>
            );
    case 1:
        return (
                      <View style={styles.container}>
                        <Text style={styles.instructions}>
                          Button A
                        </Text>
                        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
                                  <Text style={styles.instructions}>Button B</Text>
                                </TouchableHighlight>
                        <Text style={styles.instructions}>
                          Button C
                        </Text>
                      </View>
                    );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    alignItems:'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('firstDemo', () => firstDemo);
