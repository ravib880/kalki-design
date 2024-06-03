import React from 'react'
import { Container } from 'react-bootstrap'

function BridalPage() {
    return (
        <div>
            <Container fluid className='d-none d-xl-block p-0'>
                <video width={"100%"} autoPlay muted loop preload="none">
                    <source src={require('../../Assets/Video/Landscape Video.mp4')} type='video/mp4'/>
                </video>
            </Container>
            <Container fluid className='d-block d-xl-none p-0 portraitVideo'>
                <video width={"100%"} autoPlay muted loop preload="none">
                    <source src={require('../../Assets/Video/Portrait Video.mp4')} type='video/mp4'/>
                </video>
            </Container>
        </div>
    )
}

export default BridalPage
