import React from "react";
import axios from "../../axios-orders";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

import './Account.css'


class Account extends React.Component {
    state = {
        form: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'name...',
                },
                value: '',
                validation: {
                    required: true,

                },
                valid: false,
                used: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'email...',
                },
                value: '',
                validation: {
                    required: true,

                },
                valid: false,
                used: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password...',
                },
                value: '',
                validation: {
                    required: true,

                },
                valid: false,
                used: false
            }
        }
    }


    checkValidation = (value, roles) => {
        let isValid = false

        if (roles.required) {
            isValid = value.trim() !== ''
        }

        return isValid
    }



    submitHandler = (event) => {
        event.preventDefault();
        const formData = {

        }

        for (let item in this.state.form) {
            formData[item] = this.state.form[item].value
        }

        axios.post('/account.json', formData)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }



    inputChangeHandler = (event, inputElement) => {
        const updatedForm =  {
            ...this.state.form
        }

        const updatedElement = {
            ...updatedForm[inputElement]
        }

        updatedElement.value = event.target.value

        updatedElement.valid = this.checkValidation(updatedElement.value, updatedElement.validation)

        updatedElement.used = true



        updatedForm[inputElement] = updatedElement

        this.setState({ form: updatedForm })
    }



    render() {
        const elementsArray = []

        for(let item in this.state.form) {
            elementsArray.push({
                id: item,
                config: this.state.form[item]
            })
        }

        return (
            <div className="account">
                <h2>Account</h2>
                <form onSubmit={this.submitHandler}>
                    {elementsArray.map((item) => {
                        return (
                            <Input 
                            key={item.id} 
                            elementType={item.config.elementType} 
                            elementConfig={item.config.elementConfig}
                            value={item.config.value}
                            invalid={!item.config.valid}
                            used={item.config.used}
                            change={(event) => this.inputChangeHandler(event, item.id)}
                            />
                        )
                    })}
                    <Button btnType="form">Submit</Button>
                </form>
            </div>
        )
    }
}


export default Account

