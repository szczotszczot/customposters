interface IArticleProps {
    img: string;
    header: string;
    text: string;
}

const Article = (props: IArticleProps) => {
    return (
        <div className={"d-flex justify-content-around"}>
            <div className={"col-6 d-flex justify-content-center"}>
                <img className={"article-img pt-2"} src={props.img} alt="Dupa123"/>
            </div>
            <div className={"col-6 d-flex flex-column"}>
                <h3 className={"article-header pb-3"}>{props.header}</h3>
                <p className={"article-text"}>
                    {props.text}
                    xd
                </p>
            </div>
        </div>
    )
}

export default Article