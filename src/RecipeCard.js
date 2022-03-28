export default function RecipeCard( { img, name, time }){
    return(
        <div className=" bg-white shadow-xl ring-1 ring-gray-900/5  rounded-lg  hover:cursor-pointer hover:scale-105 duration-300	 ">
            <img style={{ height:"350px",width:"100%"}} src={img} alt="burger"  className="rounded-lg" ></img>
                <div className=" flex ">
                    <div className="w-2/3 m-4">
                            <p className="font-semibold	mb-2 "  >{name}</p>
                            <p className="font-thin text-sm " >Recipe by Mario</p>
                    </div>
                    <div className="w-1/3 pt-10 pr-1">
                            <p className="text-sm text-right bg-yellow-200 p-1 rounded-md " > 
                            {time}</p>
                    </div>
                </div>
                <div className=" flex   " >
                    <div className=" w-1/2 m-2 ml-5" >
                        <button className=" m-1 p-1 bg-gray-300  rounded-md " >+ 1</button>
                        <button className=" m-1 p-1 bg-gray-300  rounded-md " >- 1</button>
                    </div>
                    <div className=" w-1/2  m-2 mt-3 p-1 bg-green-500  rounded-md " >
                        Add to Bucket
                    </div>
                </div>
        </div>
    )
}