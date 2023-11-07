import Header from "../../components/Header/Header";
import MenuComponent from "../../components/Menu/Menu";


export default function Dashboard(){
    return (
        <>
            <div className="flex bg-gradient-to-r from-green-500 to-green-900">
                <MenuComponent />
                <div className="w-full p-5 md:px-10 xl:px-20 flex flex-col">
                    <Header  />

                </div>
            </div>
            
        </>
    )
}
