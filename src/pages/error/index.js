import React from 'react';
import PageDefault from '../../components/PageDefault';
import gif from '../../assets/img/404_sad.gif';
import './styles.css';

function ErrorPage() {
  return (
    <PageDefault paddingAll={0}>
      <h1>404</h1>
      <img src={gif} className="GifError" alt="Gif erro 404" />
      <h3>Desculpe, a página que procura não foi encontrada.</h3>
    </PageDefault>
  );
}

export default ErrorPage;
