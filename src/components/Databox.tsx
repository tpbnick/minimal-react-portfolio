import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import Headshot from "../assets/headshot.png";
import Photography from "../assets/photography.png";
import Pup from "../assets/pup.png";
import NotesApp from "../assets/notes.png";
import GameApp from "../assets/game.png";
import ImageEditor from "../assets/imageeditor.png";
import PasteApp from "../assets/paste.png";

type ItemType = {
	name: string;
	data: string | JSX.Element;
} | null;

const Databox = () => {
	const [selectedItem, setSelectedItem] = useState<ItemType>(null);
	const [isFading, setIsFading] = useState<boolean>(false);

	const images = [
		{ src: Headshot, alt: "Me", caption: "My headshot" },
		{ src: Photography, alt: "My photography", caption: "Swiss Village" },
		{ src: Pup, alt: "Pup Image", caption: "Pup" },
	];

	const aboutData = (
		<div className="text-white mx-auto max-w-4xl">
			<p className="pb-8">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id consectetur mi. Nullam venenatis feugiat dolor, id eleifend metus. Aliquam erat volutpat. Nulla facilisi. Morbi a risus eget tellus fringilla facilisis. Vivamus maximus, est non consequat faucibus, velit sem rhoncus leo, et posuere enim justo id ipsum. Proin in purus sed mauris consequat aliquam sed nec lacus. Quisque nec urna ac neque finibus ultrices. Mauris consectetur gravida arcu, nec commodo felis auctor vitae.
				Fusce condimentum justo eget tortor dapibus, ac malesuada dolor interdum. In pretium rutrum nulla at semper. Suspendisse a semper elit. Nunc pharetra hendrerit libero, at viverra nulla. Nullam vulputate dui eu erat placerat fringilla.
			</p>
			<div className="photo-gallery">
				<PhotoProvider>
					<div className="photo-gallery flex">
						{images.map((image, index) => (
							<PhotoView key={index} src={image.src}>
								<div className="max-h-6 pt-3 px-3 mx-auto">
									<img src={image.src} alt={image.alt} className="rounded-lg" />
								</div>
							</PhotoView>
						))}
					</div>
				</PhotoProvider>
			</div>
		</div>
	);

	const educationData = (
		<div className="text-white mx-auto max-w-4xl">
			<div className="flex justify-between mb-4 pb-4">
				<div className="text-left">
					<p className="text-base sm:text-lg md:text-xl lg:text-xl">Master of Science</p>
					<p className="text-base sm:text-lg md:text-xl lg:text-xl">Software Engineering</p>
					<p className="text-sm sm:text-base md:text-lg">UNIVERSITY OF X</p>
				</div>
				<div className="text-right">
					<p className="text-sm sm:text-base md:text-lg lg:text-l">January 2021 - April 2023</p>
					<p className="text-sm sm:text-base md:text-lg">GPA: 4.0</p>
				</div>
			</div>
			<div className="flex justify-between mb-4">
				<div className="text-left">
					<p className="text-base sm:text-lg md:text-xl lg:text-xl">Bachelor of Science</p>
					<p className="text-base sm:text-lg md:text-xl lg:text-xl">Computer Science</p>
					<p className="text-sm sm:text-base md:text-lg">UNIVERSITY OF X</p>
				</div>
				<div className="text-right">
					<p className="text-sm sm:text-base md:text-lg lg:text-xl">July 2017 - May 2020</p>
					<p className="text-sm sm:text-base md:text-lg">GPA: 3.8</p>
				</div>
			</div>
		</div>
	);

	const skillsData = (
		<div className="text-white mx-auto max-w-4xl">
			<div className="pb-4">
				<p className="pb-3">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id consectetur mi. Nullam venenatis feugiat dolor, id eleifend metus. Aliquam erat volutpat. Nulla facilisi. Morbi a risus eget tellus fringilla facilisis. Vivamus maximus, est non consequat faucibus, velit sem rhoncus leo, et posuere enim justo id ipsum. Proin in purus sed mauris consequat aliquam sed nec lacus. Quisque nec urna ac neque finibus ultrices. Mauris consectetur gravida arcu, nec commodo felis auctor vitae.
					Fusce condimentum justo eget tortor dapibus, ac malesuada dolor interdum. In pretium rutrum nulla at semper. Suspendisse a semper elit. Nunc pharetra hendrerit libero, at viverra nulla. Nullam vulputate dui eu erat placerat fringilla.
				</p>
				<p className="pb-8">
					Phasellus malesuada consectetur augue at faucibus. Aliquam eu consequat lectus, sed ultrices mi. Donec vel feugiat neque. Mauris consectetur velit vel lectus aliquam varius. Aliquam mattis sem at eros ultricies, id laoreet odio malesuada. Sed eget nunc sed metus pharetra rutrum. Curabitur nec congue lectus. Phasellus id sagittis nulla, sit amet consequat lacus. Proin pellentesque lorem quis lectus eleifend pulvinar. Vivamus dictum metus eget ante mattis ullamcorper. Etiam viverra, elit
					nec egestas tempor, est ipsum pulvinar mi, at scelerisque urna leo vel metus.
				</p>
			</div>
			<div className="mockup-code text-left max-w-xl mx-auto text-sm sm:text-base md:text-lg lg:text-lg">
				<pre data-prefix="$" className="text-success">
					<code>Python, JavaScript, TypeScript, Java</code>
				</pre>
				<pre data-prefix=">" className="text-warning">
					<code>React, ExpressJS, Angular, Vite, NodeJS</code>
				</pre>
				<pre data-prefix=">">
					<code>MKDocs, Sphinx, Hugo</code>
				</pre>
				<pre data-prefix=">">
					<code>GitHub, Jira/Confluence, Jenkins, Docker</code>
				</pre>
			</div>
		</div>
	);

	const experienceData = (
		<div className="text-white text-left mx-auto max-w-4xl">
			<div className="pb-5">
				<div className="flex justify-between text-2xl font-bold">
					Software Engineer <span className="text-right text-lg font-normal">Month 2022 - Present</span>
				</div>
				<div className="text-xl">Company X</div>
				<ul className="list-disc pl-6 pt-3">
					<li>Utilized GitHub to manage the version control of different repositories of data.</li>
					<li>Generated x number of tests utilizing Framework X.</li>
					<li>Tested new features before release to users to ensure operability and document any issues/bugs.</li>
					<li>Created X amount of new features that were integrated into production.</li>
					<li>Completed numerous pull request reviews to merge code into multiple codebases.</li>
				</ul>
			</div>
			<div className="pb-5">
				<div className="flex justify-between text-2xl font-bold">
					Software Engineer <span className="text-right text-lg font-normal">Month 2021 - Month 2022</span>
				</div>
				<div className="flex justify-between text-xl">Company Y</div>
				<ul className="list-disc pl-6 pt-3">
					<li>Utilized GitLab to manage different repositories of data.</li>
					<li>Updated API documentation for new features and to improve user's ability to integrate with our tools.</li>
					<li>Answered user questions through JIRA and created help tickets to track fixes for future cases.</li>
					<li>Created Swagger API documentation for X number of endpoints.</li>
				</ul>
			</div>
			<div className="pb-5">
				<div className="flex justify-between text-2xl font-bold">
					Outreach Engineer <span className="text-right text-lg font-normal">Month 2018 - Month 2021</span>
				</div>
				<div className="flex justify-between text-xl">Company Z</div>
				<ul className="list-disc pl-6 pt-3">
					<li>Provided outreach support over social platforms to aid in increasing user base and spreading new information.</li>
					<li>Tested new features before release to production, while reporting bugs and suggestions directly to developers.</li>
					<li>Worked efficiently in an agile environment, meeting deadlines and sprint goals.</li>
					<li>Assisted with proposal writings for multimillion-dollar contracts, focusing on grammar and style compliance.</li>
				</ul>
			</div>
			<div className="pb-5">
				<div className="flex justify-between text-2xl font-bold">
					Helpdesk Engineer <span className="text-right text-lg font-normal">Month 2015 - Month 2018</span>
				</div>
				<div className="flex justify-between text-xl">Company Z</div>
				<ul className="list-disc pl-6 pt-3">
					<li>Provided quick customer support for typical web application issues.</li>
					<li>Utilized remote desktop software to directly engage and help customers.</li>
					<li>Created and monitored user help tickets in Atlassian Jira.</li>
					<li>Ensured customer satisfaction through great customer service and received over X five star reviews.</li>
				</ul>
			</div>
			<div className="pb-5 flex">
				<button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg mx-auto bg-atom2 hover:bg-atom1">
					To Top
				</button>
			</div>
		</div>
	);

	const contactData = (
		<div className="flex justify-center text-white mx-auto max-w-4xl">
			<form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" className="mx-auto mb-5 w-full md:w-3/4 lg:w-1/2">
				<input type="hidden" name="form-name" value="contact" />
				<div className="space-y-4">
					<div className="flex justify-between items-center">
						<label htmlFor="name" className="text-left pr-4">
							Your Name:
						</label>
						<div className="w-full">
							<input type="text" id="name" placeholder="Your name..." name="name" className="input bg-atom1 w-full" />
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="email" className="text-left pr-4">
							Your Email:
						</label>
						<div className="w-full">
							<input type="email" id="email" placeholder="Your email..." name="email" className="input bg-atom1 w-full" />
						</div>
					</div>
					<div className="flex justify-between items-center">
						<label htmlFor="message" className="text-left pr-4">
							Message:
						</label>
						<div className="w-full">
							<textarea id="message" placeholder="Your message..." name="message" className="input bg-atom1 w-full h-32"></textarea>
						</div>
					</div>
				</div>
				<p className="mt-8 text-center">
					<button type="submit" className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg mx-3 bg-atom1 hover:bg-atom2">
						Send
					</button>
				</p>
			</form>
		</div>
	);

	const projectData = (
		<div className="justify-center">
			<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center pb-10">
				<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto">
					<figure>
						<img src={NotesApp} />
					</figure>
					<div className="card-body">
						<p className="text-center text-2xl font-bold">
							<a href="https://fakenotesapp.com" target="_blank" className="text-blue-300 hover:text-blue-500">
								Notes App
							</a>
						</p>
						<p>Simple Notes Application</p>
						<div className="flex flex-wrap gap-2 justify-center">
							<div className="badge badge-success">React</div>
							<div className="badge badge-success">TypeScript</div>
							<div className="badge badge-success">TailwindCSS</div>
						</div>
					</div>
				</div>
				<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto">
					<figure>
						<img src={GameApp} />
					</figure>
					<div className="card-body">
						<p className="text-center text-2xl font-bold">
							<a href="https://fakemobilegame.com" target="_blank" className="text-blue-300 hover:text-blue-500">
								Mobile Game X
							</a>
						</p>
						<p>iOS Mobile Game</p>
						<div className="flex flex-wrap gap-2 justify-center">
							<div className="badge badge-success">Flutter</div>
							<div className="badge badge-success">Dart</div>
							<div className="badge badge-success">Firebase</div>
						</div>
					</div>
				</div>
				<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto">
					<figure>
						<img src={ImageEditor} />
					</figure>
					<div className="card-body">
						<p className="text-center text-2xl font-bold">
							<a href="https://fakeimageeditor.com" target="_blank" className="text-blue-300 hover:text-blue-500">
								ImageX
							</a>
						</p>
						<p>Robust Image Editing Desktop Application</p>
						<div className="flex flex-wrap gap-2 justify-center">
							<div className="badge badge-success">Angular</div>
							<div className="badge badge-success">JavaScript</div>
							<div className="badge badge-success">ElectronJS</div>
							<div className="badge badge-success">Playwright</div>
						</div>
					</div>
				</div>
				<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto">
					<figure>
						<img src={PasteApp} />
					</figure>
					<div className="card-body">
						<p className="text-center text-2xl font-bold">
							<a href="https://fakepasteapp.com" target="_blank" className="text-blue-300 hover:text-blue-500">
								Pastebin Application
							</a>
						</p>
						<p>Encrypted Pastebin Web Application</p>
						<div className="flex flex-wrap gap-2 justify-center">
							<div className="badge badge-success">React</div>
							<div className="badge badge-success">TypeScript</div>
							<div className="badge badge-success">TailwindCSS</div>
							<div className="badge badge-success">ViteJS</div>
							<div className="badge badge-success">PostgreSQL</div>
						</div>
					</div>
				</div>
			</div>
			<div className="pb-5 flex">
				<button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg mx-auto bg-atom2 hover:bg-atom1">
					To Top
				</button>
			</div>
		</div>
	);

	const items = [
		{ name: "Education", data: educationData },
		{ name: "Experience", data: experienceData },
		{ name: "Skills", data: skillsData },
		{ name: "About", data: aboutData },
		{ name: "Projects", data: projectData },
		{ name: "Contact", data: contactData },
	];

	const handleClick = (item: ItemType) => {
		if (item !== null) {
			setIsFading(true);
			setTimeout(() => {
				setIsFading(false);
				if (selectedItem !== null && item.name === selectedItem.name) {
					setSelectedItem(null);
				} else {
					setSelectedItem(item);
				}
			}, 200);
		}
	};

	return (
		<div>
			<div className="flex justify-around mt-4 py-8">
				<div className="hidden sm:flex">
					{/* Buttons displayed as a single line on larger screens */}
					{items.map((item, index) => (
						<button key={index} className={`btn btn-md sm:btn-md md:btn-md lg:btn-lg mx-3 ${selectedItem?.name === item.name ? "btn-info bg-atom1 text-white border-atom1 hover:bg-atom2 hover:border-atom2" : "btn-outline"}`} onClick={() => handleClick(item)}>
							{item.name}
						</button>
					))}
				</div>
				<div className="sm:hidden grid grid-cols-2 gap-4">
					{/* Buttons displayed as two columns on smaller screens */}
					{items.map((item, index) => (
						<button key={index} className={`btn btn-md sm:btn-md md:btn-md lg:btn-lg ${selectedItem?.name === item.name ? "btn-info bg-atom1 text-white border-atom1 hover:bg-atom2 hover:border-atom2" : "btn-outline"}`} onClick={() => handleClick(item)}>
							{item.name}
						</button>
					))}
				</div>
			</div>

			{selectedItem && <div className={`mx-auto transition-opacity duration-500 ease-in mt-5 pb-20 ${isFading ? "opacity-0" : "opacity-100"}`}>{selectedItem.data}</div>}
		</div>
	);
};

export default Databox;
