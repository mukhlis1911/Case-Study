export default class App extends Component {  
    constructor() {  
        super();  
        this.state = {
          
          price: '',
          discount: 0.1,
        };  
    }

    countDiscount(){

        let pr = this.state.price;
        var day = new Date();
        var hr = day.getHours();
        var discount=0.1;

        if (hr >= 12 && hr < 14 ){

            var value = pr-(pr*discount);
        }
            else if (hr >= 17 && hr < 19){

                var value = pr-(pr*discount);
            }

            else {
                var value = pr;
            }
        
        this.setState({
            totalvalue = value
        });
    }
} 
