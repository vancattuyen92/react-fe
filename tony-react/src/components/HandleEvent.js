import React, {useState} from 'react'

function HandleEvent() {
  const [count] = useState(1);

  function handleShoot(item) {
    console.log('handleShoot: ', item)
  }

  // curry function - 1 function return another function
  // 1. arrow function
  // const handleShoot_2 = (item) => () => {
  //   console.log('handleShoot_2: ', item)
  // }

  // 2. normal function
  function handleShoot_2(item) {
    return function() {
      console.log('handleShoot_2: ', item)
    }
  }


  return (
    <div>
      <ul>
        <li>item 1 <button type="button" onClick={() => handleShoot('item 1')}>Click item 1</button></li>
        <li>item 2 <button type="button" onClick={() => handleShoot('item 2')}>Click item 2</button></li> 
        <li>item 3 <button type="button" onClick={() => handleShoot('item 3')}>Click item 3</button></li>
        <li>item 4 <button type="button" onClick={handleShoot_2('item 4')}>Click item 4</button></li>
      </ul>
      click count: {count}
    </div>
  )
}

export default HandleEvent
