import Card from '../../components/Card/Card'
import Pagination from '../../components/Pagination/Pagination'

function Tasks() {
  return (
    <div>
        <div className="grid">
          {/* Task Card */}
            <Card />
          {/* Pagination */}
          <Pagination />
        </div>
    </div>
  )
}

export default Tasks