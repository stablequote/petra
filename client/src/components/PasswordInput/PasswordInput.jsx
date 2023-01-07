import {PasswordInput as MantinePasswordInput} from '@mantine/core';
// import { IconEyeCheck, IconEyeOff } from '@tabler/icons';

function PasswordInput({...children}) {
  return (
    <MantinePasswordInput
    placeholder="Password"
    label="Password"
    // description="Password must include at least one letter, number and special character"
    radius="sm"
    size="md"
    withAsterisk
    defaultValue="secret"
    // visibilityToggleIcon={({ reveal, size }) =>
    //   reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
    // }
    {...children}
  />
  )
}

export default PasswordInput