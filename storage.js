import React, { Component } from 'react';
 
import { StyleSheet, Text, View, Alert } from 'react-native';
 
export default class App extends Component<{}> {
 
  ewallet=(item)=>{
 
    Alert.alert(item);
 
  }
 
 render() {
 
  var name = [ " " ]
  var store_balance = [ " " ];
  var payment = [ " " ];
  var transactionDate = [ " " ];
  var remainingAmount = [ " " ];
 
   return (
     <View style={styles.MainContainer}>

          { name.map((item, key)=>(
         <Text key={key} style={styles.TextStyle} onPress={ this.ewallet.bind(this, item) }> { item } </Text>)
         )}
 
         { store_balance.map((item, key)=>(
         <Text key={key} style={styles.TextStyle} onPress={ this.ewallet.bind(this, item) }> { item } </Text>)
         )}

         { payment.map((item, key)=>(
         <Text key={key} style={styles.TextStyle} onPress={ this.ewallet.bind(this, item) }> { item } </Text>)
         )}

         { transactionDate.map((item, key)=>(
         <Text key={key} style={styles.TextStyle} onPress={ this.ewallet.bind(this, item) }> { item } </Text>)
         )}

         { remainingAmount.map((item, key)=>(
         <Text key={key} style={styles.TextStyle} onPress={ this.ewallet.bind(this, item) }> { item } </Text>)
         )}
 
     </View>
   );
 }
}
 
const styles = StyleSheet.create({
 
 MainContainer: {
   flex: 1,
   margin: 10
   
 },
 
 TextStyle:{
   fontSize : 25,
    textAlign: 'center'
 }
 
});
