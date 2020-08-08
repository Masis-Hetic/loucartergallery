import React, { useEffect, useState } from 'react';
import CampaignStyled from "./Campaign.style";
import Link from 'next/link';
import ItemIndicator from "../ItemIndicator/ItemIndicator";
import ArrowLeft from "../../static/icons/arrow-left";
import ArrowRight from "../../static/icons/arrow-right";
import CloseBtn from "../../static/icons/close-btn";
import ArrowUp from "../../static/icons/arrow-up";

function Campaign(props) {
  const [ slide, setSlider ] = useState(-1);

  const openSlider = () => {
    if (slide < 0) return setSlider(0);
    if (slide >= props.imgs.length - 1) return props.imgs.length -1;
    return setSlider(slide + 1);
  }

  const prevSlide = () => {
    if (slide <= 0) return setSlider(0);
    return setSlider(slide -1);
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
      <CampaignStyled.P dangerouslySetInnerHTML={{ __html: props.campaign.data.description[0].text }} />

      <CampaignStyled.MobileGalery>
        <div><ArrowUp /></div>
        {props.imgs.map((img, i) => <CampaignStyled.MobileImg key={i} srcSet={img} alt="" /> )}
      </CampaignStyled.MobileGalery>

      <CampaignStyled.ItemIndicatorStyled>
        <ItemIndicator
          imgs={props.imgs}
          current={slide}
          length={props.imgs.length}
          withAnimation={false}
          width={`${50 / props.imgs.length}vw`}
        />
      </CampaignStyled.ItemIndicatorStyled>
    </CampaignStyled>

    <CampaignStyled.Slider>
      <img onClick={openSlider} srcSet={props.imgs[0]} alt="" />
    </CampaignStyled.Slider>

    <CampaignStyled.Slide slide={slide}>
      <CampaignStyled.CloseSlider onClick={closeSlider}>
        <CloseBtn />
      </CampaignStyled.CloseSlider>

      <div onClick={prevSlide} style={{ position: 'absolute', left: 20, zIndex: 200, cursor: 'pointer' }}>
        <ArrowLeft />
      </div>

      {props.imgs.map((img, i) =>
        <Link key={i} href={'/collections'} as={'/collections'} passHref={true}>
          <CampaignStyled.SlideImg key={i} srcSet={img} alt="" slide={slide} index={i} />
        </Link>
      )}

      <div onClick={openSlider} style={{ position: 'absolute', right: 20, zIndex: 200, cursor: 'pointer' }}>
        <ArrowRight />
      </div>
    </CampaignStyled.Slide>
  </>
  )
}

export default Campaign;































/*
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import CampaignStyled       from './Campaign.style';
import Link                 from 'next/link';
import { get }              from 'lodash/fp';

import ArrowUp            from '../../static/icons/arrow-up';
import { overflowStatus } from '../../store/actions/controlOverflow.action';

const mapStateToProps = state => ({ overflowStatus: state.overflowStatus });

class Campaign extends Component {
  
  state = { isOpen: false };
  
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(overflowStatus(true));
  }
  
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(overflowStatus(false));
  }
  
  openSlider = () => this.setState({ isOpen: !this.state.isOpen });
  
  render() {
    const { campaign, imgs } = this.props;
    const { isOpen } = this.state;
    
    // noinspection JSUnresolvedVariable
    return (
      <CampaignStyled>
        <CampaignStyled.SlidesWrapper isOpen={ isOpen }>
          <CampaignStyled.Slides isOpen={ isOpen }>
            <CampaignStyled.SliderWrapper isOpen={ isOpen }>
              
              <CampaignStyled.UpBtn isOpen={ isOpen } onClick={ this.openSlider }>
                <ArrowUp/>
              </CampaignStyled.UpBtn>
              
              <CampaignStyled.UlDesktop ulWidth={ (imgs.length * 100) - (imgs.length * 20) }>
                
                { imgs.map((img, i) =>
                 <CampaignStyled.LiDesktop key={ i }>
                   <Link href={ { pathname: '/collections' } } as={ '/collections' }>
                     <CampaignStyled.ImageLink>
                       <CampaignStyled.ImgDesktop srcSet={ img } alt=""/>
                     </CampaignStyled.ImageLink>
                   </Link>
                 </CampaignStyled.LiDesktop>
                ) }
              
              </CampaignStyled.UlDesktop>
            </CampaignStyled.SliderWrapper>
          </CampaignStyled.Slides>
        
        </CampaignStyled.SlidesWrapper>
        
        <CampaignStyled.TextWrapper isOpen={ isOpen }>
          
          <CampaignStyled.Text>
            <CampaignStyled.CampaignTitle dangerouslySetInnerHTML={ { __html: get('data.title[ 0 ].text', campaign) } }/>
            <p>{ get('data.chapeau[ 0 ].text', campaign) && get('data.chapeau[ 0 ].text', campaign) }</p>
            <CampaignStyled.CampaignDescription
              dangerouslySetInnerHTML={ { __html: campaign.data.description.map(p => p.text) } }
            />
            <p>{ get('data.fin_de_description[ 0 ].text', campaign) }</p>
          </CampaignStyled.Text
          >
        </CampaignStyled.TextWrapper>
      
      </CampaignStyled>
    );
  }
}

export default connect(mapStateToProps, null)(Campaign);
*/
