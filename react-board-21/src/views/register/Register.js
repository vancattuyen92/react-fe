import React, {useState, useEffect} from 'react'

export default function Register(){
    const [todos, setTodos] = useState([])
    const [forms, setForms] = useState({
        id:'',
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        passwordConfirm:''
    })
    const [isErrorFirstName, setIsErrorFirstName] = useState(false);
    const [isErrorLastName, setIsErrorLastName] = useState(false)
    const [isErrorEmail, setIsErrorEmail] = useState(false)
    const [isErrorPassword, setIsErrorPassword] = useState(false)
    const [isErrorPasswordConfirm, setIsErrorPasswordConfirm] = useState(false)

    function onChange(event){
        const {name,value} = event.target;
        setForms({
            ...forms,
            [name]:value
        })
    }

    //fetchTodos from API https://tony-json-server.herokuapp.com/api/users
    const fetchTodos = async() => {
        const res = await fetch(`https://tony-json-server.herokuapp.com/api/users`, {
            method: 'GET'
        })
        const data = await res.json();
        setTodos(data.data)
    }

    useEffect(() => {
        fetchTodos();
    },[])
    
    //handleSubmit
    async function handleSubmit() {
        if (forms.firstname === '') {
            setIsErrorFirstName(true);
          }
          if (forms.lastname === '') {
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
            firstname: forms.firstname,
            lastname: forms.lastname,
            email: forms.email,
            password: forms.password,
            passwordConfirm: forms.passwordConfirm
        }
        const res = await fetch(`https://tony-json-server.herokuapp.com/api/users`, {
            method: 'POST',
            headers: { 
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        const data = await res.json();
        setTodos([...todos, data.data])
    }

    return (
        <div>
            <div className="register center">
                <form className="form-register">
                    <h1>REGISTER</h1>
                    {(forms.password.length < 6 && forms.password.length > 0) && <div className="empty-input-error">Password must be at least 6 characters.</div>}
                    {(forms.password !== forms.passwordConfirm && forms.passwordConfirm > 0) && <div className="empty-input-error">Password and Confirm Password do not match</div>}

                    <div><input type="text" name="firstname" placeholder="First Name" value={forms.firstname} onChange={onChange}/></div>
                    {isErrorFirstName && <div class="empty-input-error">Please enter first name</div>}
                    <div><input type="text" name="lastname" placeholder="Last Name" value={forms.lastname} onChange={onChange}/></div>
                    {isErrorLastName && <div class="empty-input-error">Please enter last name</div>}
                    <div><input type="email" name="email" placeholder="Email" value={forms.email} onChange={onChange}/></div> 
                    {isErrorEmail && <div class="empty-input-error">Please enter email</div>}            
                    <div><input type="password" name="password" placeholder="Password" value={forms.password} onChange={onChange}/></div>
                    {isErrorPassword && <div class="empty-input-error">Please enter password</div>}
                    <div><input type="password" name="passwordConfirm" placeholder="Confirm Password" value={forms.passwordConfirm} onChange={onChange}/></div>
                    {isErrorPasswordConfirm && <div class="empty-input-error">Please enter confirm password</div>}
                    <button type="button" onClick={handleSubmit}>REGISTER</button>
                    <div className="account-already" style={{marginTop: "20px"}}>Already have an account? Login.</div>
                </form>
            </div>
        </div>
        
    )
}