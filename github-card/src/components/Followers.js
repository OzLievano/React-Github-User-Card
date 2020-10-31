import React from 'react'
import{Table} from 'reactstrap'

const Followers = (props) => {
    console.log(props)
    return (
        <Table className="mt-5">
            <thead>
                <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Avatar</th>
                <th>Visit Page</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>{props.followers[0].login}</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Followers
