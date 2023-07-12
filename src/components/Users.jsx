import { Card } from 'antd'
import React, { useEffect, useState } from 'react'
import NavMenu from './NavMenu'
import useAxiosGet from './../hooks/useAxiosGet';
import { AiFillDelete } from "react-icons/ai";

const Users = ({ isAuth, authSetter }) => {
    // const [users, setUsers] = useState([])
    // const user = JSON.parse(localStorage.getItem("user"))
    const [users, getUsers] = useAxiosGet([])
    useEffect(() => {
        getUsers("/users")
    }, [getUsers])

    // console.log(users)

    // useEffect(() => {
    //     fetch("http://localhost:400/users")
    //         .then((res) => res.json())
    //         .then((payload) => setUsers(payload));
    // }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:400/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data.message))
        getUsers(users.filter((user) => console.log(user)));
    }



    return (
        <>
            <div style={{ width: "100%" }}>
                <NavMenu isAuth={isAuth} authSetter={authSetter} />
                <div className='row mt-2'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <Card
                            title="Users"
                        >
                            {users?.length > 0 && users?.map(item => <div className='border p-2'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p><b>Name :</b> {`${item?.firstName} ${item?.lastName}`}</p>
                                        <p><b>Email :</b> {item?.email}</p>
                                        <p><b>Registration Number :</b> {item?.registrationNumber}</p>
                                    </div>
                                    <div>
                                        <button className='mt-4 btn-lg' style={{ color: 'red', border: 'none' }} onClick={() => handleDelete(item._id)}><AiFillDelete></AiFillDelete></button>
                                    </div>
                                </div>
                                {/* <hr /> */}
                            </div>)}

                        </Card>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </>
    )
}

export default Users