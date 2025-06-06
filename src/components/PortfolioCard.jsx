import { useState } from "react";
import { HeartIcon, UserIcon, GithubLogoIcon, LinkedinLogoIcon, EnvelopeSimpleIcon, DownloadSimpleIcon } from "@phosphor-icons/react"

const tabs = ["Sobre", "Projetos", "Links"];

export default function PortfolioCard() {
  const [activeTab, setActiveTab] = useState("Sobre");

  const buttonClasses =
  "flex items-center gap-x-1 text-sm font-semibold px-4 py-2 bg-rose-300 text-white cursor-pointer hover:bg-rose-200 transition";

  const renderContent = () => {
    switch (activeTab) {
      case "Sobre":
        return (
          <>
          <h1 className="mb-2 font-semibold">Sobre mim</h1>
          <p className="text-sm text-justify" >
            <span className="text-rose-300 text-lg font-serif font-style: italic">Olá!</span> Me chamo Francine, sou graduanda em Tecnologia da Informação, 
            desenvolvedora front-end com foco em <strong>React.js</strong>. Possuo experiência prática em desenvolvimento de sistemas com Delphi e Firebird, 
            além de suporte técnico. Entusiasta de UI/UX e design de interfaces com Figma. Atualmente, estou aprofundando habilidades em
            tecnologias modernas do ecossistema <strong>JavaScript</strong> através da Rocketseat.
          </p>

          <h3 className="mt-5 text-sm font-semibold font-style: italic">Palavras-chave:</h3>
          <p className="text-sm mb-5">JavaScript, TypeScript, HTML, CSS, React.js, Delphi, Firebird, TailwindCSS, Git, GitHub, Figma, UI/UX, Web Design, Suporte Técnico, Design Gráfico.</p>

          <div className="flex justify-end">
            <button>
              <a
                href="public\meucv.pdf" download className={buttonClasses}>
                <DownloadSimpleIcon size={20} weight="fill" />
                CV
              </a>
            </button>
          </div>
          </>
        )
      case "Projetos":
        return (
          <>
          <div>
            <h1 className="mb-4 font-semibold">Meus projetos recentes:</h1>
          </div>
          <ul className="list-disc list-inside">
          <li><a href="https://github.com/francinedds/recipes" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-800 underline hover:text-rose-300">Recipes App</a></li>
            <li><a href="https://github.com/francinedds/card-react" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-800 underline hover:text-rose-300">Card</a></li>
            <li><a href="https://github.com/francinedds/memory-game" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-800 underline hover:text-rose-300">Memory Game</a></li>
            <li><a href="https://github.com/francinedds/tic-tac-toe" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-800 underline hover:text-rose-300">Tic-Tac-Toe</a></li>
          </ul>
          </>
        );
      case "Links":
        return (
          <div className="flex flex-col">
          <div>
            <h1 className="mb-2 font-semibold">Contato</h1>
            <p className="text-sm text-justify text-gray-700">
              Sinta-se à vontade para enviar uma mensagem.
            </p>
          </div>
          <div
            className="flex flex-wrap gap-4 mt-4 justify-center"
            role="group"
            aria-label="Links de contato"
          >
            <button
              onClick={() =>
                window.open("https://github.com/francinedds", "_blank")
              }
              className={buttonClasses}
            >
              <GithubLogoIcon size={20} weight="fill" className="align-middle" />
              GitHub
            </button>
      
            <button
              onClick={() =>
                window.open("https://linkedin.com/in/francinedds", "_blank")
              }
              className={buttonClasses}
            >
              <LinkedinLogoIcon size={20} weight="fill" />
              LinkedIn
            </button>
      
            <button
              onClick={() => (window.location.href = "mailto:francined71@gmail.com")}
              className={buttonClasses}
            >
              <EnvelopeSimpleIcon size={20} weight="fill" />
              E-mail
            </button>
          </div>
        </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-4 py-2 flex space-x-4 items-center">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-semibold px-3 py-1 rounded 
              ${activeTab === tab ? "bg-rose-300 text-white shadow cursor-pointer" : "text-gray-600 cursor-pointer hover:text-gray-500"}`}
          >
            {tab}
          </button>
        ))}

      <div className="ml-[120px] flex items-center gap-1">
        <HeartIcon color="#1e2939" weight="fill" size={18} />
        <UserIcon color="#1e2939" weight="regular" size={18} />
      </div>
      </div>
      <div className="p-4 text-gray-800">{renderContent()}</div>
    </div>
  );
}