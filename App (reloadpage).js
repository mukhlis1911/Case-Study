//Izzat Izzqy bin Jasme
//1722563
//case study number 5

import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';


  
export default class App extends Component {  
    constructor() {  
        super();  
        this.state = {
          balance:0
        };  
    }  

    debitReload()
    {

      var amount=parseInt(this.state.text);
      var bal=parseInt(this.state.balance);
      var total_after_debit = (amount + bal);
      this.setState({

        balance: total_after_debit

        });

      alert('Your Debit Card is charged and you are good to go!');
    }

    creditcardReload()
    {

      var amount=parseInt(this.state.text);
      var bal=parseInt(this.state.balance);
      var total_after_credit = amount + bal + 0.5; //cashback 50 cents

      this.setState({

          balance: total_after_credit

          });
      alert('Your Debit Card is charged and you are good to go! \n Congratulation, you just got cashback value of RM0.50!');
    }


  

    
    render() {  
        return (  
          

  <View style={styles.container}>  

             <Text style={styles.header}>Reload Your Balance! {""} </Text>

             <Text
             value={this.state.balance}
             >{"\n"}Current balance: RM {this.state.balance}</Text>
             <TextInput
                  style={styles.textinput}
                  numeric value
                  value={this.state.text}
                  keyboardType= 'numeric'
                  placeholder="Enter amount: "  
                  onChangeText={text => this.setState({text})}
              />
            <View style={{flexDirection: "row"}}>
              <View style={styles.button}> 
                <Button style={styles.button} onPress={() => {this.debitReload()}}
                  title='pay via Debit Card' 
                />
              </View> 
              <View style={styles.button}> 
                <Button style={styles.button} onPress={() => {this.creditcardReload()}}
                  title="Pay via Credit Card" 
                />    
              </View>         
            </View>  
</View>  

        );  
    }  
}  

const styles = StyleSheet.create({ 
  container: {
  flex: 1,
  justifyContent: 'flex-start', 
  alignItems: 'center', 
  backgroundColor: '#c5e7eb',

  }, 
  
  header: {
    marginTop: 60,
 fontSize: 30, 
 textAlign: 'center', 
 margin: 10,
 marginBottom: 10,
 },
 
 contents: {
 textAlign: 'center', 
 color: '#1a2526', 
 marginBottom: 5,
 },

 textinput: {

  height: 40, 
  width: 300,
  textAlign: 'center',
  borderColor: 'black', 
  borderWidth: 0.5 ,
  marginBottom: 20
 },

 button: {

  height: 10, 
  width: 200,
  marginTop: -10,
  padding: 2
 
 }
})
