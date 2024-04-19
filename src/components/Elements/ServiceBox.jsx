import React from "react";
import styled from "styled-components";
// Assets
import LivraisonIcon from "../../assets/svg/Services/livraison-expres.png";
import DemenagementIcon from "../../assets/svg/Services/camion-de-demenagemen.png";
import LocationIcon from "../../assets/svg/Services/location-de-voiture.png";
import ImportIcon from "../../assets/svg/Services/exportation.png";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case 'livraison':
      getIcon = <img src={LivraisonIcon} alt='livraison Service' />;;
      break;
    case 'location':
      getIcon = <img src={LocationIcon} alt='location de vehicule Service' />;;
      break;
    case 'demenagement':
      getIcon = <img src={DemenagementIcon} alt='demanagement Service' />;;
      break;
    case 'import':
      getIcon = <img src={ImportIcon} alt='import-export Service' />;;
      break;
    default:
      getIcon = <img src={LivraisonIcon} alt='livraison Service' />;;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font18">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;