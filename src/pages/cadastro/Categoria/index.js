import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState(['Teste']);

    const valoresIniciais = {
        nome: 'Categoria Inicial',
        descricao: 'Descrição Inicial',
        cor: '#000',
    }
    const [values, setValues] = useState(valoresIniciais);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values.nome
                ]);
            }}>
                <div>
                    <label>
                        Nome da Categoria:
                        <input
                            type="text"
                            value={values.nome}
                            onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                                // setValues(infosDoEvento.target.value);
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            value={values.descricao}
                            onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                                // setValues(infosDoEvento.target.value);
                            }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Cor:
                        <input
                            type="color"
                            value={values.cor}
                            onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                                // setValues(infosDoEvento.target.value);
                            }}
                        />
                    </label>
                </div>

                <button>
                    Cadastrar Video
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria}
                        </li>
                    )
                })}
            </ul>



            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;