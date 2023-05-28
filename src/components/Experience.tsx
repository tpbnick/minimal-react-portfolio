const Experience = () => (
	<div className="text-white text-left mx-auto max-w-4xl">
		<div className="pb-5">
			<div className="flex justify-between text-2xl font-bold">
				Software Engineer{" "}
				<span className="text-right text-lg font-normal">Month 2022 - Present</span>
			</div>
			<div className="text-xl">Company X</div>
			<ul className="list-disc pl-6 pt-3">
				<li>
					Utilized GitHub to manage the version control of different repositories of
					data.
				</li>
				<li>Generated x number of tests utilizing Framework X.</li>
				<li>
					Tested new features before release to users to ensure operability and
					document any issues/bugs.
				</li>
				<li>
					Created X amount of new features that were integrated into production.
				</li>
				<li>
					Completed numerous pull request reviews to merge code into multiple
					codebases.
				</li>
			</ul>
		</div>
		<div className="pb-5">
			<div className="flex justify-between text-2xl font-bold">
				Software Engineer{" "}
				<span className="text-right text-lg font-normal">
					Month 2021 - Month 2022
				</span>
			</div>
			<div className="flex justify-between text-xl">Company Y</div>
			<ul className="list-disc pl-6 pt-3">
				<li>Utilized GitLab to manage different repositories of data.</li>
				<li>
					Updated API documentation for new features and to improve user's ability to
					integrate with our tools.
				</li>
				<li>
					Answered user questions through JIRA and created help tickets to track
					fixes for future cases.
				</li>
				<li>Created Swagger API documentation for X number of endpoints.</li>
			</ul>
		</div>
		<div className="pb-5">
			<div className="flex justify-between text-2xl font-bold">
				Outreach Engineer{" "}
				<span className="text-right text-lg font-normal">
					Month 2018 - Month 2021
				</span>
			</div>
			<div className="flex justify-between text-xl">Company Z</div>
			<ul className="list-disc pl-6 pt-3">
				<li>
					Provided outreach support over social platforms to aid in increasing user
					base and spreading new information.
				</li>
				<li>
					Tested new features before release to production, while reporting bugs and
					suggestions directly to developers.
				</li>
				<li>
					Worked efficiently in an agile environment, meeting deadlines and sprint
					goals.
				</li>
				<li>
					Assisted with proposal writings for multimillion-dollar contracts, focusing
					on grammar and style compliance.
				</li>
			</ul>
		</div>
		<div className="pb-5">
			<div className="flex justify-between text-2xl font-bold">
				Helpdesk Engineer{" "}
				<span className="text-right text-lg font-normal">
					Month 2015 - Month 2018
				</span>
			</div>
			<div className="flex justify-between text-xl">Company Z</div>
			<ul className="list-disc pl-6 pt-3">
				<li>Provided quick customer support for typical web application issues.</li>
				<li>
					Utilized remote desktop software to directly engage and help customers.
				</li>
				<li>Created and monitored user help tickets in Atlassian Jira.</li>
				<li>
					Ensured customer satisfaction through great customer service and received
					over X five star reviews.
				</li>
			</ul>
		</div>
		<div className="pb-5 flex">
			<button
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg mx-auto bg-atom2 hover:bg-atom1"
			>
				To Top
			</button>
		</div>
	</div>
);

export default Experience;
