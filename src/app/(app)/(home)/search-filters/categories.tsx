import { Category } from "@/payload-types";
import { CategoryDropdown } from "./category-dropdown";

interface Props {
    data:any;
};

export const Categories = ({data}:Props) =>{
    const categories = Array.isArray(data) ? data : data?.docs || [];

return (
  <div className="relative w-full ">
    <div className="flex flex-nowrap items-centre">
      {categories.map((category: Category) => (
        <div key={category.id}>
          <CategoryDropdown
            category={category}
            isActive={false}
            isNavigationHovered={false}
          />
        </div>
      ))}
    </div>
    </div>
);
}