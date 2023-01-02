import Comment from '../../components/Comment/Comment'

function SingleTask() {
  return (
    <div>
        <div className="container">
            <h3 className="title">Task Title</h3>
            <div className="details">
                <h5 className="details-info">status: <span className='detail-bold'>Pending</span></h5>
                <h5 className="details-info">priority: <span className='detail-bold'>High</span></h5>
                <h5 className="details-info">Assigned to: <span className='detail-bold'>Employee</span></h5>
                <h5 className="details-info">Due Date: <span className='detail-bold'>03.Jan.2023</span></h5>
                <div className='description-wrapper'>
                  <p className="description">Task Description:</p>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab optio repellat nulla dolor recusandae quae sunt nesciunt. Sapiente, mollitia nesciunt.</p>
                </div>
                <Comment />
            </div>
        </div>
    </div>
  )
}

export default SingleTask