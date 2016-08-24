import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} from 'react-native';

export default class Clicker extends Component {
  renderScene (route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        <Text style={{backgroundColor: 'yellow', color: 'green'}}>Clicker!</Text>
      </View>
    );
  }

  render () {
    const NavigationBarRouteMapper = {
      LeftButton (route, navigator, index, navState) {
        return (
          <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
              onPress={() => navigator.parentNavigator.pop()}>
            <Text style={{color: 'white', margin: 10,}}>{`< Back`}</Text>
          </TouchableOpacity>
        );
      },
      RightButton (route, navigator, index, navState) {
        return null;
      },
      Title (route, navigator, index, navState) {
        return (
          <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{color: 'white', margin: 10, fontSize: 16}}>CLICKER</Text>
          </TouchableOpacity>
        );
      }
    };

    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    )
  }
}
