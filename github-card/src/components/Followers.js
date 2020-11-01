import React from 'react'
import{Card,CardFooter,CardBody,CardHeader,CardImg,Container,Button} from 'reactstrap'

const Followers = (props) => {
    console.log(props)
    return (
    <div>
        {props.followers.map(follower => {
            return (
                <Container className="mt-5">
                    <Card>
                        <CardHeader>
                            <h1>{follower.login}</h1>
                        </CardHeader>
                        <CardBody className="d-flex justify-content-center">
                            <CardImg src={follower.avatar_url} style={{width:"25%"}}/>
                        </CardBody>
                        <CardFooter className="d-flex justify-content-end">
                            <Button color="success"><a style={{textDecoration:'none', color:'#ffffff'}}href={follower.html_url}>Visit Profile</a></Button>
                        </CardFooter>
                    </Card>
                </Container>
            )
            
        })}
    </div>
    
        
    )
}

export default Followers
