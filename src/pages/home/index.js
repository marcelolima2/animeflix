import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  // http://localhost:8080/categorias?_embed=videos

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (
      <div className="loading">
        {/* Loading... */}
        <div className="obj" />
        <div className="obj" />
        <div className="obj" />
        <div className="obj" />
        <div className="obj" />
        <div className="obj" />
        <div className="obj" />
        <div className="obj" />
      </div>
      )}

      {dadosIniciais.map((categoria) => (
        <Carousel
          key={categoria.id}
          category={categoria}
        />
      ))}
    </PageDefault>
  );
}

export default Home;
