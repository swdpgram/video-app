import { LeftAside } from "../../Components/LeftAside";
import { CategoriesListing } from "../CategoriesListing/CategoriesListing";

export function Home() {
    return (
    <div className="home-container">
    <LeftAside />

    <div>
    <h1> Categories </h1>  
    <CategoriesListing />  
    </div>
    
    </div>
    );
}