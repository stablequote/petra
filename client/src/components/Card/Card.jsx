function Card() {
  return (
    <div className='card'>
        <div className="card-wrapper">
            <h5 className="title">title</h5>
            <h5 className="title">status</h5>
            <h5 className="title">priority</h5>
            <h5 className="title">Due Date</h5>
            <h5 className="title">Assigned to: <span>Employee</span></h5>
        </div>
    </div>
  )
}

export default Card