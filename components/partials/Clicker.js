import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PanResponder,
} from 'react-native';

export default class Clicker extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: 0,
    };

    this.changeValue = this.changeValue.bind(this);
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderRelease: (evt, gestureState) => {
        const dir = gestureState.dy > 0 ? '+' : '-';
        this.changeValue(dir);
      },
    });
  }

  changeValue (dir = '+') {
    const value = (dir === '+')
        ? this.state.value + 1
          : (this.state.value > 0)
            ? this.state.value - 1
            : 0; 
    this.setState({
      value
    });
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.toggler} onPress={() => this.changeValue('+')}>+</Text>
        <View {...this._panResponder.panHandlers}>
          <Text style={styles.value}>{this.state.value}</Text>
        </View>
        <Text style={styles.toggler} onPress={() => this.changeValue('-')}>-</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {

  },
  toggler: {
    textAlign: 'center',
    fontSize: 40
  },
  value: {
    fontSize: 60,
    color: 'black',
    textAlign: 'center',
  },
});
