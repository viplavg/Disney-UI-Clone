import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Enjoy the latest shows & movies, when it airs along with live cricket streaming only on Disney+ Hotstar. Get your Subscription now!
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" ></CTALogoTwo>
            </CTA>
        </Container>
    )
}

export default Login;


const Container = styled.div`

    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        content: "";
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        opacity: 0.7;
        z-index: -1;
        
    }

`


const CTA = styled.div`

    max-width: 650px;
    padding: 80px 40px;
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;

    

`

const CTALogoOne = styled.img`

    

`

const SignUp = styled.a`

    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 12px 0;
    color: #f9f9f9;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 300ms;
    letter-spacing: 1.5px;
    margin-top: 15px;
    margin-bottom: 8px;

    &:hover {
        background-color: #0493ee;
    }

`

const Description = styled.p`

    font-size: 12px;
    letter-spacing: 1.5px;
    text-align: center;

`

const CTALogoTwo = styled.img`
    width: 90%;
`