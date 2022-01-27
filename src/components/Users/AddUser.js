import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isError, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'The age must be greater than 0!'
            });
            return;
        }
        const randKey = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        props.onAddUser(enteredUsername,enteredAge, randKey);
        console.log(enteredUsername, enteredAge,randKey);
        setEnteredUsername('');
        setEnteredAge('');
    }
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
        
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
        
    };
    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>
        {isError && <ErrorModal title={isError.title} message={isError.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id="username" value={enteredUsername}type="text" onChange={usernameChangeHandler}></input>
                <label htmlFor='age'>Age (Years)</label>
                <input id="age" value={enteredAge} type="number" onChange={ageChangeHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>

        )
}

export default AddUser;