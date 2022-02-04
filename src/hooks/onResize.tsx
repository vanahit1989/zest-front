import { RefObject, useEffect } from 'react';

const useResize = <T,>(
  myRef: RefObject<T>,
  onResize: (myRef: RefObject<T>) => void,
) => {
  const handleResize = () => {
    onResize(myRef);
  };

  useEffect(() => {
    handleResize();
    if (myRef.current) {
      window.addEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef]);
};

export default useResize;
