import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const tokenSet = (e) => {
        setToken(e.target.value);
        localStorage.setItem('token', e.target.value || '');
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
                <div>
                    <Link to="/" class="fs-3 text-white dropshadow text-decoration">
                        <button type="button" class="btn btn-outline-light">Access Token</button>
                    </Link>
                    <Link to="/books" class="fs-3 text-white dropshadow text-decoration">
                        <button type="button" class="btn btn-outline-light ms-3">Books</button>
                    </Link>
                    <Link to="/users" class="fs-3 text-white dropshadow text-decoration">
                        <button type="button" class="btn btn-outline-light ms-3">Users</button>
                    </Link>


                    <input class="form-control mt-3" type="text" placeholder="Access Token" aria-label="Access Token"
                        onChange={tokenSet} value={token}></input>
                </div>
            </header>
        </div>
    );
}