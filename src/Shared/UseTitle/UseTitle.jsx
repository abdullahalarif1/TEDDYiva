import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `TEDDYiva | ${title}`;
  }, [title]);
};

export default useTitle;
