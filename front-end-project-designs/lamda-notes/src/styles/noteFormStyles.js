import styled from "styled-components"

export const FormWrapper = styled.div`
  margin-left: 27.5%;

  h3 {
    font-size: 2.2rem;
    margin-top: 53px;
    margin-bottom: 28px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      margin-bottom: 15px;
      width: 55%;
      padding: 11px;
    }

    textarea {
      width: 93.5%;
      padding: 18px;
      padding-left: 23px;
      word-spacing: -5px;
    }

    button {
      background-color: #2ac0c4;
      width: 30%;
      padding: 13px 10%;
      margin-top: 5px;
      color: white;
      outline: none;
    }
  }
`
