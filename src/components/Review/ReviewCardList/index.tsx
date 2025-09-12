import React from 'react';
import ReviewCard from '../ReviewCard';
import type { ReviewCardProps } from '../ReviewCard';

export interface ReviewCardListProps {
	reviews: ReviewCardProps[];
	className?: string;
}

const ReviewCardList: React.FC<ReviewCardListProps> = ({ reviews, className = '' }) => {
	return (
		<div className={`flex flex-col gap-4 ${className}`}>
			{reviews.map((review, idx) => (
				<ReviewCard key={review.user + idx} {...review} />
			))}
		</div>
	);
};

export default ReviewCardList;
