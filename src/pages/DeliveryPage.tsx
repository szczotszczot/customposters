import Article from "../components/main-page/Article";
import img from "../assets/img/skrzypas.jpeg"
const DeliveryPage = () => {
    const text = "Wydruk Fine Art, zwany również Giclée to wysokiej jakości druk atramentowy o trwałości archiwalnej. Termin „Giclée”, pochodzi od francuskiego czasownika „gi- cleur”, oznaczającego słowo „pryskać”. Do procesów Giclée używamy najlepszej klasy drukarek Epson UltraChrome K3, które mogą produkować wydruki osiąga- jące rozdzielczość 1440 na 2880 DPI. W theprintspace wyselekcjonowaliśmy 7 najlepszych papierów artystycznych o trwałości archiwalnej, pochodzących od światowych producentów, w tym Hahnemühle, Harman oraz Canson. Każdy pa- pier ma inną fakturę i odmienny wachlarz barw, dlatego wybór odpowiedniego papieru dla konkretnego obrazu jest bardzo ważny. W tym artykule przyjrzymy się cechom każdego z naszych 7 profesjonalnych papierów FineArt."
    return (
        <div className={"pt-5"}>
            <Article text={text} header={"Dostawa"} img={img}/>
        </div>
    )
}


export default DeliveryPage;