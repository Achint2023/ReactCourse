import { useState } from 'react';
import {styled} from 'styled-components';
import Button from './Button';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

const ControlDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${ (props) => props.$invalid ? 'blue' : '#6b7280' } ;
  `;


const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    line-height: 1.5;
    background-color:  ${(props) => props.$invalid ? 'grey' : '#d1d5db'};
    color: ${({$invalid}) => $invalid ? 'green' : '#374151'};
    border: 1px solid ${($invalid) => $invalid ? 'red' : 'transparent'};
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

// const Button = styled.button`
//     padding: 1rem 2rem;
//     font-weight: 600;
//     text-transform: uppercase;
//     border-radius: 0.25rem;
//     color: #1f2937;
//     background-color: #f0b322;
//     border-radius: 6px;
//     border: none;

//   &:hover {
//     background-color: #f0920e;
//   }
// `;


  return (
    <div id="auth-inputs">
      {/* <div className="controls"> */}
      <ControlDiv >
        <p>
          {/* <Label className={`label ${emailNotValid ? 'invalid' : ''}`}>Email</Label> */}
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            $invalid={emailNotValid}
            type="email"
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          ></Input>
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            // className={passwordNotValid ? 'invalid' : undefined}
            $invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          ></Input>
        </p>
        </ControlDiv>
      {/* </div> */}
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        {/* <Button onClick={handleLogin}>Sign In</Button> */}
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
