import React, { memo } from 'react'

function MemoHook({ title }) {
  console.log("render memo hooks: ", title)
  return (
    <div>
      title: {title}
    </div>
  )
}

export default memo(MemoHook)

// function areEqual(prevProps, nextProps) {
//   return prevProps.title.title === nextProps.title.title
// }