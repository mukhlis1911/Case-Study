//NUR SABRINA BINTI NOR AZHAR (1727772)
//AIMAN HAZIQ BIN HAIRI (1728083)

import React, { Component } from 'react';
 
import { StyleSheet, Text, View, Alert } from 'react-native';
 
export default class App extends Component<{}> {
 
  ewallet=(item)=>{
 
    Alert.alert(item);
 
  }
 
 render() { //Using array to store unlimited data. Every variable is design to have empty space, this is because it will automatically receives the data from users and fill up the storage.
 
  var name = [ " " ] //The data that stores the each name of users
  var store_balance = [ " " ]; //The data that stores the amount of the balance that is always reflected for each transaction
  var payment = [ " " ]; //The data that stores the type of payment that is selected by user for each transaction
  var transactionDate = [ " " ]; //The data that stores the date of transaction that is made by user
  var remainingAmount = [ " " ]; //The data that stores the remaining amount of monthly transaction that is calculated and produces by the end of each month
 
   return ( //User can view the data that is stored
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
//CSS part
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
