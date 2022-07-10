/* api
url: https://tony-json-server.herokuapp.com/api/users
github: https://github.com/nhattruongniit/tony-json-server
*/

// validate
function validateEmail(mail) {
  // regex expression
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase()); // return true || false
}

const loading = document.getElementById('loading');
loading.style.display = 'none';

window.addEventListener('load', () => {
  // init variables
  let listUsers = [];

  // fetch list Users
  fetch('https://tony-json-server.herokuapp.com/api/users', {
    method: 'GET'
  })
  .then(res => res.json())
  .then(res => {
    listUsers = res.data
  })

  // lgoin html
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const msgEmail = document.getElementById('msgEmail');
    const msgError = document.getElementById('msgError');

    msgEmail.innerHTML = '';
    msgError.innerHTML = '';

    // validate value
    if (email === '') {
      msgEmail.innerHTML = `Please input email`;
      return;
    }
    if (!validateEmail(email)) {
      msgEmail.innerHTML = 'Email is invalid';
      return;
    }
    
    loading.style.display = 'block';

    // check email exist
    const account = listUsers.find(user => user.email === email && user.password === password);
    if (!account) {
      msgError.innerHTML = `Email doesn't exist. Please register.`;
      return;
    }
    // login success
    loading.style.display = 'none';

    const user = {
      id: account.id,
    }
    window.localStorage.setItem('users', JSON.stringify(user));
    window.location.href = './index.html';
  })
})



// function fetchIssues() {
//   const issues = JSON.parse(localStorage.getItem('tasks')) || [];

//   console.log('fetchIssues: ', issues)
//   if (issues.length <= 0) return;
  
//   const issueList = document.getElementById("issues");
//   issueList.innerHTML = '';
//   for(let i = 0; i < issues.length; i++) {
//     const id = issues[i].id;
//     const desc = issues[i].description;
//     const severity = issues[i].severity;
//     const assignTo = issues[i].assignTo;
//     const status = issues[i].status;

//     // es6+ : template literal
//     issueList.innerHTML += `
//       <p class="id-title">Issue ID: <span class="id">${id}</span></p>
//       <button class="btn btn-info">${status}</button>
//       <div class="issue-name">${desc}</div>
//       <div class="severity">
//         <img src="https://img.icons8.com/pastel-glyph/64/000000/clock--v1.png"/>
//         <span class="issue-level"> ${severity}</span>
//       </div>
//       <div class="assign">
//         <img src="https://img.icons8.com/ios-glyphs/26/000000/user-male.png"/>
//         <span class="issue-assign"> ${assignTo}</span>
//       </div>
//       <button class="btn btn-warning">Close</button>
//       <button class="btn btn-danger" onClick={handleDelete(${id})}>Delete</button>
//     `
//   }
// }

// function saveIssue(e) {
//   e.preventDefault();
//   const listIssues = localStorage.getItem('tasks');
//   const id = Date.now();
//   const description = document.getElementById('description').value.trim();
//   const severity = document.getElementById('severity').value;
//   const assignTo = document.getElementById('assignTo').value.trim();
//   const status = 'Open';

//   const issue = {
//     id,
//     description,
//     severity,
//     assignTo,
//     status
//   }

//   // check if don't have localstorage
//   if (listIssues === null) {
//     const issues = [];
//     issues.push(issue);
//     localStorage.setItem('tasks', JSON.stringify(issues));
//   } else {
//     // has localstorage
//     const issues = JSON.parse(localStorage.getItem('tasks'));
//     issues.push(issue);
//     localStorage.setItem('tasks', JSON.stringify(issues));
//   }
//   fetchIssues();
// }

// const formIssue = document.getElementById('formIssue');
// formIssue.addEventListener('submit', saveIssue);

// fetchIssues();

// function handleDelete(id) {
//   const issues = JSON.parse(localStorage.getItem('tasks')) || [];
//   // delete by index of array
//   // issues.splice(index, 1);
//   const newIssues = issues.filter(item => item.id !== id);
//   localStorage.setItem('tasks', JSON.stringify(newIssues));
//   fetchIssues();
// }