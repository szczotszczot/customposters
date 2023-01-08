import MainImage from "../components/main-page/MainImage";
import Article from "../components/main-page/Article";
import Footer from "../components/main-page/Footer";
import img from "../assets/img/druk.jpeg"

const MainPage = () => {
    const text = "Wydruk Fine Art, zwany również Giclée to wysokiej jakości druk atramentowy o trwałości archiwalnej.\n" +
        "                    Termin „Giclée”, pochodzi od francuskiego czasownika „gi- cleur”, oznaczającego słowo „pryskać”. Do\n" +
        "                    procesów Giclée używamy najlepszej klasy drukarek Epson UltraChrome K3, które mogą produkować\n" +
        "                    wydruki osiąga- jące rozdzielczość 1440 na 2880 DPI. W theprintspace wyselekcjonowaliśmy 7\n" +
        "                    najlepszych papierów artystycznych o trwałości archiwalnej, pochodzących od światowych producentów,\n" +
        "                    w tym Hahnemühle, Harman oraz Canson. Każdy pa- pier ma inną fakturę i odmienny wachlarz barw,\n" +
        "                    dlatego wybór odpowiedniego papieru dla konkretnego obrazu jest bardzo ważny. W tym artykule\n" +
        "                    przyjrzymy się cechom każdego z naszych 7 profesjonalnych papierów FineArt.";

    const header = "Druk Fine Art & Giclée";

    return (
        <div>
            <MainImage/>
            <div className={"p-5"}></div>
            <Article text={text} header={header} img={img}/>
            <Footer/>
        </div>
    );
}

export default MainPage;