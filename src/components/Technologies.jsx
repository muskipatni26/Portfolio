import { DiPython, DiRedis } from "react-icons/di"
import { FaNodeJs, FaHtml5, FaCss3Alt, FaFileExcel } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { BsDatabaseGear } from "react-icons/bs";
import { SiPowerbi, SiPandas, SiNumpy} from "react-icons/si"
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb"
import { animate, motion } from "framer-motion"
import { TbFileTypeSql } from "react-icons/tb"
import { BiRepeat } from "react-icons/bi"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
            whileInView={{ opacity: 1, y:0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl"
        >
            Technologies
        </motion.h1>
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -100 }}
             transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandCpp className="text-7xl text-blue-800"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiPython className="text-7xl text-yellow-300"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-700"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className="text-7xl text-cyan-600"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaFileExcel className="text-7xl text-green-700"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbFileTypeSql className="text-7xl text-red-900"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPowerbi className="text-7xl text-yellow-500"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPandas className="text-7xl text-violet-800"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(5.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNumpy className="text-7xl text-purple-300"/>
            </motion.div>
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <BsDatabaseGear className="text-7xl text-neutral-400"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies