import { useEffect } from "react"

const minhaPromise = new Promise(
    (resolve, reject) => {
        const x = true
        if (x) resolve({ msg: "Deu certo" })
        else reject({ msg: "Deu errado" })
    }
)

async function tratarPromessa() {
    try{
        const res = await minhaPromise
        console.log("OK: " + res)
    }catch(error){
        console.log("ERROR: " + error)
    }
}

const MeuAsync = () => {
    
    useEffect(
        () => {
            // COM THEN CATCH
            /*
            minhaPromise
            .then(
                (data) => { console.log(data.msg) }
            )
            .catch(
                (data) => { console.log(data.msg) }
            ) 
            */
            getPromise()
        }
        ,
        []
    )

    // COM ASYNC AWAIT
    async function getPromise() {
        try {
            const data = await minhaPromise
            console.log(data.msg)
        } catch (erro) {
            console.log(erro.msg)
        }

    }

    return (
        <>
           <h1>Tratando Async</h1>
        </>
    )
}

export default MeuAsync