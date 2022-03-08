import Recipes from "./Recipes"
export default function Menu(){
    return(
        <div className=" p-5 px-10  bg-slate-50 " >
            <div className="text-right" >
                <button type="button" className="border-red-500 text-red-500 border-2  rounded-2xl py-1 px-2 m-2 text-sm ">Login</button>
                <button type="button" className="border-red-500 text-red-500 border-2  rounded-2xl py-1 px-2 m-2 text-sm ">Signup</button>
            </div>
            <div className="py-4" >
                <h1 className=" text-5xl " >Recipes</h1>
                <p className="mt-5 text-xl " >For Ninjas</p>
            </div>
            <Recipes/>
        </div>
    )
}