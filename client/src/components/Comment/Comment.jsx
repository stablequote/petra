import { Box, Paper, Button } from '@mantine/core'
// import Button from '../Button/Button'
import List from '../List/List'
import TextArea from '../TextArea/TextArea'

function Comment() {
  const handleSendComment = () => {

  }
  return (
    <div className='comments-wrapper'>
      <Paper>
        <Box>
          <List />
          <TextArea />
          <Button variant='contained' color="cyan" onClick={handleSendComment}>Send</Button>
        </Box>
      </Paper>
    </div>
  )
}

export default Comment