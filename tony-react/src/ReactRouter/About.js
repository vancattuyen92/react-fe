import React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

function About() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();

  console.log('about history: ', history,)
  console.log('about location: ',location )
  console.log('about params: ', params)
  console.log('about match: ', match)

  return (
    <div>
      this is about
    </div>
  )
}

export default About
