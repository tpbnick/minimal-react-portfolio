import Logo from "../assets/logo.png";

const TopInfo = () => {
	return (
		<div className="w-90 mx-auto sm:w-full md:w-4/5 lg:w-3/4 xl:w-2/3 pt-3">
			<a href={window.location.href}>
				<img src={Logo} className="mx-auto fade-in transition-transform duration-300 transform-gpu hover:scale-110" style={{ width: "10%", height: "auto" }} alt="Logo" />
			</a>
			<p className="text-white text-2xl pt-5 pb-2">Namey McName</p>
			<p className="text-white text-l pb-8">
				New York, NY 10001 · (123) 123-4567 ·{" "}
				<a href="mailto:email@domain.com" className="text-white hover:text-blue-500">
					email@domain.com
				</a>
			</p>
			<p className="text-white text-l text-center">Hello! I am currently a software engineer with Company X. I have been working within this industry for X years and have a great amount of experience with X, X, and X! I have a passion for X and X. I received my Bachelor's degree in X from the University of X and my Master's degree in X from the University of X. I enjoy X in my free time and my hobbies include X, X, and X. If you have any questions, please ask!</p>
		</div>
	);
};

export default TopInfo;
