import skrzypas from '../../assets/img/skrzypas.jpeg';

const Footer = () => {
  return(
      <div className={"d-flex justify-content-center pt-5"}>
          <div className={"text-center pe-5"}>
              <img className={"footer-img mb-3"} src={skrzypas} alt="Dupa123"/>
              <p className={"footer-header"}>Trwalosc Archiwalna</p>
              <p className={"footer-subtext"}>80 lat</p>
          </div>
          <div className={"text-center px-5"}>
              <img className={"footer-img mb-3"} src={skrzypas} alt="Dupa123"/>
              <p className={"footer-header"}>11 tuszy</p>
              <p className={"footer-subtext"}>Tryb koloru CMYK</p>
          </div>
          <div className={"text-center ps-5"}>
              <img className={"footer-img mb-3"} src={skrzypas} alt="Dupa123"/>
              <p className={"footer-header"}>2880 x 1440 DPI</p>
              <p className={"footer-subtext"}>Wiecej punktow na cal kw.</p>
          </div>
      </div>
  )
}

export default Footer;