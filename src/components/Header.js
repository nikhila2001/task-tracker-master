import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd,showAdd}) => {
 

  return (
  <header className='header'>
   <h1>{title}</h1>
   { <Button  color = {showAdd ? 'red' : 'green'} text= {showAdd ?
   'Close' : 'Add'} onClick={onAdd} /> }
  </header>  
  )
}
// Default props for Header component
Header.defaultProps = {
  title:"Task Tracker",
}
// Prop types for Header component
Header.propTypes = {
  title:PropTypes.string.isRequired
}

// //css in js
// const headingStyle = {
//   color:'orange',
//   backgroundColor:"black",
// }
export default Header