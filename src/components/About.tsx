import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Headshot from "../assets/headshot.png";
import Photography from "../assets/photography.png";
import Pup from "../assets/pup.png";

const images = [
	{ src: Headshot, alt: "Me", caption: "My headshot" },
	{ src: Photography, alt: "My photography", caption: "Swiss Village" },
	{ src: Pup, alt: "Pup Image", caption: "Pup" },
];

const About = () => (
	<div className="text-white mx-auto max-w-4xl">
		<p className="pb-8">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
			consectetur mi. Nullam venenatis feugiat dolor, id eleifend metus. Aliquam
			erat volutpat. Nulla facilisi. Morbi a risus eget tellus fringilla facilisis.
			Vivamus maximus, est non consequat faucibus, velit sem rhoncus leo, et
			posuere enim justo id ipsum. Proin in purus sed mauris consequat aliquam sed
			nec lacus. Quisque nec urna ac neque finibus ultrices. Mauris consectetur
			gravida arcu, nec commodo felis auctor vitae. Fusce condimentum justo eget
			tortor dapibus, ac malesuada dolor interdum. In pretium rutrum nulla at
			semper. Suspendisse a semper elit. Nunc pharetra hendrerit libero, at viverra
			nulla. Nullam vulputate dui eu erat placerat fringilla.
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

export default About;
