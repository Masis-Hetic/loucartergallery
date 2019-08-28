import React, { Component } from 'react';
import CampaignStyled       from "./Campaign.style";
import SanitizedHTML        from 'react-sanitized-html';
import Link                 from "next/link";

class Campaign extends Component {
  state = {
    isOpen: false
  };

  openSlider = () => this.setState( { isOpen: !this.state.isOpen }, () => console.log('fait un truc') );

  render() {
    const { campaign, imgs } = this.props;
    const { isOpen } = this.state;

    // noinspection JSUnresolvedVariable
    return (
      <CampaignStyled
        // className="wrapper campaign-wrapper"
      >
        {/*<CampaignStyled.SliderMobile*/}
        {/*  isOpen={ isOpen ? 'open' : 'close' }*/}
        {/*  // className={ `slide-mobile ${ isOpen ? 'open' : 'close' }` }*/}
        {/*>*/}
        {/*  <p onClick={ this.openSlider }>*/}
        {/*    {JSON.stringify(isOpen)}*/}
        {/*    <svg style={ { width: 28, height: 28 } } viewBox="0 0 24 24">*/}
        {/*      <path fill="#fff" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/>*/}
        {/*    </svg>*/}
        {/*  </p>*/}
        {/*  <ul>*/}
        {/*    { imgs.map( ( img, i ) =>*/}
        {/*      <li key={ i }>*/}
        {/*        <Link href={ '/eshop' } as={ '/eshop' }>*/}
        {/*          <a>*/}
        {/*            <img srcSet={ img } alt="" />*/}
        {/*          </a>*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*    ) }*/}
        {/*  </ul>*/}
        {/*</CampaignStyled.SliderMobile>*/}

        <CampaignStyled.SlidesWrapper>
          <CampaignStyled.Slides>
            <CampaignStyled.SliderWrapper>
              <CampaignStyled.UlDesktop ulWidth={(imgs.length * 100) - (imgs.length * 20)}>
                { imgs.map( ( img, i ) =>
                  <CampaignStyled.LiDesktop key={ i }>
                    <Link href={ '/eshop' } as={ '/eshop' }>
                      <CampaignStyled.ImageLink>
                        <CampaignStyled.ImgDesktop srcSet={ img } alt="" />
                      </CampaignStyled.ImageLink>
                    </Link>
                  </CampaignStyled.LiDesktop>
                ) }
              </CampaignStyled.UlDesktop>
            </CampaignStyled.SliderWrapper>
          </CampaignStyled.Slides>
        </CampaignStyled.SlidesWrapper>

        <CampaignStyled.TextWrapper>
          <CampaignStyled.Text>
            <CampaignStyled.CampaignTitle dangerouslySetInnerHTML={{ __html: campaign.data.title[ 0 ].text }}/>
            <p>{ campaign.data.chapeau[ 0 ].text && campaign.data.chapeau[ 0 ].text }</p>
            <CampaignStyled.CampaignDescription
              dangerouslySetInnerHTML={{ __html: campaign.data.description.map( p => p.text ) }}
            />
            <p>{ campaign.data.fin_de_description[ 0 ].text && campaign.data.fin_de_description[ 0 ].text }</p>
          </CampaignStyled.Text>
        </CampaignStyled.TextWrapper>

      </CampaignStyled>
    );
  }
}

export default Campaign;
