import './button.styles.scss';

const Button = ({children, buttonType = 'baseButton', ...otherProps}) => {
    // const buttonClass = getButton(buttonType);
    return(
        <button className={buttonType} {...otherProps}>{children}</button>
    )
}

export default Button;