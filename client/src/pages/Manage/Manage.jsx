import { Text } from '@mantine/core'
import List from '../../components/List/List'
import Notification from '../../components/Notification/Notification'
import Table from '../../components/Table/Table'

function Manage() {
  return (
    <div className='manage'>
      <Text>Manage</Text>
        {/* Table */}
        <Table />
        {/* Requests */}
        <List />
    </div>
  )
}

export default Manage