import PropType from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    const onClick = ()=>{
        console.log('hi')
    }
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color= 'green' text='Hello' onClick={onClick} />
    </header>
  )
}
//CSS in JS
// const headingStyle = {color: 'red', backgroundColor:'black'};

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propType = {
    title: PropType.string.isRequired,
}

export default Header;