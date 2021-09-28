import PropTypes from 'prop-types';

const Button = ({style, text, onClick}) => {
    const styleMap = {
        primary: "bg-blue-800 text-white hover:bg-blue-900"
    };
    const activeStyle = styleMap[style] ? styleMap[style]: 'primary'; 
    return (
        <button onClick={onClick} className={`rounded px-4 py-2 ` + activeStyle}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    "text": "Button Label",
    "style" : "primary"
};
Button.propTypes = {
    "onClick" : PropTypes.func
};
export default Button
