import React, { useState } from 'react';
 
import RegisterForm from './RegisterForm';
import Output from './Output';
 
const Wrapper = props => {
    const [form, setForm] = useState('');
 
    return (
        <div>
            <h2>Your Form Data</h2>
            <RegisterForm
                form={form}
                setForm={setForm}
            />
            <Output
                form={form}
            />
        </div>
    );
}
 
export default Wrapper;