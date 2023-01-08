import {Link} from "react-router-dom";

const MenuBar = () => {
    return (
        <div className={"w-100 d-flex menu-border-bottom justify-content-around"}>
            <div>
                <Link to={"/"}>
                    <p className={"menu-logo-text link"}>druk w kamienicy</p>
                </Link>
            </div>
            <div className={"w-100 d-flex flex-row-reverse"}>
                <div className={"menu-button-text d-flex align-items-center text-center px-3"}>
                    <Link to={"/zamowienie"} className={"link"}>
                        <p className={"menu-button-black px-4 py-2"} style={{color: "white"}}>Zamów</p>
                    </Link>
                </div>
                <div className={"menu-button-text d-flex align-items-center text-center px-3"}>
                    <Link to={"/kontakt"} className={"link"}>
                        <p>Kontakt</p>
                    </Link>
                </div>
                <div className={"menu-button-text d-flex align-items-center text-center px-3"}>
                    <Link to={"/cennik"} className={"link"}>
                        <p>Cena</p>
                    </Link>
                </div>
                <div className={"menu-button-text d-flex align-items-center text-center px-3"}>
                    <Link to={'/dostawa'} className={"link "}>
                        <p>Dostawa</p>
                    </Link>
                </div>
                <div className={"menu-button-text d-flex align-items-center text-center px-3"}>
                    <Link to={"/"} className={"link"}>
                        <p>Druk</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MenuBar;