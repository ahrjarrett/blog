import React from "react"
import styled from "styled-components"

const BlogIntroWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
  blockquote {
    margin-bottom: 3rem;
  }
  h3 {
    font-size: 1.5rem;
    text-align: left;
    margin-left: 15%;
    color: rgba(0, 0, 0, 0.4);
  }
  @media all and (max-width: 768px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`

const BlogIntro = props => {
  return (
    <BlogIntroWrapper>
      <h3>“You can’t grep dead trees.”</h3>
      <blockquote cite="https://en.wikipedia.org/wiki/Grep">
        <b>
          <pre>grep</pre>
        </b>{" "}
        is a{" "}
        <a href="/wiki/Command_line_interface" title="Command line interface">
          command-line
        </a>{" "}
        utility for searching plain-text data sets for lines that match a{" "}
        <a href="/wiki/Regular_expression" title="Regular expression">
          regular expression
        </a>
        . Its name comes from the{" "}
        <a href="/wiki/Ed_(text_editor)" title="Ed (text editor)">
          ed
        </a>{" "}
        command <i>g/re/p</i> (
        <i>
          <b>g</b>lobally search a <b>r</b>egular <b>e</b>xpression and <b>p</b>
          rint
        </i>
        ), which has the same effect.
        <br />
        <br />A common verb usage is the phrase "You can't <pre>grep</pre> dead
        trees"—meaning one can more easily search through digital media, using
        tools such as <pre>grep</pre>, than one could with a hard copy (i.e.,
        one made from dead trees, paper).
        <sup id="cite_ref-22">
          <a href="#cite_note-22">[22]</a>
        </sup>{" "}
        Compare with{" "}
        <i>
          <a href="/wiki/Google_(verb)" title="Google (verb)">
            google
          </a>
        </i>
        .
        <footer>
          <br />–{" "}
          <cite>
            <a
              href="https://en.wikipedia.org/wiki/Grep"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
          </cite>
        </footer>
      </blockquote>

      {/* <h3>“Apollo returns as the papyrus breaks off.”</h3>
      <blockquote cite="https://en.wikipedia.org/wiki/Ichneutae">
        The <i><b>Ichneutae</b></i> (<a href="/wiki/Ancient_Greek_language" title="Ancient Greek language">Ancient Greek</a>: <span lang="grc">Ἰχνευταί</span>, <i>Ichneutai</i>, "trackers"), also known as the <i><b>Searchers</b></i>, <i><b>Trackers</b></i> or <i><b>Tracking Satyrs</b></i>, is a fragmentary <a href="/wiki/Satyr_play" title="Satyr play">satyr play</a> by the fifth-century BC <a href="/wiki/Classical_Athens" title="Classical Athens">Athenian</a> <a href="/wiki/Theatre_of_ancient_Greece" title="Theatre of ancient Greece">dramatist</a> <a href="/wiki/Sophocles" title="Sophocles">Sophocles</a>. Three nondescript quotations in ancient authors were all that was known of the play until 1912,<sup id="cite_ref-1"><a href="#cite_note-1">[1]</a></sup> when the extensive remains of a second-century CE <a href="/wiki/Papyrus" title="Papyrus">papyrus</a> roll of the <i>Ichneutae</i> were published among the <a href="/wiki/Oxyrhynchus_Papyri" title="Oxyrhynchus Papyri">Oxyrhynchus Papyri</a>. With more than four hundred lines surviving in their entirety or in part, the <i>Ichneutae</i> is now the best preserved ancient satyr play after <a href="/wiki/Euripides" title="Euripides">Euripides</a>' <i><a href="/wiki/Cyclops_(play)" title="Cyclops (play)">Cyclops</a></i>, the only fully extant example of the genre.
        <br />
        <br />
        The plot of the play was derived from the inset myth of the <i><a href="/wiki/Homeric_Hymn" title="Homeric Hymn">Homeric Hymn</a> to Hermes</i>. A newborn <a href="/wiki/Hermes" title="Hermes">Hermes</a> has stolen <a href="/wiki/Apollo" title="Apollo">Apollo</a>'s cattle, and the older god sends a <a href="/wiki/Greek_chorus" title="Greek chorus">chorus</a> of satyrs to retrieve the animals, promising them the dual rewards of freedom and gold should they be successful. The satyrs set out to find the cattle, tracking their footprints. Approaching the cave in which baby Hermes is hiding, they hear him playing the <a href="/wiki/Lyre" title="Lyre">lyre</a>, which he has just invented. Scared by the strange sound, the satyrs debate their next move. The nymph of the mountain in which Hermes is hiding, <a href="/wiki/Mount_Kyllini" title="Mount Kyllini">Cyllene</a>, explains to them the nature of the musical instrument. Outside the cave the satyrs see some sewn cow-hides and are convinced that they have found the thief. Apollo returns as the papyrus breaks off.
        <footer>
          <br />
          – <cite><a href="https://en.wikipedia.org/wiki/Ichneutae" target="_blank" rel="noopener noreferrer">Also Wikipedia</a></cite>
        </footer>
      </blockquote> */}
    </BlogIntroWrapper>
  )
}

export default BlogIntro
