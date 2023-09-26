import styled from 'styled-components'

const DivCorpo = styled.div`
    background-color: lightgreen;
    height: 50vh;
    padding: 40px;

    h2{
        text-align: left;
        color: darkgreen;
        text-align: justify;
    }

    ul{
        text-align: justify;
    }
    ul li{
        color: green;
    }
`

export default function Corpo(){
    return(
        <DivCorpo>
            <h2>Sabores:</h2>
            <ul>
                <li>Chocolate</li>
                <li>Morango</li>
                <li>Baunilha</li>
                <li>Pistache</li>
            </ul>
        </DivCorpo>
    )
}