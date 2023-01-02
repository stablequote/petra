import Notification from '../../components/Notification/Notification'
import Table from '../../components/Table/Table'

function Manage() {
  return (
    <div className='manage'>
        {/* Table */}
        <Table />
        {/* Requests */}
        <div className="requests">
            <a className="btn requests-wrapper" href='#'>
                <Notification />
                <div className="request-control">
                    <button className="btn deny-btn">Deny</button>
                    <button className="btn accept-btn">Accept</button>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Manage