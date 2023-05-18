import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        // for dynamic page title
        document.title = `Toys-Planet | ${title}`;
    }, [title]);
};

export default useTitle;
