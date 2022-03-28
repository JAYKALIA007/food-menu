import RecipeCard from "./RecipeCard"
import * as foodItems  from "./food.json"
export default function Recipes(){
    const foodList = foodItems.default.foodList
    const myFoodItem = foodList === [] ? "Loading" : (foodList.map(foodItem =>{
        return(
            <div key={foodItem.index}   >
                <RecipeCard  img = {foodItem.imgUrl}  name = {foodItem.itemName} time={foodItem.time} />
            </div>
        )
    }))
    return(
        <div className=" mt-5 ">
            <div>Latest Recipes</div>
            <div className=" grid grid-cols-3 gap-4  mt-5">
                {myFoodItem}
            </div>
        </div>
    )
}