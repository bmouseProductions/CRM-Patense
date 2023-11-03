import { Player } from '@lottiefiles/react-lottie-player';
import statics from '../../assets/animations/grafics.json'

export default function Home(){
    return (
        <>
            <div className="min-h-screen  flex ">
                <div className="bg-[#11683d] min-h-screen w-1/2 flex flex-col justify-center items-center">
                    <h1 className=" mb-7 md:text-5xl text-white font-semibold">Bem-Vindo</h1>
                    <div className="flex flex-col gap-5">
                        <div>
                            <label htmlFor="user"></label>
                            <input type="text" id="user" className="h-[50px] w-[400px] p-3 bg-white shadow-xl rounded-[50px] outline-[#ff7100]" placeholder="Usuário" />
                        </div>
                        
                        <div>
                            <label htmlFor="password"></label>
                            <input type="text" id="password" className="h-[50px] w-[400px] p-3 bg-white shadow-xl rounded-[50px] outline-[#ff7100]" placeholder="Senha" />
                        </div>

                        <div>
                            <button type="submit" className="mt-5 h-[50px] w-[400px] p-3 font-2xl font-bold text-white hover:text-black bg-[#60e341] hover:bg-white transition-all shadow-2xl rounded-[50px]">
                                ENTRAR
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" min-h-screen w-1/2 flex justify-center items-center">
                    <Player
                        autoplay
                        loop
                        src={statics}
                        className='w-[90%] '
                    />
                </div>
            </div>
        </>
    )
}