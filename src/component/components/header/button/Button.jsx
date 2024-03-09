import React from 'react';

const Button = (props) => {
    // console.log(props)
    const {children} = props
    return (
        <div className='text-center mt-7'>
            <button className="btn btn-info ">{children}</button>
        </div>
    );
};

export default Button;