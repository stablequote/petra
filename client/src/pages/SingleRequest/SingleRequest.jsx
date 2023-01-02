function SingleRequest() {
  return (
    <div>
        <div className="container">
            <h3 className="title">Request Title</h3>
            <div className="details">
                <h5 className="details-info">status: <span className='detail-bold'>Pending</span></h5>
                <h5 className="details-info">priority: <span className='detail-bold'>High</span></h5>
                <h5 className="details-info">Requested by: <span className='detail-bold'>Employee</span></h5>
                <h5 className="details-info">Date: <span className='detail-bold'>03.Jan.2023</span></h5>
                <div className='description-wrapper'>
                  <p className="description">Request Description:</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab optio repellat nulla dolor recusandae quae sunt nesciunt. Sapiente, mollitia nesciunt.</p>
                </div>
                <div className="single-request-control">
                    <button className="btn deny-btn">Deny</button>
                    <button className="btn accept-btn">Accept</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleRequest