import React from 'react'
import { Container } from 'react-bootstrap'

function BridalPage() {
    return (
        <div>
            <Container fluid className='p-0 position-absolute top-0'>
                <video width={"100%"} autoPlay muted loop preload="none">
                    <source src={require('../../Assets/Video/Landscape Video.mp4')} type='video/mp4'/>
                </video>
            </Container>
        </div>
    )
}

export default BridalPage
