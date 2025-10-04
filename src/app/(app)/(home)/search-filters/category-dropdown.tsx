"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useDropdownPosition } from "./use-dropdown-position";

import { SubcategoryMenu } from "./subcategory-menu";
import { CustomCategory } from "../type";

interface Props {
    category: CustomCategory;
    isActive:boolean;
    isNavigationHovered ?: boolean;
};

export const CategoryDropdown = ({
    category,
    isActive,
    isNavigationHovered,
}:Props) =>{

    const [isOpen,setIsOpen] = useState(false);
    const dropdownref = useRef<HTMLDivElement>(null);
    const {getDropdownPosition} = useDropdownPosition(dropdownref);

    const onMouseEnter = () => {
        if(category.subcategories){
            setIsOpen(true);
        }
    }
    const onMouseLeave = () => setIsOpen(false);

    const dropdownPosition = getDropdownPosition();

    return(
    <div 
        className="relative inline-block"
        ref={dropdownref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
         <div className="relative">
            <Button variant="elevated"
            className={cn(
                    "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
                    isActive && !isNavigationHovered && "bg-white border-primary",
                    isOpen && "bg-white border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[4px] hover:-translate-y-[4px]"
                )}
            >
            {category.name}
            </Button>
            {category.subcategories && category.subcategories.length > 0 &&  (
                <div
                className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-black opacity-0 transition-opacity duration-200",
                    isOpen && "opacity-100"
                )}
                />
            )}
        </div>
        <SubcategoryMenu 
        category={category}
        isOpen={isOpen}
        position={dropdownPosition}
        />
    </div>
 )
}