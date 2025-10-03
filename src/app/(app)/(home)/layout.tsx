import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { Category } from '@/payload-types';

import { Footer } from "./footer"
import { Navbar } from "./navbar";
import { SearchFilters } from "./search-filters";


interface Props {
    children : React.ReactNode;
};

const layout = async ({children }:Props) => {
  const payload = await getPayload({
      config :configPromise,
    });
  
    const data = await payload.find({
      collection: "categories",
      depth: 1, // populate sub categories
      pagination:false,
      where:{
        parent:{
          exists:false,
        },
      },
    });

    const formattedData = data.docs.map((doc: Category)=>({
      ...doc,
      subcategories:  (doc.subcategories?.docs ?? []).map((doc)=>({
        ...(doc as Category),
        subcategories:undefined,
      }))
    }));

    console.log(
      data,
      formattedData,
    )
  return (
    <div className="flex flex-col min-h-screen">
       <Navbar/>
       <SearchFilters data={data} />
       <div className="flex-1 bg-[#F4F4F0]">
           {children}
       </div>
      
       <Footer/>
       
    </div>
  );
}

export default layout;