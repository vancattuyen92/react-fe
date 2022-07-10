import React from 'react'

function Forms() {
  const [forms, setForms] = React.useState({
    firstName: '',
    lastName: '',
    gender: ''
  });
  const [isErrorFirstName, setIsErrorFirstName] = React.useState(false);

  function onChange(event) {
    const { name, value } = event.target;
    setForms({
      ...forms,
      [name]: value
    })
  }

  function handleSubmit() {
    if(forms.firstName === '') {
      setIsErrorFirstName(true);
    }
  }

  return (
    <div>
      First Name: <input type="text" name="firstName" value={forms.firstName} onChange={onChange} />
      <br />
      {isErrorFirstName && <div>please enter first name</div>}
      <br/>
      Last Name: <input type="text" name="lastName" value={forms.lastName} onChange={onChange} />
      <br />
      Gender:
      <select value={forms.gender} name="gender" onChange={onChange}>
        <option disabled value="">Please choose</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Forms
