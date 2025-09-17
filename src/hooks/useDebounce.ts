import { useEffect, useState } from "react";

export function useDebounce<T>(val: T) {
    const [value, setValue] = useState(val);
    useEffect(() => {
        const id = setTimeout(() => {
            setValue(val);
        }, 350)
        return () => clearTimeout(id);
    }, [val])
    return value;
}