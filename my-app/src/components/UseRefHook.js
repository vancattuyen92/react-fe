import React, { useRef, useEffect, useState } from 'react'


function UseRefHook() {
  //given
  const [name, setName] = useState('truong')
  const [isEdit, setIsEdit] = useState(false)
  const titleRef = useRef()
  const isFlag = useRef(false);
  
  // when
  function handleEdit() {
    setIsEdit(true)
  }

  useEffect(() => {
    if(!isEdit) return;
    titleRef.current.focus()
    titleRef.current.setSelectionRange(0, titleRef.current.value.length)
  }, [isEdit])

  // skip run useEffect in first render
  useEffect(() => {
    if(!isFlag.current) {
      isFlag.current = true;
      return;
    };
    console.log('run useEffect next re-rendering')
  }, [isEdit])

  function onChangeName(event) {
    const { value } = event.target;
    setName(value)
  }

  function handleSubmit() {
    setIsEdit(false);
  }


  // then
  return (
    <div>
      Title: {!isEdit && name}
      {isEdit && (
        <input 
          ref={titleRef} 
          defaultValue={name} 
          type="text" 
          onChange={onChangeName}
        /> 
      )}

      <br />
      <button type="button" onClick={handleEdit}>Edit</button>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UseRefHook

/*
- start UI -> hidden input, show title -> user click Edit button -> show input, hide text, focus input, selection input



*/

