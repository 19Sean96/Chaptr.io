import Head from "next/head";
import { motion } from "framer-motion"


const MainLayout = ({ children }) => {
    return (
        <div className="container">
          <Head>
            <title>CHAPTR</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="content-wrapper">{children}</div>

          {/* <motion.div animate={{scale: .5}} className="red-square" /> */}
        </div>
      );
}

export default MainLayout