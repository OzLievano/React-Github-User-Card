import React from 'react'
import{Table,Button,Container} from 'reactstrap'

const Followers = (props) => {
    console.log(props)
    return (
       <Container className="mt-5">
           <h1>Followers</h1>
            <Table className="mt-5">
            
                <thead>
                    <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>Avatar</th>
                    <th>User Id</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{props.followers[0].login}</td>
                    <td><img src={props.followers[0].avatar_url} alt="avatar"/></td>
                    <td>{props.followers[0].id}</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>{props.followers[1].login}</td>
                    <td><img src={props.followers[1].avatar_url} alt="avatar"/></td>
                    <td>{props.followers[1].id}</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>{props.followers[2].login}</td>
                    <td><img src={props.followers[2].avatar_url} alt="avatar"/></td>
                    <td>{props.followers[2].id}</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>{props.followers[3].login}</td>
                    <td><img src={props.followers[3].avatar_url} alt="avatar"/></td>
                    <td>{props.followers[3].id}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        
    )
}

export default Followers
