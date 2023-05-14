import { useRef } from "react";
import { CatModal } from "./components/CatModal";
import moon from "../src/assets/moon.png";
import land from "../src/assets/land.jpg";
import cat from "../src/assets/cat.gif";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
	const ref = useRef();

	return (
		<div>
			<Parallax pages={4} ref={ref}>
				<ParallaxLayer
					offset={0}
					speed={1}
					factor={2}
					style={{
						backgroundImage: `url(${moon})`,
						backgroundSize: "cover"
					}}
				/>

				<ParallaxLayer
					offset={2}
					speed={1}
					factor={4}
					style={{
						backgroundImage: `url(${land})`,
						backgroundSize: "cover"
					}}></ParallaxLayer>

				<ParallaxLayer
					sticky={{ start: 0.9, end: 2.2 }}
					style={{ textAlign: "center" }}>
					<img src={cat} />
					<CatModal />
				</ParallaxLayer>

				<ParallaxLayer
					offset={0.2}
					speed={0.05}
					onClick={() => ref.current.scrollTo(3)}>
					<h2>Ninguna fortaleza me podrá apartar de tí!</h2>
				</ParallaxLayer>

				<ParallaxLayer
					offset={3}
					speed={2}
					onClick={() => ref.current.scrollTo(0)}></ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default App;
