import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

import TitleSVG from "../components/svg-components/ChapterTitle";
import TitleShadowSVG from "../components/svg-components/ChapterTitleShadow";
export default function App() {
  return (
    <header>
      <div className="title__container">
        <TitleSVG />
        <TitleShadowSVG />
      </div>

      <div className="top-row">
        <h6 className="top-row--left">
          <span>issue:</span> 00_july2020
          <div className="rect"></div>
        </h6>
        <h6 className="top-row--right">
          subversion <div className="rect"></div>
        </h6>
      </div>

      <div className="chapter">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <span>zero</span>
        ))}
      </div>

      <div className="bottom-row">
        <p className="bottom-row--left">
          opinionated journal exploring innovative art
        </p>
        <div className="bottom-row--right">
          <p className="start">topics</p>
          <ul className="list-container">
            <motion.li animate={{ left: 50, opacity: 1 }}>0.0 intro</motion.li>
            <motion.li animate={{ left: 50, opacity: 1 }}>
              <Link href="/essay1">
                <a>0.1 basquiat</a>
              </Link>
            </motion.li>
            <motion.li animate={{ left: 50, opacity: 1 }}>
              0.2 suprematism
            </motion.li>
            <motion.li animate={{ left: 50, opacity: 1 }}>
              0.3 louise bourgeois
            </motion.li>
            <motion.li animate={{ left: 50, opacity: 1 }}>0.4 ai</motion.li>
          </ul>
          <p className="end">end</p>
        </div>
      </div>
      <div className="circle"></div>
    </header>
  );
}
