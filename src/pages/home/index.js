import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

function Home() {
  return (
    <PageDefault>
      
      
    {/*  <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End?"}
      />
    */}
      <Carousel 
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        category={dadosIniciais.categorias[4]}
      />
      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      
    </PageDefault>
  );
}

export default Home;
