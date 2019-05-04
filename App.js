import React from 'react';
import { AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = { count: 0 }
    }

  onPress = () => {
   this.setState({
     count: this.state.count+1
   })
 }

  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity
         style={styles.buttonTop}
         onPress={this.onPress}
       >
         <Text style={styles.font}> Vibration </Text>
       </TouchableOpacity>


       <TouchableOpacity
         style={styles.buttonBottom}
         onPress={this.onPress}
       >
         <Text style={styles.font}> Vibration and Speech </Text>
       </TouchableOpacity>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  buttonTop: {
    alignItems: 'center',
    backgroundColor: 'lightblue',

    padding: 10,
    marginTop: 20

  },
  buttonBottom: {
    alignItems: 'center',
    backgroundColor: 'pink',

    padding: 10,
    marginTop: 20

  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },
  font:{
    fontSize:60,
  }
})
