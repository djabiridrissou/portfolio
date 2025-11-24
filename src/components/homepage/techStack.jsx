import React from "react";
import Card from "../common/card";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./styles/techStack.css";

const TechStack = () => {
	return (
		<div className="tech-stack">
			<Card
				icon={faCode}
				title="Technology Stack"
				body={
					<div className="tech-stack-body">
						<div className="tech-category">
							<div className="tech-category-title">Backend & APIs</div>
							<div className="tech-list">
								<span className="tech-badge">Node.js</span>
								<span className="tech-badge">Spring Boot</span>
								<span className="tech-badge">TypeScript</span>
								<span className="tech-badge">MongoDB</span>
								<span className="tech-badge">Flask APIs</span>
								<span className="tech-badge">Fast APIs</span>
								<span className="tech-badge">Socket.IO</span>
								<span className="tech-badge">Express</span>
							</div>
						</div>

						<div className="tech-category">
							<div className="tech-category-title">Frontend</div>
							<div className="tech-list">
								<span className="tech-badge">React</span>
								<span className="tech-badge">Vue</span>
								<span className="tech-badge">Angular</span>
								<span className="tech-badge">Stencil.js</span>
								<span className="tech-badge">Flutter</span>
								<span className="tech-badge">TailwindCSS</span>
							</div>
						</div>

						<div className="tech-category">
							<div className="tech-category-title">AI & ML</div>
							<div className="tech-list">
								<span className="tech-badge">RAG Systems</span>
								<span className="tech-badge">Qdrant</span>
								<span className="tech-badge">Claude API</span>
								<span className="tech-badge">Ollama</span>
								<span className="tech-badge">Vector Embeddings</span>
								<span className="tech-badge">TensorFlow.js</span>
							</div>
						</div>

						<div className="tech-category">
							<div className="tech-category-title">DevOps & Integrations</div>
							<div className="tech-list">
								<span className="tech-badge">Docker</span>
								<span className="tech-badge">Git</span>
								<span className="tech-badge">AWS</span>
								<span className="tech-badge">Payment APIs</span>
								<span className="tech-badge">Mobile Money (USSD Gateway)</span>
								<span className="tech-badge">SMS Services</span>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default TechStack;