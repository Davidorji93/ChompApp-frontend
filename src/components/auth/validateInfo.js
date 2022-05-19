export default function validateInfo(values) {
    let errors = {}

    //firstname
    if(!values.firstName.trim()){
        errors.firstName = "First name is required"
    }

    //lastname
    if(!values.lastName.trim()){
        errors.lastName = "Last name is required"
    }

    //email
    if(!values.email){
        errors.email = "Email required"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email="Not a valid email address"
    }

    //password
    const cond1 = '(.*[a-z])';
    const cond2 = '(.*[A-Z])';
    const cond3 = "[$&+,:;=?@#|'<>.-^*()%!]"
    if(!values.password) {
        errors.password="Password is required"
    } else if(values.password.length<7) {
        errors.password="Password must be at least eight characters long"
    } else if(!values.password.match(cond1)){
        errors.password='Password must have a lowercase letter'
    } else if(!values.password.match(cond2)) {
        errors.password='Password must have one uppercase letter'
    } else if(!values.password.match(cond3)){
        errors.password='Password must have one special character'
    }

    //password2
    if(!values.password2){
        errors.password2="Re-type your password"
    } else if (values.password2 != values.password) {
        errors.password2="Passwords do not match"
    }

    return errors;
}