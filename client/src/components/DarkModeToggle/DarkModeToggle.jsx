import {Button} from '@mantine/core';

function DarkModeToggle(props) {
  return (
    <>
    <Button variant='filled' color="cyan" className='dark-mode-toggle'  onClick={() => {props.toggleDark()}}>
        Toggle
    </Button>
    </>
  )
}

export default DarkModeToggle