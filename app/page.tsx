import Image from "next/image";

export default function Home() {
	return (
		<main>
			<h1>Welcome to Munachimso&apos;s Portfolio</h1>
			<p>This is a portfolio that contains all my works and skills</p>
			<Image
				src="/images/munachimso.jpg"
				alt="Munachimso"
				width={500}
				height={500}
			/>
		</main>
	);
}
