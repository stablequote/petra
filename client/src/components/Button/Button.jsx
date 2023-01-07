import './Button.css';

// function Button({...children}) {
//   return (
//     <button>{...children}</button>
//   )
// }


import { Button as MantineButton } from '@mantine/core';

function Button({Children, ...props}) {
  return (
    <MantineButton {...props}>
      {Children}
    </MantineButton>
  );
}

export default Button