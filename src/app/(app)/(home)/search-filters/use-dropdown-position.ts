import { RefObject } from "react";

export const useDropdownPosition = (
    ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>

) => {
    const getDropdownPosition = () => {
        if(!ref.current) return {top : 0,left: 0};

        const rect = ref.current.getBoundingClientRect();
        const dropdownWidth = 240;
        
        // calculate initial pos

        let left = rect.left + window.scrollX;
        const top = rect.bottom + window.scrollY;

        //check if dropdown will go to the right edge of the viewport

        if(left + dropdownWidth > window.innerWidth){
            //align to right edge 
            left = rect.right + window.scrollX - dropdownWidth;
            
            if(left < 0){
                left =window.innerWidth - dropdownWidth -16;
            }
        }

        //ensure dropdown doesnt go off left edge
        if(left< 0){
            left = 16;
        }
        return {top,left};
    };

    return { getDropdownPosition };
};