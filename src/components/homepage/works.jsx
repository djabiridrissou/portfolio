import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Expertise"
				body={
					<div className="works-body">
						<div className="work-domain">
							<div className="work-icon">💼</div>
							<div className="work-content">
								<div className="work-title">Backend Architecture</div>
								<div className="work-description">
									Designing scalable Node.js systems, REST APIs, database optimization, and microservices for high-traffic applications.
								</div>
							</div>
						</div>

						<div className="work-domain">
							<div className="work-icon">🤖</div>
							<div className="work-content">
								<div className="work-title">AI & RAG Systems</div>
								<div className="work-description">
									Building intelligent document processing, semantic search, and conversational AI with LLMs and vector databases.
								</div>
							</div>
						</div>

						<div className="work-domain">
							<div className="work-icon">🌍</div>
							<div className="work-content">
								<div className="work-title">African Market Solutions</div>
								<div className="work-description">
									Crafting fintech, agricultural, and government platforms tailored for emerging market infrastructure realities.
								</div>
							</div>
						</div>

						<div className="work-domain">
							<div className="work-icon">👥</div>
							<div className="work-content">
								<div className="work-title">Team Leadership</div>
								<div className="work-description">
									Managing development teams, technical decision-making, code review processes, and mentoring engineers.
								</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
