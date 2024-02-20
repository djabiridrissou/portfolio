import React from "react";

function article_1() {
	return {
		date: "20 Feb 2024",
		title: "From classical to quantum",
		description:
			"Quantum computing is the subfield of computer science that deals with quantum computers and associated computational models. The notion is opposed to that of so-called classical computing which only exploits phenomena described by classical physics, in particular electricity or classical mechanics. The bit is the simplest unit in a number system, can only take two values, most often designated by the numbers 0 and 1. However, qubits can represent both 0 and 1, they can contain a superposition of all possible states, unlike classical computers. They perform multiple calculations at the same time thanks to their superimposed state, accelerating the resolution of complex problems. Currently, a quantum processor is still in the exploratory stage. The quantum computer will not replace the personal computer or the smartphone; the first customers will certainly be governments and large companies rather than the general public.",
		keywords: [
			"From classical to quantum",
			"Djabir",
			"Djabir I",
			"Djabir IDRISSOU",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Tell me Djabir!</div>
					<img
						src="https://images.pexels.com/photos/18498316/pexels-photo-18498316/free-photo-of-a-typewriter-with-a-paper-that-says-quantum-computing.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;
