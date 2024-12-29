
export default function SignIn() {
  return (
    <>
        <div className="w-full flex justify-center items-center mt-56">
            <form className="border p-20 rounded-md w-fit flex flex-col gap-5" action="">

                <div>
                    <h3 className="text-xl font-bold">Inicia Sesión</h3>
                    <p>Ingresa tus credenciales para acceder</p>
                </div>
                
                <input placeholder="Correo electrónico" className="border p-2 rounded-md w-full" type="text" />
                
                <input placeholder="Contraseña" className=" border p-2 rounded-md w-full" type="text" />

                

                <button className="border w-fit p-2 rounded-md mx-auto bg-black text-white">Iniciar sesión</button>
    
            </form>
        </div>
    </>
  )
}
