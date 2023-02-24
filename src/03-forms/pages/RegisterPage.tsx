import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
    
    const { name, email, password1, password2, formData, onChange, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>Register page</h1>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text"
                    placeholder="Name" 
                    name="name"
                    value={ name }
                    onChange={ onChange }
                    className={ `${ name.trim().length === 0 && 'has-error' }` }
                />

                { name.trim().length === 0 && (<span>This field is required</span>)}

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    onChange={ onChange }
                    className={ `${ !isValidEmail( email ) && 'has-error' }` }
                />

                { !isValidEmail( email ) && (<span>This is not a valid email</span>)}

                <input 
                    type="password"
                    placeholder="Password" 
                    name="password1"
                    value={ password1 }
                    onChange={ onChange }
                />

                { password1.trim().length === 0 && (<span>This field is required</span>)}
                { password1.trim().length > 0 && password1.trim().length < 6 && (<span>The min password length is 6 characters</span>)}

                <input 
                    type="password"
                    placeholder="Repeat Password" 
                    name="password2"
                    value={ password2 }
                    onChange={ onChange }
                />

                { password2.trim().length === 0 && (<span>This field is required</span>)}
                { password2.trim().length > 0 && password1 !== password2 && (<span>The password must be the same</span>)}


                <button type="submit">Create</button>
                <button type="button" onClick={ resetForm }>Reset Form</button>

            </form>
        </div>
    )
}
