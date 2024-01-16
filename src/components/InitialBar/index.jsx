import { StyleInitialPage } from "./style";
// import { AiFillGithub } from "react-icons/ai";
// import { BsLinkedin } from "react-icons/bs";

export function InitialPage() {
    return (
        <StyleInitialPage>
            <div>
                <h4>Olá, eu sou</h4>
                <h2>Bruno Prado Gomes</h2>
                <h3>Desenvolvedor full stack</h3>
                <div className="BoxButtons">
                    <button>
                        <b> Linkedin</b>
                    </button>
                    <button>
                        <b> GitHub</b>
                    </button>
                </div>
            </div>




        </StyleInitialPage>
    )

}