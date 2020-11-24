import React, { useEffect, useState } from 'react';
import CampaignStyled                 from "./Campaign.style";
import Link                           from 'next/link';
import ItemIndicator                  from "../ItemIndicator/ItemIndicator";
import ArrowLeft                      from "../../static/icons/arrow-left";
import ArrowRight                     from "../../static/icons/arrow-right";
import CloseBtn                       from "../../static/icons/close-btn";
import ArrowUp                        from "../../static/icons/arrow-up";

function Campaign(props) {
  const [ slide, setSlider ] = useState(-1);

  const openSlider = () => {
    if (slide < 0) return setSlider(0);
    if (slide >= props.imgs.length - 1) return props.imgs.length - 1;
    return setSlider(slide + 1);
  }

  const prevSlide = () => {
    if (slide <= 0) return setSlider(0);
    return setSlider(slide - 1);
  }

  const prevSlideWithKeyboard = e => e.keyCode === 37 && prevSlide();
  const nextSlideWithKeyboard = e => e.keyCode === 39 && openSlider();

  const closeSlider = () => setSlider(-1);
  const closeSliderOnKeyPress = e => e.keyCode === 27 && setSlider(-1);

  useEffect(() => {
    document.addEventListener('keydown', e => prevSlideWithKeyboard(e), false);
    document.addEventListener('keydown', e => nextSlideWithKeyboard(e), false);
    document.addEventListener('keydown', e => closeSliderOnKeyPress(e), false);
    return () => {
      document.removeEventListener('keydown', prevSlideWithKeyboard, false);
      document.removeEventListener('keydown', nextSlideWithKeyboard, false);
      document.removeEventListener('keydown', closeSlider, false);
    };
  });

  return (
    <>
      <CampaignStyled>
        <CampaignStyled.P dangerouslySetInnerHTML={ { __html: props.campaign.data.description[ 0 ].text } } />

        <CampaignStyled.MobileGalery>
          <div><ArrowUp /></div>
          { props.imgs.map((img, i) => <CampaignStyled.MobileImg key={ i } srcSet={ img } alt="" />) }
        </CampaignStyled.MobileGalery>

        <CampaignStyled.ItemIndicatorStyled>
          <ItemIndicator
            imgs={ props.imgs }
            current={ slide }
            length={ props.imgs.length }
            withAnimation={ false }
          />
        </CampaignStyled.ItemIndicatorStyled>
      </CampaignStyled>

      <CampaignStyled.Slider>
        <img onClick={ openSlider } srcSet={ props.imgs[ 0 ] } alt="" />
      </CampaignStyled.Slider>

      <CampaignStyled.Slide slide={ slide }>
        <CampaignStyled.CloseSlider onClick={ closeSlider }>
          <CloseBtn />
        </CampaignStyled.CloseSlider>

        <div onClick={ prevSlide } style={ { position: 'absolute', left: 20, zIndex: 200, cursor: 'pointer' } }>
          <ArrowLeft width={ 30 } height={ 30 } />
        </div>

        { props.imgs.map((img, i) =>
          <Link key={ i } href={ '/collections' } as={ '/collections' } passHref={ true }>
            <CampaignStyled.SlideImg key={ i } srcSet={ img } alt="" slide={ slide } index={ i } />
          </Link>
        ) }

        <div onClick={ openSlider } style={ { position: 'absolute', right: 20, zIndex: 200, cursor: 'pointer' } }>
          <ArrowRight width={ 30 } height={ 30 } />
        </div>
      </CampaignStyled.Slide>
    </>
  )
}

export default Campaign;
