import { Grid, Button, Text, Paper, Flex, Box } from '@mantine/core';
import { Link } from 'react-router-dom';

function List() {
  return (
    <Paper withBorder shadow="md" radius="md" sx={{width: "600px", padding: "1rem 1.2rem", backgroundColor: "whitesmoke"}}>
      <Grid justify="space-between" align="center">
        <Grid.Col span={8}>
        <Box component={Link} to="/dashboard/manage/requests/:id">
          <Text align="left">Something has just happened</Text>
        </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Flex justify="space-between">
            <Button variant="contained" color="red">Deny</Button>
            <Button variant="contained" color="green">Accept</Button>
          </Flex>
        </Grid.Col>
      </Grid>
    </Paper>
  )
}

export default List