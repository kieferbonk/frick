import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Navigator,
} from 'react-native';
import User from '../partials/User';

export default class Users extends Component {
  constructor (props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      users: ds.cloneWithRows(this.props.users),
    };

    console.log(this.state.users);
  }

  renderScene (route, navigator) {
    return (
      <ListView
        dataSource={this.state.users}
        renderRow={(row) => <User name={row} />}
        style={{padding: 20}}
      />
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
            <Text style={{color: 'white', margin: 10, fontSize: 16}}>USERS</Text>
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
