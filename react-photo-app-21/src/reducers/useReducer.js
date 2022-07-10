// initial state
const initialState = {
    user: null
  }
  
  // create reducer
  const userReducer = (state = initialState, { type, payload }) => {
    switch(type) {
      default: {
        return state
      }
    }
  }
  
  export default userReducer;