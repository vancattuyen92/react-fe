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
//import About from './ReactRouter/About';
import Term from './ReactRouter/Term';
import Policy from './ReactRouter/Policy';
import Contact from './ReactRouter/Contact'
import Company from './ReactRouter/Company'

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
      {/* <nav>
        <ul>
          <li>
            <Link to="/sample-sccore">Sample Score</Link>
          </li>
        </ul>
      </nav>

      <Route path ="/sample-score" component={SampleScores}/> */}

      <nav>
        <ul>
            <Link to="/"></Link>
            <br/>
            <br/>
            <Link to="/sample-scores">Sample Scores</Link>
            <br/>
            <br/>
            <Link to="/react-props">Learn React Props</Link>
            <br/>
            <br/>
            <Link to="/state-hook">Learn State Hook</Link>
            <br/>
            <br/>
            <Link to="/stateful-component">Stateful Component</Link>
            <br/>
            <br/>
            <Link to="/compose-compenent">Compose Component</Link>
            <br/>
            <br/>
            <Link to="/handle-event">Handle Event</Link>
            <br/>
            <br/>
            <Link to="/conditional-rendering">Conditional Rendering</Link>
            <br/>
            <br/>
            <Link to="/lifting-state">Lifting State Up</Link>
            <br/>
            <br/>
            <Link to="/forms">Forms</Link>
            <br/>
            <br/>
            <Link to="/useEffect">useEffect Hooks</Link>
            <br/>
            <br/>
            <Link to="/useContext">useContext</Link>
            <br/>
            <br/>
            <Link to="/useReducer">useReducer</Link>
            <br/>
            <br/>
            <Link to="/useRef">useRef Hooks</Link>
            <br/>
            <br/>
            <Link to="/memo-hooks">memo Hooks</Link>
            <br/>
            <br/>
            <Link to="/custom-hook">custom hook resize window</Link>
            <br /><br />
            <Link to="/about">About</Link>
            <br /><br />
            <Link to="/term">Term</Link>
            <br /><br />
            <Link to="/policy">Policy</Link>
        </ul>
      </nav>
      <Switch>
        {/* <Route exact path="/" component={}/> */}
        <Route exact path="/sample-scores" component={SampleScores}/>
        <Route exact path="/react-props" component={() => 
          <LearnProps firstName={"truong"} lastName={"tony"} className={"learn-props"} gender={"male"}/>
        }/>
        <Route exact path="/state-hook" component={LearnStateHooks}/>
        <Route exact path="/stateful-component" component={StatefulComponent}/>
        <Route exact path="/compose-compenent" component={ComposeComponent}></Route>
        <Route exact path="/handle-event" component={HanldeEvent }/>
        <Route exact path="/conditional-rendering" component={ConditionRendering}/>

        <Route exact path="/lifting-state" component={LifitingStateUp}/>
        <Route exact path="/forms" component={Forms}/>
        <Route exact path="/useEffect" component={() => {isMountTodos && <UseEffectHook/>}}><button type="button" onClick={() => setIsMountTodos(prevState => !prevState)}>mount todos</button></Route>
        <Route exact path="/useContext" component={() => (<BooksProvider><BooksStore/></BooksProvider>)}/>
        <Route exact path="/useReducer" component={UseReducerCounter}/>
        <Route exact path="/useRef" component={UseRefHook}/>
        <Route exact path="/memo-hooks" component={countMemo}>
          <button type="button" onClick={() => setCountMemo(prevState => prevState + 1)}>increment counter</button>
          <MemoHook title="truong" handleTitleBook={handleTitleBook}  />
        </Route>
        <Route exact path="/custom-hook" component={useResizeWindow}>{isSmallScreen ? <h2>small screen</h2> : <h2> large screen</h2>}</Route>
        <Route path='/term' component={Term}/>
        <Route path='/policy' component={Policy}/>
        <Route path='/about/company' component={Company}/>
        <Route path='/about/contact' component={Contact}/>
        <Route path='/about' component={About}/>
      </Switch>

{/* 
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

      <SampleScores/>
      <LearnProps 
        firstName="truong" 
        lastName="tony"
        className="learn-props"
        gender="male"
      />

      <LearnStateHooks />
      <StatefulComponent />

      <Button/>
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
        
      {isSmallScreen ? <h2>small screen</h2> : <h2> large screen</h2>} */}
      --------------------------------------------------------------------
    </div>
  )
}

export default App;

function About() {
  return (
    <div>
      This is About
      <aside>
        <Link to="/about/company">Company</Link>
        <Link to="/about/contact">Contact</Link>
      </aside>
    </div>
  )
}