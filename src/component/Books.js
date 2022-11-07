import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Link } from 'react-router-dom';

function Books() {
    const [data, setData] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getData = async () => {
            try {
                const books = await axios.get('http://localhost:8082/books', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(books.data);
                return data;
            } catch (e) {
                console.error(e);
                if (e instanceof AxiosError) {
                    const cause = e.response?.data.msg || 'internal error';
                    const status = e.code;
                    return {
                        data: [],
                        msg: `cause : ${cause}(${status})`,
                    };
                }
            }
        };
        getData();
    }, []);

    console.log(data);
    console.log(typeof data);

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

                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" className='text-white fs-5'>ID</th>
                            <th scope="col" className='text-white fs-5'>Username</th>
                            <th scope="col" className='text-white fs-5'>FirstName</th>
                            <th scope="col" className='text-white fs-5'>LastName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 ? (
                                data.map((book) => (
                                    <tr key={book.id}>
                                        <th scope="row" className='text-white fs-5'>{book.isbn}</th>
                                        <td className='text-white fs-6'>{book.title}</td>
                                        <td className='text-white fs-6'>{book.author}</td>
                                        <td className='text-white fs-6'>{book.price}</td>
                                    </tr>
                                ))): (
                                    <div class="text-white">ACCESS_TOKEN invalid</div>
                                )
                            }
                    </tbody>
                </table>
            </header>
        </div>
    );
}
export default Books;