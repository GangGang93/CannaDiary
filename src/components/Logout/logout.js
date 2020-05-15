import React from 'react';
import axios from 'axios';

const Logout = (props) => {

    let request = axios.get(`/api/logout`)
                  .then(request => {
                        setTimeout(()=>{
                            props.history.push('/');
                            window.location.reload();
                        },2000)
                  });

    return (
        <div className="container text-center">
            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/>
            <h1 className="text-primary">Sorry to see you go :(</h1>
            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
};

export default Logout;