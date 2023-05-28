import NotesApp from "../assets/notes.png";
import GameApp from "../assets/game.png";
import ImageEditor from "../assets/imageeditor.png";
import PasteApp from "../assets/paste.png";

const Projects = () => (
	<div className="justify-center">
		<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-center pb-10">
			<div className="card w-full md:w-96 bg-base-100 shadow-xl m-2 mx-auto">
				<figure>
					<img src={NotesApp} />
				</figure>
				<div className="card-body">
					<p className="text-center text-2xl font-bold">
						<a
							href="https://fakenotesapp.com"
							target="_blank"
							className="text-blue-300 hover:text-blue-500"
						>
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
						<a
							href="https://fakemobilegame.com"
							target="_blank"
							className="text-blue-300 hover:text-blue-500"
						>
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
						<a
							href="https://fakeimageeditor.com"
							target="_blank"
							className="text-blue-300 hover:text-blue-500"
						>
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
						<a
							href="https://fakepasteapp.com"
							target="_blank"
							className="text-blue-300 hover:text-blue-500"
						>
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
			<button
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				className="btn btn-sm sm:btn-sm md:btn-md lg:btn-lg mx-auto bg-atom2 hover:bg-atom1"
			>
				To Top
			</button>
		</div>
	</div>
);

export default Projects;
