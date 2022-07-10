import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// apis
import * as photoApi from 'apis/photoApi';
import { useCallback } from 'react';

function PhotoDetail() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  
  console.log('iddddd',id)

  const fetchPhoto = useCallback(async () => {
    const res = await photoApi.fetchSinglePhoto(id);
    setData(res.data || null);
  }, [id])

  useEffect(() => {
    if(!id) return;
    fetchPhoto();
  },[fetchPhoto, id])
  
  return (
    <div class="photo-detail">
      <div className="container-small">
        <div className="date a-center">Oct 26 - Written By Author Name</div>
        <div className="photo-detail-title a-center">${data?.title}</div>
        <img src={data?.image} alt="img" />
        <h3 className="photo-content">${data?.description}</h3>
        <p>Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Nulla aliquet enim tortor at auctor urna. Ornare suspendisse sed nisi lacus sed viverra tellus in. Nisl vel pretium lectus quam id leo in vitae. Facilisis gravida neque convallis a cras semper auctor. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Velit dignissim sodales ut eu sem integer vitae justo eget. Duis at consectetur lorem donec massa sapien. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Commodo elit at imperdiet dui accumsan. Mi bibendum neque egestas congue quisque.
          <br/><br/>At elementum eu facilisis sed odio morbi quis commodo odio. Felis bibendum ut tristique et. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Turpis massa sed elementum tempus egestas sed sed risus. Nibh venenatis cras sed felis eget. Libero volutpat sed cras ornare. Ultrices vitae auctor eu augue ut lectus. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Sed adipiscing diam donec adipiscing tristique risus. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Quam pellentesque nec nam aliquam sem. Blandit turpis cursus in hac habitasse platea dictumst quisque. Convallis a cras semper auctor neque vitae.
        </p>
        <div className="author a-center">Author Name</div>
      </div>
    </div>
  )
}

export default PhotoDetail
