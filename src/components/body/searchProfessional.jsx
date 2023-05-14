import React from "react";

const SearchProfessional = () => {
    return (
        <section>
            <form>
                <label>
                    Pesquisar
                    <input type="text" name="searchProfessional" placeholder="Pesquisar o profissional" />
                </label>
                <input type="submit" value="Pesquisar" />
                </form>
        </section>
    )
}

export default SearchProfessional