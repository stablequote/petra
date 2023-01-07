import { useState } from 'react';
import { Textarea as MantineTextArea } from '@mantine/core';

function TextArea() {
  const [value, setValue] = useState('');

  return (
    <MantineTextArea
    placeholder="Your comment"
    label="Write comment"
    variant="filled"
    radius="md"
    size="md"
    autosize
    maxRows={4}
    value={value} 
    onChange={(event) => setValue(event.currentTarget.value)}
    />
  )
}

export default TextArea