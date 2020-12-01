
import React from "react";
import { View,TouchableOpacity,StyleSheet } from "react-native";
import { Text } from "../../Common";
import Button from "../../Common/Button";
import { connect } from 'react-redux';


const Counter = (props) => {
    function touch (){
        console.log("function working")
    }
    return (<View>
        <Text>Welcome To Counter PAge</Text>
        <Button style={{backgroundColor :'grey'}} onPress={() => touch()} children={"Press Me"}>
        </Button>

        <Text style={styles.counterTitle}>Counter</Text>

<View style={styles.counterContainer}>
  <TouchableOpacity onPress={props.reduxIncreaseCounter}>
    <Text style={styles.buttonText}>+</Text>
  </TouchableOpacity>

  <Text style={styles.counterText}>{props.counter}</Text>

  <TouchableOpacity onPress={props.reduxDecreaseCounter}>
    <Text style={styles.buttonText}>-</Text>
  </TouchableOpacity>
</View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    counterContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    counterTitle: {
      fontFamily: 'System',
      fontSize: 32,
      fontWeight: '700',
      color: '#000',
    },
    counterText: {
      fontFamily: 'System',
      fontSize: 36,
      fontWeight: '400',
      color: '#000',
    },
    buttonText: {
      fontFamily: 'System',
      fontSize: 50,
      fontWeight: '300',
      color: '#007AFF',
      marginLeft: 40,
      marginRight: 40,
    },
  });
  // Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
    console.log('State:');
    console.log(state);
  
    // Redux Store --> Component
    return {
      // counter: state.counterReducer.counter,
      counter: state.counter.counter,
    };
  };
  
  // Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
  const mapDispatchToProps = (dispatch) => {
    // Action
      return {
        // Increase Counter
        reduxIncreaseCounter: () => dispatch({
          type: 'INCREASE_COUNTER',
          value: 1,
        }),
        // Decrease Counter
        reduxDecreaseCounter: () => dispatch({
          type: 'DECREASE_COUNTER',
          value: 1,
        }),
     };
  };
  
  // Exports
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);