import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {
  return <button onClick={onClick} style={{backgroundColor:color}} className='btn'>{text}</button>
}
// Default props for Button component
Button.defaultProps = {
  color:"steelblue"
}

// Prop types for Button component
Button.protoTypes = {
  text:PropTypes.string,
  color: PropTypes.string,
  onClick:PropTypes.func,
}
export default Button