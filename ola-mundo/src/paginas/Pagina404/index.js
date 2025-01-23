import BotaoPrincipal from 'componentes/BotaoPrincipal';
import styles from './Pagina404.module.css';
import erro404 from 'assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

export default function Pagina404() {
    const navegar = useNavigate();

    return (
        <main>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando? <br/>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>
                <div 
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                    <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
                </div>
                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt='Cachoro de óculos vestido como humano'
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </main>
    )
}