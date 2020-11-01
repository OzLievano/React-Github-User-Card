import React from 'react'
import {useHistory} from 'react-router-dom'
import {Card,CardHeader,CardImg,CardBody,Container, Button} from 'reactstrap'
 
function UserCard(props) {
    const history = useHistory();
    console.log(props)
    return (
        <Container className="d-flex justify-content-center mt-5">
            <Card>
                <CardImg src={props.info.avatar_url} alt="avatar Url" style={{width:'25%'}} />
                <CardHeader>
                    <h1>{props.info.login}</h1>
                </CardHeader>
                <CardBody>
                    About {props.info.name}: 
                    {` ${props.info.name} is located in ${props.info.location} as a ${props.info.bio} working at ${props.info.company}. ${props.info.name} has contributed to over ${props.info.public_repos} repositories and is following ${props.info.following} other users on GitHub.`}
                </CardBody>
                <Button><a style={{textDecoration:'none', color:'#ffffff'}} href="https://github.com/Ozlievano">Visit Profile</a></Button>
                
            </Card> 
        </Container>
    )
}


export default UserCard;