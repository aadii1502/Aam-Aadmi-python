import React from "react";
import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

const Program = () => {
	return (
		<section className="programs">
			<div className="programs container">
				<SectionHead icon={<FaCrown />} title="Programs" />

				<div className="program__wrapper">
					{programs.map(({ id, icon, title, info, path }) => {
						return (
							<Card className="programs__program" key={id}>
								<span>{icon}</span>
								<h4>{title}</h4>
								<small>{info}</small>
								<Link to={path} className="btn sm">
									Learn More <AiFillCaretRight />
								</Link>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Program;
