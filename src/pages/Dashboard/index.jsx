// caso queira usar o navigation é necesario remover o onAuthStateChange do private route

import supabase from "../../services/supabase"

export default function Dashboard() {

    async function handleLogout(event) {
        event.preventDefault()

        const { error } = await supabase.auth.signOut()

        if (error) {
            alert('deu erro')
        }
    }

    return (
        <div className="h-[100vh] w-full bg-red-500"> 
            <h1>dash</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}