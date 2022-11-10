import { useEffect } from "react";

//----------------------------------------- click outside ---------------------------------//
export default function useOutside(ref, state, setNewState) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setNewState(false);
            }
        }
        if (state) {
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [ref, state]);
}
