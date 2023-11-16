import React from "react";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

import './Account.css'


class Account extends React.Component {
    render() {
        return (
            <div className="account">
                <h2>Account</h2>
                <form>
                    <Input type="text" placeholder="Name..." />
                    <Input type="text" placeholder="Email..." />
                    <Input type="password" placeholder="Password..." />
                    <Button btnType="form">Submit</Button>
                </form>
            </div>
        )
    }
}


export default Account

