import Categories from "./Categories";
import Menu from "../Menu/Menu";
import items from "../Staticdata/Data";
import { useState } from "react";
const allCategories=['all',...new Set(items.map((item)=>item.category))];
function Home(){
    const [menuItems,setMenuItems]=useState(items)
    const [categories,setCategories]=useState(allCategories);

    const filterItems = (category)=>{
        if(category==='all'){
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item)=> item.category === category);
        setMenuItems(newItems);

    }
    return(
        <main>
            <section className="menu section">
                <div className="header">
                <div className="title">
                    <h2>Mess App</h2>
                    <div className="underline"></div>
                </div>
                </div>
                
                <Categories categories={categories} filterItems={filterItems}/>
                <Menu items={menuItems}/>
            </section>
        </main>
    );
}
export default Home