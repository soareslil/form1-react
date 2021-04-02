import React from 'react';
import LoginInput from './LoginIunput';

class LoginForm extends React.Component {
constructor(){
super();

this.state ={
    login: '',
    password: '',
    };
    handleChange = (event) =>{
    this.setState({
    [event.target.name]: event.target.value,
    });
    }
    handleSubmit = (event) =>{
    event.preventDefault();
    alert('login funcionou');
    }   