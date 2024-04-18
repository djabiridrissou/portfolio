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
			"AI is changing healthcare by making things better for patients and hospitals. It helps doctors diagnose diseases faster and more accurately. Also, AI can predict which patients might get sick in the future, so doctors can help them stay healthy. AI is also making it easier for patients to get help. They can talk to AI assistants to book appointments and get medical advice without going to the hospital. And in finding new medicines, AI is like a super-fast researcher. It looks at lots of data to find new treatments for diseases. Additionally, AI-powered virtual assistants and chatbots are transforming the patient experience by providing personalized and accessible healthcare services. Patients can now interact with AI-powered virtual assistants to schedule appointments, receive medical advice, and access relevant health information from the comfort of their homes. This not only enhances convenience for patients but also reduces the burden on healthcare facilities, allowing them to focus on more critical tasks. In short, AI is making healthcare smarter, faster, and more personal. It's helping doctors help patients better.",
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
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Djabir",
			"IDRISSOU",
			"IDRISSOU Djabir",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Tell me Djabir!</div>
					<img
						src="https://images.pexels.com/photos/17485683/pexels-photo-17485683/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-illustration-depicts-how-ai-could-be-used-in-the-field-of-sustainability-from-biodiversity-to-climate-it-was-created-by-nidi.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
