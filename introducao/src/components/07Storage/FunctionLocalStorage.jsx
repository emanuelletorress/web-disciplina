const SaveData = () => {

    function saveData() {
        const aluno = { nome: "Manu", curso: "CC" }
        localStorage.setItem("aluno01", JSON.stringify(aluno))
    }

    return (
        <div>
            <h1>Saving data...</h1>
            {
                saveData()
            }
            <LoadData />
        </div>
    )
}

const LoadData = () => {

    function loadData() {
        const alunoLoaded = JSON.parse(localStorage.getItem("aluno01"))
        return (
            <div>
                <h3>
                    Nome: {alunoLoaded.nome}
                </h3>
                <h3>
                    Curso: {alunoLoaded.curso}
                </h3>
            </div>
        )
    }

    return (
        <div>
            <h1>Loading Data...</h1>
            {
                loadData()
            }
        </div>
    )
}

export default SaveData