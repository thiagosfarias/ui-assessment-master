import styled from 'styled-components'

export const Card = styled.section`
    display: grid;
    width: 45rem;
    background-color: white;
    box-shadow: 0px 3px 6px #00000029; 
    border-radius: 10px;

    :hover{
        box-shadow: 0px 3px 6px #00000055; 
    }

    h2 {
        font-size: 1.3rem;
        font-weight: bold;
        text-align: left;
        margin-left: 1rem;
        margin-bottom: 0;
    }

    h3 {
        font-size: 2rem;
        color: green;
        margin-left: 1rem;
        margin-bottom: 0;
    }

    p{
        color: gray;
        font-size: 0.8rem;
        text-align: left;
        margin-left: 1rem;
        margin-bottom: 10px;
    }

    .info-p{
        margin-top: 1px;
        font-weight: 500;   
    }

    @media only screen and (max-width: 900px){
        height: 20rem;
        width: 35rem;
    }

    @media only screen and (max-width: 600px){
        display: block;
        justify-content: center;
        height: 20rem;
        width: 25rem;
        justify-content: center;
    }

    @media only screen and (max-width: 450px){
        display: block;
        justify-content: center;
        height: 20rem;
        width: 20rem;
        justify-content: center;
    }

    @media only screen and (max-width: 325px){
        display: block;
        justify-content: center;
        height: 16rem;
        width: 15rem;
        justify-content: center;
        p, h2, h3 {
            font-size: 1rem;
        }
    }
`

export const CardHeader = styled.div`
    width: 100%;
    margin-bottom: 0;
    border-bottom: solid 1px lightgray;
    display: grid;

    .title {
        display: flex;
        align-items: baseline;

        .upload {
            color: #3da9cb;
            margin-left: 1rem;
        }

        .info-circle{
            color: lightgray;
            margin-left: auto;
            margin-right: 1rem;
        }


    }
`

export const CardBody = styled.div`
    width: 100%;
    height: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    @media only screen and (max-width: 600px){
        display: block;
        justify-content: center;
    }
`

export const Info = styled.div`
    display: grid;
    justify-content: start;

    .right {
        border-left: solid 1px lightgray;
    }

    margin-left: 0;
    h3 {
        text-align: left;
    }
    
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`

export const UserSpace = styled.div`
    display: grid;

    p {
        color: gray;
        font-weight: bold;
        font-size: 0.8rem;
        text-align: initial;
    }

    .symbol {
        p {
            text-align: center;
        }
    }

    @media only screen and (max-width: 600px){
        h1 {
            font-size: 1.2rem;
        }
        .symbol, p, .email-icon{
            display: none;
        }
        
        margin-left: 1rem;
    }
    
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;

    .symbol{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 5px;
        background-color: #ffc800;
        margin-right: 0.5rem;
        
        p{
            color: black;
        }
    }

    .email {
        p {
            font-weight: bold;
        }
        .user-stats{
            display: grid;
            grid-template-columns: 0.2fr 1fr 1fr;
            gap: 0.4rem;

        }

        p{
            margin: 0;
            font-size: 0.8rem;
            color: gray;
            text-align: left;
        }

        .email-icon{
            color: gray;
        }
    }
    
`

