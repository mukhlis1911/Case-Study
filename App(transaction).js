import { Alert } from "react-native"
 
transaction = () => {
   this.setState {balance: Number((
      this,state.balance-price
   ))} () => {
      if(this.state.balance < price){
         Alert.alert('You have insufficient balance ! Please reload your e-Wallet.');
       } else if(this.state.balance == price){
          Alert.alert('Transaction successful. Your balance is RM 0.00! Please reload your e-Wallet for next purchase.');
       } else if(this.state.balance > price){
          Alert.alert('Transaction successful. Your current balance is $("#balance") ');
       }
      }
   }

;

let payment =(price,currentBalance,newBalance) =>{
   this.price= price;
   this.currentBalance = currentBalance;
   this.newBalanace = newBalance;
}

var newPayment = new payment();
let payment = {
   price: 10.00,
   display:()=>{
      console.log(this.price);
   }
}
