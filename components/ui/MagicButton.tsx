import React from "react";

interface MagicButtonProps {
	title: string;
	icon?: React.ReactNode;
	position?: string;
	handleClick: () => void;
	otherClasses?: string;
}

export const MagicButton: React.FC<MagicButtonProps> = ({ title, icon, position, handleClick, otherClasses = "" }) => {
	return (
		<div className="justify-center items-center m-auto text-center">
			<button
				onClick={handleClick}
				className={`relative inline-flex h-12 w-full overflow-hidden rounded-lp p-[1px] focus:outline-none md:w-60 md:mt-10 ${otherClasses} ${position}`}>
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
				<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7  text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}">
					{icon}
					{title}
				</span>
			</button>
		</div>
	);
};
