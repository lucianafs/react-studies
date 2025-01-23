import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
// import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
	return (
		<PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
			<h3 className={styles.subtitulo}>Olá, eu sou a Luciana!</h3>

			{/* <img
				src={fotoSobreMim}
				alt="Foto da Luciana"
				className={styles.fotoSobreMim}
			/> */}

			<p className={styles.paragrafo}>
				Sou desenvolvedora front-end sênior com mais de 10 anos de experiência na criação de interfaces
				intuitivas e eficientes para sistemas web, websites responsivos e aplicações Single Page (SPA). <br/>
				Tenho sólida expertise em tecnologias de front-end, focando na entrega de soluções que
				proporcionam uma excelente experiência ao usuário. Além da minha paixão por tecnologia, gosto
				de explorar outras áreas criativas, como desenho, leitura e jogos.
			</p>
		</PostModelo>
	);
}
