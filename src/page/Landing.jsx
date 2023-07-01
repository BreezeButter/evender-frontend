import landingbg from "../assets/landingbg.jpg";
import landingsection3 from "../assets/landingsection3.png";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { motion, useScroll } from "framer-motion";

function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <span
                style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
            >
                {children}
            </span>
        </section>
    );
}

export default function Landing() {
    const scrollRef = useRef(null);
    return (
        <div ref={scrollRef} style={{ overflow: "scroll" }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: scrollRef }}
            >
                {/* Section 1 */}

                <div className="w-full relative   border-t-2 border-lightbluecute">
                    <img
                        src={landingbg}
                        alt=""
                        className="w-full h-screen object-cover"
                    />
                    <div className="absolute top-60 left-32">
                        <div className="">
                            <h1 className="text-white text-6xl font-semibold">
                                The people platform—
                            </h1>

                            <h1 className="text-white text-6xl font-semibold  mt-5 ">
                                Where interests become
                            </h1>

                            <h1 className="text-white text-6xl font-semibold w-[90%] mt-5 ">
                                friendships
                            </h1>

                            <Section>
                                <p className="w-[36%] text-lg text-gray-100 font-light mt-12">
                                    Whatever your interest, from hiking and
                                    reading to networking and skill sharing,
                                    there are thousands of people who share it
                                    on Evender. Events are happening every day
                                </p>

                                <p className="text-lg font-semibold text-gray-100 mt-10">
                                    —sign up to join the fun.
                                </p>

                                <Link to="/register">
                                    <button className="w-40 py-3.5 rounded-full font-medium text-lg text-white bg-lightbluecute hover:bg-white hover:text-lightbluecute mt-16">
                                        Get started
                                    </button>
                                </Link>
                            </Section>
                        </div>
                    </div>

                    {/* Section 2 */}

                    <div className="py-28 border-b-4 border-lightbluecute">
                        <div className="flex justify-center ">
                            <div className="w-[52%]">
                                <h1 className="text-center text-3xl font-semibold text-darkbluecute mb-8">
                                    Make 2023 your year with Evender
                                </h1>
                                <p className="text-center text-darkbluecute text-lg font-normal mb-20">
                                    It’s easy to quickly make new friends. There
                                    are more than 60 million people on Evender
                                    looking to gather over shared interests and
                                    hobbies, build professional networks, or
                                    just have some fun.
                                </p>
                            </div>
                        </div>
                        {/* Card */}

                        <div className="flex flex-row justify-center items-center gap-16">
                            {/* <motion.div
                                className="box"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            > */}
                            <div className="w-[350px] hover:scale-105 duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1520156557489-31c63271fcd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                                    alt=""
                                    className="w-full h-[350px] object-cover rounded-t-lg"
                                />
                                <div className="border-b border-l border-r border-gray-300 rounded-b-lg p-6">
                                    <h1 className="text-xl font-medium text-darkbluecute">
                                        Build healthy habits
                                    </h1>
                                    <p className="text-sm font-light mt-3 text-darkbluecute">
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout.
                                    </p>
                                </div>
                            </div>
                            {/* </motion.div> */}
                            <div className="w-[350px] hover:scale-105 duration-500">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1671282997674-5b97193f97c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                    alt=""
                                    className="w-full h-[350px] object-cover rounded-t-lg"
                                />
                                <div className="border-b border-l border-r border-gray-300 rounded-b-lg p-6">
                                    <h1 className="text-xl font-medium text-darkbluecute">
                                        Prioritize your passions
                                    </h1>
                                    <p className="text-sm font-light mt-3 text-darkbluecute">
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout.
                                    </p>
                                </div>
                            </div>
                            <div className="w-[350px] hover:scale-105 duration-500">
                                <img
                                    src="https://images.unsplash.com/photo-1612006564829-34fd2219e8e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                    alt=""
                                    className="w-full h-[350px] object-cover rounded-t-lg"
                                />
                                <div className="border-b border-l border-r border-gray-300 rounded-b-lg p-6">
                                    <h1 className="text-xl font-medium text-darkbluecute">
                                        Build lasting friendships
                                    </h1>
                                    <p className="text-sm font-light mt-3 text-darkbluecute">
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Section 3 */}
                    <div className="flex flex-row h-[500px]">
                        <img
                            src={landingsection3}
                            alt=""
                            className="w-[60%] object-cover object-top"
                        />
                        <div className="flex flex-col justify-center p-36 w-[50%]">
                            <h1 className="text-4xl font-semibold text-darkbluecute">
                                Find your people this year
                            </h1>
                            <p className="text-darkbluecute font-normal text-base mt-8 mb-16 w-[88%]">
                                Make time for your interests and meet people who
                                share them. Lasting connections are made on
                                Evender.
                            </p>
                            <Link to='/register'>
                                <button
                                    className="w-40 py-2.5 rounded-full font-medium text-lg text-white border-2 border-redcute bg-redcute hover:bg-white hover:text-redcute hover:border-2 hover:border-redcute">
                                    Start today
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
