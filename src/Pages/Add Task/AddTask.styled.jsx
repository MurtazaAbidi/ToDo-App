import styled from "styled-components";

export const AddTaskWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 85%;
position: absolute;
right: 0;
text-align: center;
label{
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: flex-start;
}
input,select {
    border:2px solid #e8e8e8;
    border-radius: 5px;
    padding: 0.7rem 0.7rem;
    width: 100%;
    margin: 0.8rem 0;
  }
button{
    margin-top: 20px;
}


`;