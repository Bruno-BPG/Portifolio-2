import { StyleNavBar } from "./style";

export function NavBar(){
    return (
        <StyleNavBar>

            <div className="logo">
                <div className="HtmlLogo">
                    {/* 5 */}
                </div>

                <div className="CssLogo">
                    {/* 3 */}
                </div>

                <div className="JsLogo">
                    {/* JS */}
                </div>
            </div>


            <nav>
                <div className="ItenNav">
                    <b>Início</b>
                </div>
                <div className="ItenNav">
                    <b>Habilidades</b>
                </div>
                <div className="ItenNav">
                    <b>Projetos</b>
                </div>
                <div className="ItenNav">
                    <b>Sobre mim</b>
                </div>
            </nav>
        </StyleNavBar>
    );
}