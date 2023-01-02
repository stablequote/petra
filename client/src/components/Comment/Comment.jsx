import React from 'react'
import Button from '../Button/Button'
import List from '../List/List'
import TextArea from '../TextArea/TextArea'

function Comment() {
  return (
    <div className='comments-wrapper'>
        <List />
        <TextArea />
        <Button>Send</Button>
    </div>
  )
}

export default Comment