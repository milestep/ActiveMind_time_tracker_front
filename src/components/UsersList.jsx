import React, { Component } from 'react'
import { BsFillTrashFill } from "react-icons/bs"

class UsersList extends Component {
  render() {
    return (
      <div className="border border-secondary rounded">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Last Name</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {(this.props.users).map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td className='text-right'><BsFillTrashFill className="deleteBtn" onClick={(e) => this.props.deleteUser(user.id)}>X</BsFillTrashFill></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UsersList
