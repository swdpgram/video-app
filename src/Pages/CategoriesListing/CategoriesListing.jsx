import { useData } from "../../Context/data-context";
import { Card } from "../../Components/Card";

export function CategoriesListing() { 

    const { categories } = useData();



    return(
        <div className="category-container">
        {
            categories?.map((item)=> { 
                return(
                    <div key={item._id} > 
                    <Card {...item} />
                    </div>
                ); 
            })
        }
        </div>
    );
}