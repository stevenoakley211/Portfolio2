import { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
function Home() {
  // Custome component styles
  const HomeContainer = styled(animated.div)`
  background-color: rgba(40, 85, 156, 1);
    // rgba(40, 85, 156, 0.5)
    border: 5px solid rgb(105, 255, 155);
    border-radius: 15px;
    padding: 50px;
    z-index: 1;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  `;
  const Name = styled.span`
    color: rgb(105, 255, 155);
    text-shadow: 1px 1px #fff;
  `;
  const LearnMore = styled.button`
    box-sizing: border-box;
    background-color: transparent;
    border: 2px solid rgb(105, 255, 155);
    border-radius: 0.6em;
    color: rgb(105, 255, 155);
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 20px;
    padding: 1.2em 2.8em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;

    :hover {
      delay: 500;
      color: white;
      box-shadow: 0 0 40px 40px rgb(105, 255, 155) inset;
    }
  `;

  // Custom animations 
  const [flip, set] = useState(false)
      const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 500,
        config: {
            duration:1000,
        }
      })

  return (
    <HomeContainer>
      <h1>
        Hello, I,m <Name>Steven Oakley.</Name>
      </h1>
      <h2>I'm a full-stack web developer</h2>
      <LearnMore>Learn More</LearnMore>
    </HomeContainer>
  );
}
export default Home;
