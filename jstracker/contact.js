/* api
url: https://tony-json-server.herokuapp.com/api/users
github: https://github.com/nhattruongniit/tony-json-server
*/

const loading = document.getElementById('loading');
loading.style.display = 'none';

window.addEventListener('load', () => {
  const getUser = window.localStorage.getItem('users');
  const user = JSON.parse(getUser);
  
  
  // fetch user
  fetch(`https://tony-json-server.herokuapp.com/api/users/${user.id}`)
    .then(res => res.json())
    .then(res => {
      const firstName = document.getElementById('firstName');
      const lastName = document.getElementById('lastName');
      const country = document.getElementById('country');
      const subject = document.getElementById('subject');
      const data = res.data;

      firstName.value = data.firstName;
      lastName.value = data.lastName;
      country.value = data.country;
      subject.value = data.subject
    })

  // submit contact form
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const country = document.getElementById('country').value;
    const subject = document.getElementById('subject').value;

    const newUser = {
      firstName,
      lastName,
      country,
      subject
    }

    loading.style.display = 'block';
    fetch(`https://tony-json-server.herokuapp.com/api/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(_ => {
      loading.style.display = 'none';
      alert('update user successfully!');
      // show popup confirm when call api success
      // window.location.href = './login.html';
    })
  })
})
function logOut() {
  window.localStorage.clear();
}
