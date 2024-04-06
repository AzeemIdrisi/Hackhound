import React from 'react'
import { motion } from "framer-motion"
import Click from "../assets/Image/click.svg"

export default function Barriers() {
    return (
        <div className='grid grid-cols-2 place-items-center px-52 py-52 -skew-y-3 bg-gray-5 text-gray-10 overflow-x-hidden'>
            {/* <AuroraBackground> */}
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className='grid gap-6 place-items-center skew-y-3'>
                    <h1>Revolutionizing Academic Fairness</h1>
                    <h2>Empowering Education Through Transparent Evaluation</h2>
                    <h3>GradeSync leads the charge in academic fairness by providing a robust platform for standardizing marks across diverse courses. With GradeSync, students and educators alike can trust in a system that promotes transparency and equity in evaluation. By effortlessly converting and normalizing grades, GradeSync ensures that every learner receives fair recognition for their efforts, fostering a culture of integrity and excellence in education.</h3>
                    <h3 className='font-bold'>Lets get Started </h3>
                </div>
            </motion.div>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczcyMjRlaGViNGJjcWpwZGtpanNpemh6Y2Fuem81bjJ1ZHV3b28ycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VeerK4hE9sjoB8e6OQ/giphy.gif"  className="w-64"/>
            
            {/* </AuroraBackground> */}

            <img />
        </div>
    )
}
