import Article from "../components/main-page/Article";
import img from "../assets/img/skrzypas.jpeg";

const ContactPage = () => {
    return(
        <div className={"pt-5"}>
            <Article text={"Lorem ipsum ...."} header={"Kontakt"} img={img}/>
        </div>
    )
}

export default ContactPage;