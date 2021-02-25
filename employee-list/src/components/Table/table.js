import React from "react";
import "./table.css";
import Row from "../Row/row";

function Table(props) {
    console.log(props.users);
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name <i className="fas fa-sort-down"></i></th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user => (
                    <Row 
                    id={user.id}
                    key={user.id}
                    image={user.image}
                    name={user.name}
                    phone={user.phone}
                    email={user.email}
                    dob={user.dob}
                    />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;