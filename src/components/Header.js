import PropTypes from 'prop-types'
import Button from './Button';
const Header = (props) => {
    const onClick = (e) => {
        console.log(e)
    };
    return (
        <header className="">
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-blue-500 text-2xl">{props.title}</h1>
                <Button onClick={onClick}/>
            </div>
            <hr className="text-gray-800 w-full my-4"/>
        </header>
    )
}

Header.defaultProps = {
    "title": "Task tracker"
};
Header.propTypes= {
    "title": PropTypes.string.isRequired
};

export default Header
