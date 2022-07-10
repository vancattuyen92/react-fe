import { useState, useEffect } from 'react';

const useResizeWindow = (allowResize = false) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  function handleResizeWindow() {
    setIsSmallScreen(window.innerWidth < 768)
  }

  useEffect(() => {
    if(!allowResize) return;

    window.addEventListener('resize', handleResizeWindow);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    }
  },[])

  return {
    isSmallScreen
  }
}

export default useResizeWindow;