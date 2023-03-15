import React from 'react';
import style from './Works.module.scss';
import newImg1 from '../../img/newwork1.png';
import newImg2 from '../../img/newwork2.png';
import img1 from '../../img/work1.png';
import img2 from '../../img/work2.png';
import img3 from '../../img/work3.png';
import img4 from '../../img/work4.png';
import img5 from '../../img/work5.png';
import img6 from '../../img/work6.png';
import { motion } from 'framer-motion';
import { useScroll } from '../../hooks/useScroll';
import {
	pageAnimation,
	fade,
	photoAnim,
	lineAnim,
	rainbow,
	rainbowContainer,
} from '../../animations';

const Works = () => {
	const [element, controls] = useScroll();
	const [element2, controls2] = useScroll();
	const [element3, controls3] = useScroll();
	const [element4, controls4] = useScroll();
	const [element5, controls5] = useScroll();
	const [element6, controls6] = useScroll();
	const [element7, controls7] = useScroll();
	const [element8, controls8] = useScroll();

	return (
		<motion.div
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
			className={style.worksPage}>
			<motion.div variants={rainbowContainer}>
				<motion.div variants={rainbow} className={style.frame1}></motion.div>
				<motion.div variants={rainbow} className={style.frame2}></motion.div>
				<motion.div variants={rainbow} className={style.frame3}></motion.div>
				<motion.div variants={rainbow} className={style.frame4}></motion.div>
			</motion.div>
			<div className={style.worksWrapper}>
				<motion.div
					ref={element8}
					variants={fade}
					animate={controls8}
					initial="hidden"
					className={style.work}>
					<motion.h2 variants={fade}>Sound Io</motion.h2>
					<motion.div variants={lineAnim} className={style.line}></motion.div>
					<a href="https://sound-io.vercel.app/" target="_blank" rel="noreferrer">
						<motion.img variants={photoAnim} src={newImg2} alt="blog-wokr" />
					</a>
				</motion.div>
				<motion.div
					ref={element7}
					variants={fade}
					animate={controls7}
					initial="hidden"
					className={style.work}>
					<motion.h2 variants={fade}>Blog App</motion.h2>
					<motion.div variants={lineAnim} className={style.line}></motion.div>
					<a href="https://blog-87hvw7y64-gavryk.vercel.app/" target="_blank" rel="noreferrer">
						<motion.img variants={photoAnim} src={newImg1} alt="blog-wokr" />
					</a>
				</motion.div>
				<motion.div
					ref={element6}
					variants={fade}
					animate={controls6}
					initial="hidden"
					className={style.work}>
					<motion.h2 variants={fade}>Movie Search</motion.h2>
					<motion.div variants={lineAnim} className={style.line}></motion.div>
					<a href="https://movies-search-service.netlify.app/" target="_blank" rel="noreferrer">
						<motion.img variants={photoAnim} src={img2} alt="wokr2" />
					</a>
				</motion.div>
				<motion.div
					ref={element5}
					variants={fade}
					animate={controls5}
					initial="hidden"
					className={style.work}>
					<motion.h2 variants={fade}>Game Bar</motion.h2>
					<motion.div variants={lineAnim} className={style.line}></motion.div>
					<a href="https://simple-gamebar.netlify.app/" target="_blank" rel="noreferrer">
						<motion.img variants={photoAnim} src={img6} alt="wokr6" />
					</a>
				</motion.div>
				<motion.div
					ref={element3}
					variants={fade}
					animate={controls3}
					initial="hidden"
					className={style.work}>
					<motion.h2 variants={fade}>Task Manager</motion.h2>
					<motion.div variants={lineAnim} className={style.line}></motion.div>
					<a href="https://todo-manager-ap.herokuapp.com/" target="_blank" rel="noreferrer">
						<motion.img variants={photoAnim} src={img4} alt="wokr4" />
					</a>
				</motion.div>
				<motion.div
					ref={element4}
					variants={fade}
					animate={controls4}
					initial="hidden"
					className={style.work}>
					<motion.h2 variants={fade}>Simple TODO Project</motion.h2>
					<motion.div variants={lineAnim} className={style.line}></motion.div>
					<a href="https://simple-todo-ap.herokuapp.com/" target="_blank" rel="noreferrer">
						<motion.img variants={photoAnim} src={img5} alt="wokr5" />
					</a>
				</motion.div>
				<motion.div
					ref={element}
					variants={fade}
					animate={controls}
					initial="hidden"
					className={style.work}>
					<motion.h2 variants={fade}>SoundWave</motion.h2>
					<motion.div variants={lineAnim} className={style.line}></motion.div>
					<a href="https://soundwaveio.netlify.app/" target="_blank" rel="noreferrer">
						<motion.img variants={photoAnim} src={img1} alt="wokr1" />
					</a>
				</motion.div>
				<motion.div
					ref={element2}
					variants={fade}
					animate={controls2}
					initial="hidden"
					className={style.work}>
					<motion.h2 variants={fade}>Sneakers Store</motion.h2>
					<motion.div variants={lineAnim} className={style.line}></motion.div>
					<a href="https://sneak-store.netlify.app/" target="_blank" rel="noreferrer">
						<motion.img variants={photoAnim} src={img3} alt="wokr3" />
					</a>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Works;
