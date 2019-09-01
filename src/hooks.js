import { useEffect, useState } from 'react';

export const useFetch = (url, initialValue) => {
  const [result, setResult] = useState(initialValue);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setResult(json.results);
      });
  }, [url]);
  return result;
};
export const useMultipleFetch = (urls, tableOpen, initialValue) => {
  const [result, setResult] = useState(initialValue);
  useEffect(() => {
    if (tableOpen === true) {
      const promises = urls.map(url => {
        return fetch(url)
          .then(response => response.json())
          .then(json => {
            return json;
          })
          .catch(error => {
            console.error(error);
          });
      });
      Promise.all(promises).then(values => {
        setResult(values);
      });
    }
  }, [urls, tableOpen]);
  return result;
};
