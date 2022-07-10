import React, {useState, useEffect} from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import {Link, Route} from 'react-router-dom'

export default function Register() {
  const [todos, setTodos] = useState([]);
    const [forms, setForms] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        passwordConfirm:''
    })
    const [isErrorFirstName, setIsErrorFirstName] = useState(false);
    const [isErrorLastName, setIsErrorLastName] = useState(false)
    const [isErrorEmail, setIsErrorEmail] = useState(false)
    const [isErrorPassword, setIsErrorPassword] = useState(false)
    const [isErrorPasswordConfirm, setIsErrorPasswordConfirm] = useState(false)

    function onChange(event) {
        const {name,value} = event.target;
        setForms({
            ...forms,
            [name] : value
        })
    }

    // fetchTodos
    const fetchTodos =  async () => {
      const res = await fetch(`https://tony-json-server.herokuapp.com/api/users`, {
          method:'GET',
      })
      const data = await res.json();  
      setTodos(data.data);
  }   

    useEffect(() => {      
      fetchTodos();
    },[])

    async function handleSubmit() {
      if (forms.firstName === '') {
        setIsErrorFirstName(true);
      }
      if (forms.lastName === '') {
        setIsErrorLastName(true);
      }
      if (forms.email === '') {
        setIsErrorEmail(true)
      }
      if (forms.password === '') {
        setIsErrorPassword(true)
      }
      if (forms.passwordConfirm === '') {
        setIsErrorPasswordConfirm(true)
      }
      const newUser = {
        id: Date.now().toString(),
        firstName:forms.firstName,
        lastName:forms.lastName,
        email:forms.email,
        password:forms.password,
        passwordConfirm:forms.passwordConfirm
      }
      const res = await fetch(`https://tony-json-server.herokuapp.com/api/users`, {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      const data = await res.json();
      setTodos([...todos, data.data])

    }

    return(
        <div className="login-page">
            <h2>REGISTER</h2>
            {forms.password.length < 6 && <div className="text-danger">Password must be at least 6 characters.</div>}
            {forms.password.length > 5 && <div className="text-success">✓ Password must be at least 6 characters.</div>}
            {((forms.password === "" && forms.passwordConfirm === "") || forms.password !== forms.passwordConfirm) && <div className="text-danger">Password and Confirm Password do not match</div>}
            {((forms.password !== "" && forms.passwordConfirm !== "") && forms.password === forms.passwordConfirm) && <div className="text-success">✓ Password and Confirm Password do not match</div>}
            <br/>
            <Form>
            <FormGroup>
                    <Input type="text" name="firstName" id="firstName" value={forms.firstName} onChange={onChange} placeholder="First Name"/>
                    {isErrorFirstName && <div className="text-danger">Please enter first name</div>}
                </FormGroup>
                <br/>
                <FormGroup>
                    <Input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={onChange} value={forms.lastName}/>
                    {isErrorLastName && <div className="text-danger">Please enter last name</div>}
                </FormGroup>
                <br/>
                <FormGroup>
                    <Input type="email" name="email" id="email" placeholder="Email" onChange={onChange} value={forms.email}/>
                    {isErrorEmail && <div className="text-danger">Please enter email</div>}
                </FormGroup>
                <br/>
                <FormGroup>
                    <Input type="password" name="password" id="password" placeholder="Password" onChange={onChange} value={forms.password}/>
                    {isErrorPassword && <div className="text-danger">Please enter password</div>}
                </FormGroup>
                <br/>
                <FormGroup>
                    <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirm Password" onChange={onChange} value={forms.passwordConfirm}/>
                    {isErrorPasswordConfirm && <div className="text-danger">Please enter password confirm</div>}
                </FormGroup>

                <br/>
                <Button type="button" color="success" onClick={handleSubmit}>Register</Button>
            </Form>
            <br/>
            <Link to="/login">Already have an account? Log in</Link>
            <Route exact path ="/login"></Route>
        </div>
    )
}