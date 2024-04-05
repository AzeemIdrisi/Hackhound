import React from 'react'
import { Boxes } from './ui/background-boxes'
import { cn } from '../utils/cn'
import { motion } from "framer-motion"
import { AuroraBackground } from './ui/aurora-background'
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
                    <h1>Lorem Ipsum is simply dummy text of </h1>
                    <h2>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</h2>
                    <h3>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I</h3>
                    <h3 className='font-bold'>It has survived not only five centuries, </h3>
                </div>
            </motion.div>
            <motion.ul className='gifrotate'>
            <motion.div className='center aspect-square m-5 skew-y-3'
                initial={{ skew: 0 }}
                whileHover={{ rotate: 45 }}
                transition={{ ease: "easeInOut" }}
            >

                <img src={Click} className='w-32' />
            </motion.div>
                <motion.li className="circle-li">1</motion.li>
                <motion.li className="circle-li">2</motion.li>
                <motion.li className="circle-li">3</motion.li>
                <motion.li className="circle-li">4</motion.li>
                <motion.li className="circle-li">5</motion.li>
                <motion.li className="circle-li">6</motion.li>
                {/* <motion.li className="circle-li">7</motion.li> */}
            </motion.ul>
            
            {/* </AuroraBackground> */}

            <img />
        </div>
    )
}
