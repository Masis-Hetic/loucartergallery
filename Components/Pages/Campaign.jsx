import React, { Component } from 'react';
import { connect }          from 'react-redux';
import CampaignStyled       from './Campaign.style';
import Link                 from 'next/link';

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
                               <Link href={ '/collections' } as={ '/collections' }>
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
            <CampaignStyled.CampaignTitle dangerouslySetInnerHTML={ { __html: campaign.data.title[ 0 ].text } }/>
            <p>{ campaign.data.chapeau[ 0 ].text && campaign.data.chapeau[ 0 ].text }</p>
            <CampaignStyled.CampaignDescription
              dangerouslySetInnerHTML={ { __html: campaign.data.description.map(p => p.text) } }
            />
            <p>{ campaign.data.fin_de_description[ 0 ].text && campaign.data.fin_de_description[ 0 ].text }</p>
          </CampaignStyled.Text
          >
        </CampaignStyled.TextWrapper>
      
      </CampaignStyled>
    );
  }
}

export default connect(mapStateToProps, null)(Campaign);
