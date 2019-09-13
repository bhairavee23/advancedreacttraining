import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address:{
            street: '',
            postalCode: ''
        },
        loading:false,
    }
    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
         this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Bhairavee Chitnis',
                address: {
                    street: 'test street 1',
                    zipcode:'123456',
                    country:'India'
                },
                email: 'email@test.com',
            },
            deliveryMethod: 'fastest'
        }
        console.log(order);
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => this.setState({loading: false}));
    }
    render() {
        let form = <form>
                <input type="text" name="name" className={classes.Input} placeholder="Your Name"/>
                <input type="email" name="email" className={classes.Input} placeholder="Email"/>
                <input type="text" name="street" className={classes.Input} placeholder="Street"/>
                <input type="postal" name="postal" className={classes.Input} placeholder="Postal"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>;

        if(this.state.loading) {
            form = <Spinner/>
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;