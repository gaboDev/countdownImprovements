import styled from "styled-components";
import Countdown from "../../components/Countdown";

export const Title = styled.h2`
  margin: 0;
  color: white;
  font-size: 7em;
  text-shadow: 0 4px 10px rgb(0 0 0 / 16%);
  box-shadow: 0 8px 1px -1px rgb(0 0 0 / 13%);
  line-height: 78px;
`;

export const MainTitle = styled(Title)`
  align-self: self-start;
  margin-bottom: 14px;
  z-index: 1;
`;

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

export const StyledCountdown = styled(Countdown)`
  width: 100%;
`;

export const SecondTitleContainer = styled.div`
  align-self: self-end;
  text-align: right;
  margin-top: 16px;
  
  h2:first-child{
    display: inline-block;
  }
  
  h2:nth-child(2n){
    text-shadow: 4px 1px 6px rgb(0 0 0 / 40%);
    margin-top: -3px;
    z-index: 2;
    font-size: 8em;
    line-height: 94px;
  }
`;

