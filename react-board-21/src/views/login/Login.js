import React,{useState,useEffect} from 'react'


export default function Login(){
    const [users, setUsers] = useState([])
    const [forms, setForms] = useState({
        email: '',
        password: ''
    })
    const [isErrorEmail, setIsErrorEmail] = useState(false)
    const [isErrorPassword, setIsErrorPassword] = useState(false)

    function onChange(event) {
        const {name,value} = event.target
        setForms(prevState => {
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    //fetch users 
    useEffect(() => {
        async function fetchUsers() {
            const res = await fetch(`https://tony-json-server.herokuapp.com/api/users`)
            const data = await res.json()
            setUsers(data.data)
        }
        fetchUsers()
    },[])
    //const {handleSetUser} = useStateApp()
    const handleAuth = (e) => {
        e.preventDefault();
        const {email} = forms
        const user = users.find(item => item.email === email)
        //const userId = user?.id

        if (!user) {
            setIsErrorEmail(true)
        }
        alert('You have successfully logged in!' )

        //set auth
        //handleSetUser(userId)
    }
    return (
        <div>
            <div className="log-in center">
                <form className="form-login">
                    <h1>LOGIN</h1>
                    <div><input autoComplete="off" type="email" placeholder="Email" name="email" value={forms.email} onChange={onChange}/></div>  
                    {isErrorEmail && <div>Coun't find your account</div>}           
                    <div><input autoComplete="off" type="password" placeholder="Password" name="password" value={forms.password} onChange={onChange}/></div>
                    {isErrorPassword && <div>Wrong password</div>}
                    <button type="button" onClick={handleAuth}>LOGIN</button>
                </form>
            </div>
        </div>
        
    )
}

