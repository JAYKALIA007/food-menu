import RecipeCard from "./RecipeCard"
export default function Recipes(){
    return(
        <div className=" mt-5 ">
            <div>Latest Recipes</div>
            <div className=" grid grid-cols-3 gap-4  mt-5">
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>

            </div>
        </div>
    )
}