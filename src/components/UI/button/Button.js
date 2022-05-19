import './Button.css'

function Button(props) {
    const classes = 'button '+ props.className;
    // const wrapperClasses = 'button__wrapper '+ props.className;
    
    return (
        <div className="button__wrapper">
            <button className={classes}>{props.children}</button>
        </div>
    );
}

export default Button;