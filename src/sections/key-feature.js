/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Vector from "assets/key-feature/vector.svg";
import Editing from "assets/key-feature/editing.svg";
import Speed from "assets/key-feature/speed.svg";

const data = [
  {
    id: 2,
    imgSrc: Editing,
    altText: "OpenSource",
    title: "Open Source",
    text: "Open source MIT license",
  },
  {
    id: 1,
    imgSrc: Speed,
    altText: "Build Fast",
    title: "Build Fast",
    text: "See your LLM apps running live",
  },

  {
    id: 3,
    imgSrc: Vector,
    altText: "Extensible Component",
    title: "Extensible Component",
    text: "Custom component integrations",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="whyus">
      <Container>
        <SectionHeader slogan="" title="Why use Flowise?" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, "40px", null, "80px"],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ["35px 0", null, "40px 0"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    "& > div": {
      px: [0, "15px", null, "25px", null, "30px", "40px", "60px"],
    },
  },
};
