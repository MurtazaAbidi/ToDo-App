import styled from "styled-components";

export const LoginWrapper = styled.div`
display: flex;
  
`;
export const LeftSideWrapper = styled.div`
height: 100vh;
    width: 45vw;
    background-size: cover;
    @media screen and (max-width: 850px) {
          display: none;
      }
    `;
export const RightSideWrapper = styled.div`
width: 55vw;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    h3{
        color:gray;
        text-align: center;
    }
    .login-logoImg {
        text-align: center;
      }
      .login-logoImg img {
        width: 40%;
        text-align: center;
      }
      
      .login-innerdiv {
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
      }
      
      .login-innerdiv h3 {
        font-weight: 400;
      }
      
      .login-innerdiv h1 {
        margin-bottom: 1.5rem;
      }
      
      .login-input {
        display: flex;
        flex-direction: column;
      }
      .login-input .fields-error{
        color: rgb(229, 14, 14);
        font-size:14px;
      }
      
      .login-input label {
        color: #4a5568;
        display:flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .login-input input {
        border: 1px solid #e8e8e8;
        border-radius: 5px;
        padding: 0.7rem 0.7rem;
        width: 100%;
        margin: 0.8rem 0;
      }
      
      .login-checkBox input {
        margin: 0 0.5rem 0 0;
      }
      
       button {
        background-color: #135dd8;
        color: white;
        font-weight: 500;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        border-radius: 5px;
        padding: 0.7rem 0.7rem;
        width: 100%;
        margin: 1rem 0;
        transition: 0.25s ease all;
      }
       button:hover {
        opacity: 0.8;
        text-decoration: underline;
      }
      
      .login-hint {
        font-weight: 500;
        text-decoration: none;
        margin-top: 0.5rem;
        color: gray;
      }

    @media screen and (max-width: 850px) {
          width: 100%;
          padding: 0 1rem;
        .login-logoImg img {
          width: 75vw;
        }
      }
    `;



