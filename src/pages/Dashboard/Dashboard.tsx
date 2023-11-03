import Header from "../../components/Header/Header";
import MenuComponent from "../../components/Menu/Menu";


export default function Dashboard(){
    return (
        <>
            <div className="flex h-full">
                <MenuComponent />
                <Header  />
            </div>
            
        </>
    )
}
