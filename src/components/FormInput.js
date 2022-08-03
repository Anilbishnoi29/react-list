import { React,useState } from "react";
import './ComponentStyle.css';
const FormInput = () => {
    const [inputValue,setValue] = useState("");
    const [emailValue,setValueEmail] = useState("");
    const inputValueChange = event => {
        setValue(event.target.value);
    };
    const emailValueChange = event => {
        setValueEmail(event.target.value);
    };
    return (
        <div className="ComponentStyle">
            <h1>Form Component</h1>
            <div className="formControl">
                <label>Name: </label> <input value={ inputValue } onChange={ inputValueChange } />
            </div>
            <div className="formControl">
                <label>Email: </label> <input type={ 'email' } value={ emailValue } onChange={ emailValueChange } required />
            </div>
        </div>
    );
};
export default FormInput;