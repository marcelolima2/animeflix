import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 220px;
  height: 280px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

VideoCardContainer.Title = styled.h4`
  position: absolute;
  align: center;
  padding: 5%;
  width: 100%;
  text-align: center;
  opacity: 0;
  bottom: 0;   
  text-decoration: none;
  transition: all .5s;
  background-color: rgb(0,0,0,.8);
`;

export const VideoCardWrapper = styled.div`
  position: relative;
  align: center;
  &:hover a,
  &:focus a{
    opacity: 1;
  } 
`;
