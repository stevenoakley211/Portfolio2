import styled from 'styled-components';

function Projects(){
    const MyDiv = styled.div`
    z-index: 0;
    width: 75%;
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    `
    const TextBox = styled.div`
        m
        padding: 16px;
        text-align: center;
        background-color:rgba(0, 0, 0, 0.5);
        
    `
    return(
        <MyDiv>
            <TextBox>
                <h1>Projects</h1>
            </TextBox>
            <TextBox>
                <p>Excepteur veniam nisi veniam velit. Sint magna ut proident in duis occaecat cillum ut ex. Deserunt ullamco et mollit anim officia minim qui mollit non non pariatur dolor ipsum et. Laborum sit sit excepteur nostrud commodo. Cillum nostrud exercitation aliqua veniam veniam magna eu velit esse. Commodo aliqua quis cillum duis consequat anim qui ex consectetur velit.</p>
            </TextBox>
            <TextBox>
                <p> non amet esse qui. Nisi velit aliquip laboris excepteur voluptate fugiat. Labore laboris pariatur cillum dolore reprehenderit quis in commodo. Enim duis nostrud excepteur ex in excepteur nisi pariatur cupidatat irure. Duis sint quis deserunt adipisicing consectetur veniam aute. Adipisicing anim dolore officia nulla sint labore irure do esse aute laboris nulla id.</p>
            </TextBox>
            <TextBox>
                <p>Eiusmod minim ex commodo in cupidatat reprehenderit eiusmod magna. Nulla est nostrud consectetur proident nisi ex ipsum eu eiusmod proident ut id id Lorem. Velit anim nostrud amet occaecat. Consequat nulla deserunt reprehenderit aliquip tempor Lorem anim eu magna ut ut esse quis officia.</p>
            </TextBox>
        </MyDiv>
    )
}
export default Projects;