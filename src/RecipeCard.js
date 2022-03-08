import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function RecipeCard(){
    return(
        <div class=" bg-white shadow-xl ring-1 ring-gray-900/5  rounded-lg ">
            <img src="https://media.istockphoto.com/photos/cheeseburger-with-tomato-and-lettuce-on-wooden-board-picture-id1309352410?b=1&k=20&m=1309352410&s=170667a&w=0&h=YduYl7Us5MSrw1EFSCxR9zDRLnEFa_O608NdqhHlSyM=" alt="burger" ></img>
                <div className=" flex ">
                    <div className="w-2/3 m-4">
                            <p className="font-semibold	mb-2 "  >Cheeseburger</p>
                            <p className="font-thin text-sm " >Recipe by Mario</p>
                    </div>
                    <div className="w-1/3 pt-10 pr-1">
                            <p className="text-sm text-right bg-yellow-200 p-1 rounded-md " > 
                            <FontAwesomeIcon icon="fa-solid fa-timer" />                            
                            25 mins</p>
                    </div>
            </div>
        </div>
    )
}