import httpRequest from "services/httpRequest";

// login user
export function loginUser(email, password){
  const bodyData = {
    email,
    password
  };

  return httpRequest.post('/user/login', bodyData, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}