import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./about.scss";
import { AppWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setabouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts" ]';
    client.fetch(query).then((data) => setabouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        {" "}
        I know that
        <span>Good Development</span> <br /> means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt="imgUrl" />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default AppWrap(About, "about");
