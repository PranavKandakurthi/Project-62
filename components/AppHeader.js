import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.texth}> SCHOOL ATTENDENCE APP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'black',
    borderRadius: 10
  },
  texth:{
    color: 'red',
    padding: 20,
    fontSize: 19,
    textAlign: 'center',
  }
});

export default AppHeader;