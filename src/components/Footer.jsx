import React from "react";
import pic from '../assets/fp.jpg'

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={pic}
          alt="Founder"
        />

        <h2>𝐊𝐈𝐒𝐇𝐀𝐍 𝐏𝐀𝐓𝐄𝐋⁰⁰⁷</h2>
        <p>"Nothing is Imposible The Word It Self says I 'M Possible"</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/kishan_patel_041" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
