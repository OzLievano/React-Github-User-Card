import React from 'react'
import {Card,CardHeader,CardImg,CardBody,Container} from 'reactstrap'
 
function UserCard(props) {
    console.log(props)
    return (
        <Container className="d-flex justify-content-center mt-5">
            <Card>
                <CardImg src={props.info.avatar_url} alt="avatar Url" style={{width:'25%'}} />
                <CardHeader>
                    <h1>{props.info.login}</h1>
                </CardHeader>
            </Card> 
        </Container>
    )
}


export default UserCard;