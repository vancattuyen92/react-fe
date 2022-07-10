import React from 'react'
import { useHistory, useParams } from 'react-router-dom';


function PostDetail() {
  const params = useParams();
  const history = useHistory();

  console.log('post detail: ', params)

  return (
    <div>
      <button type="button" onClick={() => history.goBack()}>Back page</button> <br />< br />
      this is post detail of: {params.id}
    </div>
  )
}

export default PostDetail
