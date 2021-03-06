import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../server/asyncLogic";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComp = () => {
	const { selectData } = useSelector((state) => state.data);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData({ url: "/course" }));
	}, [dispatch]);

	const settings = {
		dots: true,
		speed: 600,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className="table_cards_box">
			<div className="Slider_container">
				<Slider {...settings}>
					<div key={0} className="slider_card_box">
						<div className="slider_card">
							<span className="slider_card_Btext">Hammasi</span>
							<span className="slider_card_Stext">Kurslar soni 8 ta</span>
						</div>
					</div>
					{selectData.map((item, i) => (
						<div key={i + 1} className="slider_card_box">
							<div className="slider_card">
								<span className="slider_card_Btext">{item.course_name}</span>
								<span className="slider_card_Stext">kurs description</span>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default CarouselComp;
