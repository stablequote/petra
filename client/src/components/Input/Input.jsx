import { useState } from 'react';
import { TextInput } from '@mantine/core';

function Input({...props}) {
  const [value, setValue] = useState('');

  return (
    <TextInput
    size="md"
    value={value}
    onChange={(event) => setValue(event.currentTarget.value)}
    {...props}
    />
  )
}

export default Input