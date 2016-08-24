import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class User extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: this.props.name,
    };
  }

  render () {
    return (
      <View>
        <TextInput
            style={{height: 40}}
            placeholder="Name of the user"
            onChangeText={(name) => this.setState({name})}
        />
      </View>
    );
  }
}
