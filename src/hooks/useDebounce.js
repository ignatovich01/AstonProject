import { useEffect, useState } from 'react';

export function useDebounce(value) {
   const [data, setData] = useState(value);
   useEffect(() => {
      const debounce = setTimeout(() => setData(value), 200);
      return () => clearTimeout(debounce);
   }, [value]);
   return data;
}
