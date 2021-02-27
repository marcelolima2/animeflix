/* eslint-disable react/prop-types */
import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryDescricao = category.descricao;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryDescricao
            && (
            <ExtraLink>
              {categoryDescricao}
            </ExtraLink>
            )}
        </>
      )}
      <Slider>
        {videos.map((video) => (
          <SliderItem key={video.titulo}>
            <VideoCard
              videoTitle={video.titulo}
              videoURL={video.url}
              categoryColor={categoryColor}
              videoImage={video.img}
            />
          </SliderItem>
        ))}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
