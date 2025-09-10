import React from 'react';

export interface ReviewCardProps {
	user: string;
	comment: string;
	rating: number; // 1-5
	className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ user, comment, rating, className = '' }) => {
	return (
		<div className={`font-worksans bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-2 ${className}`}>
			<div className="flex flex-row justify-between items-center gap-2">
				<span className="font-semibold text-gray-800">{user}</span>
				<span className="flex items-center text-yellow-400">
					{Array.from({ length: 5 }).map((_, i) => (
						<svg
							key={i}
							className={`w-4 h-4 ${i < rating ? 'fill-yellow-400' : 'fill-gray-200'}`}
							viewBox="0 0 20 20"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
						</svg>
					))}
				</span>
			</div>
			<p className="text-gray-600">{comment}</p>
		</div>
	);
};

export default ReviewCard;
