import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class Summary extends React.Component {

  render() {
    return (
      <Text style = {styles.text}> Attendance Complete </Text>      
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default Summary;