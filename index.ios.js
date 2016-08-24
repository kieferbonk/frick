import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View,
} from 'react-native';
import SceneMain from './components/views/Main';
import SceneGame from './components/views/Game';

class frick extends Component {
  renderScene (route, navigator) {
    const routeId = route.id;
    if (routeId === 'SceneMain') {
      return (
        <SceneMain
          navigator={navigator} />
      );
    }
    if (routeId === 'SceneGame') {
      return (
        <SceneGame
          navigator={navigator} />
      );
    }
    if (routeId === 'NoNavigatorPage') {
      return (
        <NoNavigatorPage
            navigator={navigator} />
      );
    }

    return this.noRoute(navigator);
  }

  noRoute (navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>noroute</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <Navigator
          initialRoute={{id: 'SceneMain', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('frick', () => frick);
