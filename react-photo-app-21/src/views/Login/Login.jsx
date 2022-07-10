import React from 'react'
import {useHistory} from 'react-router-dom'

// apis
import * as userApi from 'apis/userApi'

function Login() {
  const history = useHistory();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const res = await userApi.loginUser('admin@gmail.com', '123456');
      const token = res.data.token;
      window.sessionStorage.setItem('accessToken', token);
      history.push('/')
    } catch (error) {
      console.log('error: ', error.response)
    }
  }

  return (
    <div class="login-form">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">Login</div>
              <div class="card-body">
                <form onSubmit={onSubmit}>
                    <div class="form-group row">
                        <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                        <div class="col-md-6">
                            <input type="text" id="email_address" class="form-control" name="email-address" required autofocus />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                        <div class="col-md-6">
                            <input type="password" id="password" class="form-control" name="password" required />
                        </div>
                    </div>
                    <div class="col-md-6 offset-md-4">
                        <button type="submit" class="btn btn-primary">
                            Login
                        </button>
                    </div>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
