import { useState } from "react";
import "./Meme.css";
import { memesData } from "@src/memesData.ts";

export default function Meme() {
	let url = "";

	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});

	const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes);

	// Get a random meme from the memesData
	function getMemeImage() {
		const memes = allMemeImages;
		const randomIndex = Math.floor(Math.random() * memes.length);
		url = memes[randomIndex].url;
		//Update the state with the new meme image
		setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
	}

	return (
		<main>
			<div className="form meme">
				<div className="meme__top-text">
					<label htmlFor="top-text" className="meme__top-text__label">
						Top Text
					</label>
					<input
						name="top-text"
						type="text"
						placeholder="Shut up"
						className="meme__top-text__input"
					/>
				</div>
				<div className="meme__bottom-text">
					<label
						htmlFor="bottom-text"
						className="meme__bottom-text__label"
					>
						Bottom Text
					</label>
					<input
						name="bottom-text"
						type="text"
						placeholder="And take my money"
						className="meme__bottom-text__input"
					/>
				</div>
				<button
					className="meme__new-image-button"
					onClick={getMemeImage}
				>
					Get a new meme image 🖼
				</button>
			</div>
			{/* Image only shows after clicking the button */}
			<div className="meme__image">
				{meme.randomImage && <img src={meme.randomImage} alt="meme" />}
			</div>
		</main>
	);
}
