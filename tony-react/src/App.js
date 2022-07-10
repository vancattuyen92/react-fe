import { Fragment, useState, useCallback } from 'react';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';

// components
import SampleScores from './SampleScores';
import LearnProps from './LearnProps';
import LearnStateHooks from './LearnStateHooks';
import Button from './components/Button';
import StatefulComponent  from './components/StatefulComponent';
import HanldeEvent  from './components/HandleEvent';
import ConditionRendering from './components/ConditionRender';
import LifitingStateUp from './components/LifitingStateUp';
import Forms from './components/Forms';
import UseEffectHook from './components/UseEffectHook';
import BooksStore from './components/BooksStore/BooksStore';
import UseReducerCounter from './components/UseReducerCounter/UseReducerCounter';
import UseRefHook from './components/UseRefHook';
import MemoHook from './components/MemoHook';
import About from './ReactRouter/About';
import Policy from './ReactRouter/Policy';
import Term from './ReactRouter/Term';
import Layout from './ReactRouter/Layout';
import Post from './ReactRouter/Posts';
import PostDetail from './ReactRouter/PostDetail';
import User from './ReactRouter/User';
import UserDetail from './ReactRouter/UserDetail';
// import AuthenticateRoute from './AuthenticateRoute/AuthenticateRoute';


// Sample App
import ComposeComponent from './ComposeComponent/ComposeComponent';

// context
import { BooksProvider } from './context/BooksContext';

// hooks
import useResizeWindow from './hooks/useResizeWindow';

const dataUsers = {
  firstName: 'nguyen',
  lastName: 'tony'
}

function App() {
  const [countMemo, setCountMemo] = useState(0);
  const { isSmallScreen } = useResizeWindow(true);
  
  // firstRender -> memory A
  // next render -> memory B

  const books = { 
    title: 'harry potter',
    price: 10
  };
  //  const books =  "test memo"

  const [isMountTodos, setIsMountTodos] = useState(true)
  // way 1 element:
  const element = <h1>hello word</h1>;
  // way 2 element:
  const element_2 = (
    <h1>hello word</h1>
  )

  const num = 2 + 2;
  const formatUsers = (users) => {
    return `${users.lastName} ${users.firstName}`
  }

  const renderGetting = user => {
    if(user) {
      return (
        <Fragment>
          <div>Hello {user}</div>
          <div>Hello 2 {user}</div>
          <div>Hello 3 {user}</div>
        </Fragment>
      )
    }

    return (
      <div>hello strange</div>
    )
  }

  const handleTitleBook = useCallback(() => {
    console.log('handleTitleBook')
  }, [])
  // first render: memory A
  // next render: memory A
 
  return (
    <div>
      <h3> React Router </h3>
      <nav>
        <ul className="react-router">
          <li>
            {/* <Link to="/" activeClassName="active">Sample Score</Link> */}
            <NavLink to="/sample-score">Sample Score</NavLink> |
            <Link to="/about">About </Link> |
            <Link to="/term">Term</Link> |
            <Link to="/policy">Policy</Link>  |
            <Link to="/post">Post</Link>  |
            <Link to="/user">User</Link>
            {/* <Link to="/authenticate">Authenticate Route</Link> */}
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/sample-score" component={SampleScores} />
        <Route exact path="/about" render={() => <Layout><About/></Layout>} />
        <Route 
          exact 
          path="/term"
          children={() => (
            <Layout><Term /></Layout>
          )}
        />
        <Route exact path="/policy" component={Policy} />
        <Route exact path="/post/:id" component={PostDetail} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/user/:id" component={UserDetail} />
        <Route exact path="/user" component={User} />
        {/* <Route path="/authenticate" component={AuthenticateRoute} /> */}
      </Switch>
     


      <br /> <br /> <br />
      ---------------------------------
      <br /> <br />
      this is app {element} <br/> {element_2}
      {num}
      <br />
      {formatUsers(dataUsers)}

      
      {renderGetting('tuyen')}

      <img src="abc" className="image_default" alt="docs" />

      <br />

      <h3 
        style={{ 
          color: '#f00', 
          fontSize: '18px', 
          fontWeight: 'bold' 
        }}
      >
        Render JSX with React function component
      </h3>

      <LearnProps 
        firstName="truong" 
        lastName="tony"
        className="learn-props"
        gender="male"
      />

      <LearnStateHooks />
      <StatefulComponent />

      <Button />
      <Button text="tuyen" />
      <Button text="minh" />

      <h1>Sample App</h1>
      <ComposeComponent />

      -----------------------------
      <h1>HandleEvent</h1>
      <HanldeEvent />

      ---------------------------
      <h1>Conditional Rendering</h1>
      <ConditionRendering />

      ------------------------
      <h1>Lifiting State Up</h1>
      <LifitingStateUp />

      --------------------------------------------------------------------
      <h2>Forms</h2>
      <Forms />

      --------------------------------------------------------------------
      <h2>useEffect hooks</h2>
      {isMountTodos && <UseEffectHook /> }

      <button type="button" onClick={() => setIsMountTodos(prevState => !prevState)}>mount todos</button>
      <br />
      --------------------------------------------------------------------
      <h2>useContext</h2>
      <h3>Books Store</h3>

      <BooksProvider>
        <BooksStore />
      </BooksProvider>

      --------------------------------------------------------------------
      <h2>useReducer</h2>
      <h3>Counter</h3>
      <UseReducerCounter />

      --------------------------------------------------------------------
      <h2>useRef hooks</h2>
      <UseRefHook />

      --------------------------------------------------------------------
      <h2>memo hooks</h2>
      countMemo: {countMemo}
      <button type="button" onClick={() => setCountMemo(prevState => prevState + 1)}>increment counter</button>
      <MemoHook title="truong" handleTitleBook={handleTitleBook}  />

      --------------------------------------------------------------------
      <h2>custom hook resize window</h2>
        
      {isSmallScreen ? <h2>small screen</h2> : <h2> large screen</h2>}

    </div>
  )
  
}

export default App;
