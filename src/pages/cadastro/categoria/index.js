import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoryRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values } = useForm(valoresIniciais);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://flixanime.herokuapp.com/categorias';

    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // eslint-disable-next-line no-alert
        alert('Categoria cadastrada com SUCESSO!!');

        categoryRepository.create({
          titulo: values.nome,
          cor: values.cor,
          descricao: values.descricao,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Button from '../../../components/Button';
// import FormField from '../../../components/FormField';
// import PageDefault from '../../../components/PageDefault';
// import useForm from '../../../hooks/useForm';

// function CadastroCategoria() {
//   const valorInicial = {
//     nome: '',
//     descricao: '',
//     cor: '',
//   };

//   const { handleChange, values, clearForm } = useForm(valorInicial);

//   const [categoria, setCategoria] = useState([]);

//   useEffect(() => {
//     const URL_SERVER = window.location.href.includes('localhost')
//       ? 'http://localhost:8080/categorias'
//       : 'hhtps://herokuapp';
//     fetch(URL_SERVER)
//       .then(async (respostaDoServer) => {
//         if (respostaDoServer.ok) {
//           const resposta = await respostaDoServer.json();
//           setCategoria(resposta);
//           return;
//         }
//         throw new Error('Não foi possível pegar os dados');
//       });
//   }, []);

//   return (
//     <PageDefault>
//       <h1>
//         Cadastro de Categoria:
//         {values.nome}
//       </h1>

//       <form onSubmit={function handleSubmit(info) {
//         info.preventDefault();
//         setCategoria([
//           ...categoria,
//           values,
//         ]);

//         clearForm();
//       }}
//       >

//         <FormField
//           label="Nome da Categoria:"
//           type="text"
//           name="nome"
//           value={values.nome}
//           onChange={handleChange}
//         />

//         <FormField
//           label="Descrição:"
//           type="textarea"
//           name="descricao"
//           value={values.descricao}
//           onChange={handleChange}
//         />

//         <FormField
//           label="Cor:"
//           type="color"
//           name="cor"
//           value={values.cor}
//           onChange={handleChange}
//         />

//         <Button>
//           Cadastrar
//         </Button>
//       </form>

//       { categoria.length === 0 && (
//       <div>
//         Loading...
//       </div>
//       )}

//       <ul>
//         {categoria.map((category, indice) => (
//           // eslint-disable-next-line react/no-array-index-key
//           <li key={`${category}${indice}`}>
//             {category.titulo}
//           </li>
//         ))}
//       </ul>

//       <Link to="/">
//         Ir para home
//       </Link>
//     </PageDefault>
//   );
// }

// export default CadastroCategoria;
