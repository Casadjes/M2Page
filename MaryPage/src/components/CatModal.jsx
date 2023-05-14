import "./CatModal.css";
import { useState } from "react";
import { Book } from "./Book";

export function CatModal() {
	const [btn, setBtn] = useState(false);
	const [book, setBook] = useState(false);

	function vanishModal() {
		setBtn(true);
		setBook(true);
	}

	return (
		<>
			{btn ? null : (
				<div className='cardMessage'>
					<p>
						&quot;¡Rayos! Estoy atrapado en una rama, pero quiero que leas esto
						en caso de que no pueda verte más...&quot;
					</p>
					<button className='cardMessage__btn' onClick={vanishModal}>
						Leer
					</button>
				</div>
			)}
			{book ? <Book /> : null}
		</>
	);
}
