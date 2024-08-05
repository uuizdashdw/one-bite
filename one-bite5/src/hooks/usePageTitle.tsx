import { useEffect } from "react";

const usePageTitle = (title: string): void => {
    useEffect(() => {
        const $title = document.getElementsByTagName("title")[0];
        $title.innerText = title;
    }, [title]);
};

export default usePageTitle;