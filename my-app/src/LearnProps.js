// way1: normal 
// export default function LearnProps(props) {
//   return (
//     <div>
//       <h2>Learn React Props</h2>
//       <div>My name: {props.lastName} {props.firstName} </div>
//     </div>
//   )
// }

// way2: destructuring props
// export default function LearnProps({ firstName, lastName, gender, className}) {
//   return (
//     <div>
//       <h2>Learn React Props</h2>
//       <div>My name: {lastName} {firstName} </div>
//     </div>
//   )
// }

// way3: destructuring + rest props
import myStyles from './myStyle2.module.css';

export default function LearnProps({ firstName, lastName, ...props}) {
  console.log('rest props: ', props)
  return (
    <div>
      <h2 className={myStyles.title}>Learn React Props</h2>
      <div>My name: {lastName} {firstName} </div>
    </div>
  )
}



