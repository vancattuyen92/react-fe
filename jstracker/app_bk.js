const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || []


// ADD TASK
const addTask = (obj) => {
  const taskItem = document.createElement('div')
  taskItem.className = 'box task-item'

  let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
  
  const idTitle = document.createElement('span')
  idTitle.innerHTML = 'Issue ID: '
  idTitle.className = 'id-title'

  const idNum = document.createElement('span')
  idNum.innerHTML = guid ()
  idNum.className = 'id'

  linebreak = document.createElement("br");

  const btnInfo = document.createElement('button')
  btnInfo.className = 'btn btn-info'
  btnInfo.textContent = 'Open'

  const issueName = document.createElement('div')
  issueName.textContent = obj.value
  issueName.className = 'issue-name'

  const imgLevel = document.createElement('img')
  imgLevel.src = "https://img.icons8.com/pastel-glyph/64/000000/clock--v1.png"

  const issueLevel = document.createElement('span')
  issueLevel.textContent = obj.level
  issueLevel.className = 'issue-level'
     // CHANGE SEVERITY'S TEXT COLOR
  issueLevel.addEventListener('change', function() {
    if (issueLevel.textContent === 'Medium') {
      issueLevel.style.color = 'yellow'; 
    }
    if (issueLevel.textContent === 'High') {
      issueLevel.style.color = 'red'; 
    }
  });
 

  const div = document.createElement('div')
  div.className = 'div'

  const imgAssign = document.createElement('img')
  imgAssign.src = "https://img.icons8.com/ios-glyphs/26/000000/user-male.png"

  const issueAssign = document.createElement('span')
  issueAssign.textContent = obj.assign
  issueAssign.className = 'issue-assign'

  const div1 = document.createElement('div')
  div.className = 'div1'

  const btnClose = document.createElement('button')
  btnClose.className = 'btn btn-warning'
  btnClose.textContent = 'Close'

  const btnDelete = document.createElement('button')
  btnDelete.className = 'btn btn-danger'
  btnDelete.textContent = 'Delete'

  btnDelete.addEventListener('click', (event) => {
    taskItem.remove()
    const tasks = getTasks()
    const index = tasks.findIndex((taskItem) => taskItem === obj.id)
    taskItem.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  })

  btnClose.addEventListener('click', (event) => {
    btnInfo.innerHTML = 'Closed'
  })



  taskItem.appendChild(idTitle)
  taskItem.appendChild(idNum)
  taskItem.appendChild(linebreak)
  taskItem.appendChild(btnInfo)
  taskItem.appendChild(issueName)
  taskItem.appendChild(imgLevel)
  taskItem.appendChild(issueLevel)
  taskItem.appendChild(div)
  taskItem.appendChild(imgAssign)
  taskItem.appendChild(issueAssign)
  taskItem.appendChild(div1)
  taskItem.appendChild(btnClose)
  taskItem.appendChild(btnDelete)
  document.querySelector('.task').appendChild(taskItem)
}

// SUBMIT
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  //const id = document.querySelector('.id')
  const value = document.querySelector('.form-name').value.trim()
  const level = document.querySelector('.form-select').value
  const assign = document.querySelector('.form-assign').value.trim()
  if (value && level && assign) {
    const item = {
      //id: newDate().toISOString(),
      //id,
      value,
      level,
      assign
    }
    const tasks= getTasks()
    tasks.push(item)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    addTask(item)
    document.querySelector('.form-name').value = ''
    document.querySelector('.form-select').value = 'Low'
    document.querySelector('.form-asign').value = ''
  }
})

//DELETE ALL
document.querySelector('.btn-delete-all').addEventListener('click', event => {
 //document.querySelector('.tasks').innerHTML = ''
  localStorage.removeItem('tasks')
}) 

//INIT
getTasks().forEach((taskItem) => {
  addTask(taskItem)
})
