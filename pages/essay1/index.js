import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import RedBlob1 from "../../components/svg-components/RedBlob1";
import RedBlob2 from "../../components/svg-components/RedBlob2";

import RedExclamation from "../../components/svg-components/RedExclamation";
import DustheadsImageMasked from "../../components/svg-components/DustheadsImageMasked";
const Essay1 = () => {
  const handleScroll = (e) => {
    console.log(`Output from e.target: ${e.target.scrollTop}`);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  });
  return (
    <div className="essay grid">
      <RedBlob1 num="1" />
      <RedExclamation />
      <div className="essay--header">
        <p className="essay--header--title">0.1 jean-michel basquiat</p>
      </div>
      <div className="profile__container"></div>
      <h1 className="essay--title">basquiat</h1>
      <blockquote className="essay--quote essay--quote__1">
        <p>"i am not a real person.</p>
        <p>i am a legend."</p>
      </blockquote>
      <div className="crown-1">
        <img src="/assets/img/crown@2x.png" alt="crown" />
      </div>
      <div className="essay--par essay--par__1">
        <h2 className="essay--par__hook">on may 18, 2017,</h2>
        <p className="essay--par__text">
          A painting by Jean-Michel Basquiat (untitled) sold for $110.5 million
          - the most expensive art sale in the United States. This painting of a
          skull - of which Basquiat has produced several - is a powerful
          reflection on American history which demands to be studied. Due to the
          extreme subjectivity of Basquiat’s works, the American
          Neo-expressionist artist has received polarizing criticism.
        </p>
      </div>
      <div className="essay--par essay--par__2">
        <p className="essay--par__text">
          Hilton Kramer, a renowned art critic, strongly criticized the artist
          stating that Basquiat “was essentially a talentless hustler...who used
          his youth, his looks, his skin colour and his abundant sex appeal to
          win overnight fame” (1). Kramer argued his art was nothing more than
          childlike, raw & ungifted use of graffiti with a quality
          disproportionate to the fame which the young artist received.
        </p>
      </div>
      <div className="essay--par essay--par__3">
        <p className="essay--par__text">
          In a stark comparison, David Bowie offered high praise to the iconic
          Afro-American artist stating, "He seemed to digest the frenetic flow
          of passing image and experience, put them through some kind of
          internal reorganization and dress the canvas with this resultant
          network of chance." relating his art to rock music (2). Many consider
          Basquiat’s art to be political - a commentary on racial tension in
          America and the treatment of black Americans.
        </p>
      </div>
      <div className="essay--par essay--par__4">
        <p className="essay--par__text">
          Basquiat’s art may seem cluttered or random to the untrained eye, with
          strange patterns, words, and icons seemingly being incoherently
          scattered on the canvas. With closer inspection, you’ll find an
          amalgamation of thoughtful abstractions being loosely tied together to
          hint at a deeper exegesis on how Basquiat views the world around him.
        </p>
      </div>
      <div className="essay--par essay--par__5">
        <p className="essay--par__text">
          An excellent example of this is his ‘83 work, Hollywood Africans. The
          painting features words like “tax free”, “gangsterism” & “sugarcane”
          (among others) and the viewer is forced to question what everything
          means. Basquiat’s use of vivid color contrast & balance allows the
          viewers’ eyes to dance around the painting, dissecting the crumbs of
          information along the way - granting the curious person a unique
          opportunity to form their own subjective, unique definition. With that
          said, the title offers a hint as to the true meaning behind the
          madness - in contrast to his numerous Untitled pieces.
        </p>
        <p className="essay--par__text">
          Hollywood Africans is cryptic in how it approaches the black
          community’s influence on pop-culture, and advertisement; a topic which
          is still relevant in 2020.
        </p>
      </div>
      <div className="essay--par essay--par__6">
        <p className="essay--par__text">
          His unique style and celebrity status has placed him among some of the
          most revolutionary artists of the 20th century. Much like Picasso with
          his Cubism & Salvador Dali with his Surrealism, Basquiat will be
          remembered for his Neo-Expressionism. His influence on street art,
          post-modernism & social commentary is undeniable; and his style,
          inimitable.
        </p>
        <p className="essay--par__text">
          Tragically, his art career ended at 27 when he died of a heroin
          overdose. One can’t help but think how his art could have evolved
          through time.
        </p>
      </div>
      <blockquote
        className="essay--quote essay--quote__2"
        cite="https://www.telegraph.co.uk/culture/4707974/He-had-everything-but-talent.html"
      >
        <p>"..a talentless hustler..."</p>
        <a
          target="_blank"
          href="https://www.telegraph.co.uk/culture/4707974/He-had-everything-but-talent.html"
        >
          <span>—hilton kramer,</span>
          <cite>The Telegraph</cite>
        </a>
      </blockquote>
      <div className="black-bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1921.121 2694.496">
          <path
            id="black-bg-svg"
            d="M4.536-375.763s862.04,206.069,1357.956,43.109c305.482-100.382,475.181-89.368,561.9-66.1.041,51.992,2.4,70.2.019,2678.714L4.353,2279.953Z"
            transform="translate(-4.353 414.531)"
          />
        </svg>
        <DustheadsImageMasked />
        <RedBlob2 num="2" />
      </div>
      <div className="red-bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1921.121 2694.496">
          <path
            className="red-bg--svg"
            d="M4.536-375.763s862.04,206.069,1357.956,43.109c305.482-100.382,475.181-89.368,561.9-66.1.041,51.992,2.4,70.2.019,2678.714L4.353,2279.953Z"
            transform="translate(-4.353 414.531)"
          />
        </svg>
      </div>
      <blockquote
        className="essay--quote essay--quote__3"
        cite="https://www.telegraph.co.uk/culture/4707974/He-had-everything-but-talent.html"
      >
        <p>
          "He seemed to digest the frenetic flow of passing image and
          experience..." "
        </p>
        <a
          target="_blank"
          href="https://www.telegraph.co.uk/culture/4707974/He-had-everything-but-talent.html"
        >
          <span>—david bowie,</span>
          <cite>The Telegraph</cite>
        </a>
      </blockquote>
      <div className="essay--banner">
        <div className="wrapper">
          <img
            src="/assets/img/samo-dino.png"
            alt="Samo Dino"
            className="essay--banner__img"
          />
        </div>
        <h3 className="essay--comment essay--comment__1">
          [Hollywood Africans] approaches the black community’s influence on
          pop-culture, and advertisement; a topic which is still relevant in
          2020.
        </h3>
      </div>
      <div className="painting-hwa">
        <img
          src="/assets/img/hollywood-africans@2x.jpg"
          alt="Hollywood Africans"
        />
      </div>
      <footer className="footer">
        <div className="footer-crown">
          <img src="/assets/img/crown@2x.png" alt="crown" />
        </div>
        <div className="footer--text__wrapper">
          <p className="footer--text">jean-michel basquiat</p>
          <p className="footer--text">12/22/1960-8/12/1988</p>
        </div>
      </footer>
    </div>
  );
};

export default Essay1;
