import React from 'react'
import{Card,CardFooter,CardHeader,Container,Button} from 'reactstrap'

const Followers = (props) => {
    console.log(props)
    return (
    <div>
        {props.followers.map(follower => {
            return (
                <Container className="mt-5">
                    <Card>
                        <CardHeader>{follower.login}</CardHeader>
                        <CardFooter>
                            <Button color="success">Visit Profile</Button>
                        </CardFooter>
                    </Card>
                </Container>
            )
            
        })}
    </div>
    
        
    )
}

export default Followers
