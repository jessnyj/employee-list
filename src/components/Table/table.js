import React from "react";
import "./table.css";
import Row from "../Row/row";

function Table(props) {
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col" className="sortCol">
                            Name 
                            <i onClick={props.sortByName} data-value={props.sort}
                                className="fa fa-sort" aria-hidden="true"></i>
                        </th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(user => (
                        <Row
                            key={user.name}
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