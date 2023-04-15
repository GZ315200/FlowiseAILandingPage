/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text } from "theme-ui";
import SectionHeader from "components/section-header";

import PatternBG from "assets/patternBG.png";
import ArrowOdd from "assets/arrowOdd.png";
import ArrowEven from "assets/arrowEven.png";

const data = [
  {
    id: 1,
    title: "Set Trigger or Webhook",
    text: "A starting point to kickstart the workflow, such as cronjob, imap, webhook and etc",
  },
  {
    id: 2,
    title: "Connect AI and Apps",
    text: "Set up the workflow by connecting AI models with apps integrations. If X happens, predict X, then execute Z",
  },
  {
    id: 3,
    title: "Configure and Deploy",
    text: "Fill in the input parameters and credentials needed to execute the node, then deploy",
  },
  {
    id: 4,
    title: "Sit Back & Relax",
    text: "Watch your workflow automatically gets triggered and executed",
  },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow} id="howitworks">
      <Container>
        <SectionHeader
          slogan=""
          title="Let’s see how it works"
          isWhite={true}
        />

        <video
          src={"https://general-flowise.s3.amazonaws.com/Introduction.mp4"}
          width="100%"
          controls="controls"
          autoplay="true"
        />
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10],
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      right: 0,
      width: "100%",
      backgroundSize: "350px 350px",
      height: "100%",
      opacity: 0.3,
      zIndex: 0,
    },
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      "35px 0",
      null,
      "45px 50px",
      null,
      "50px 25px",
      null,
      null,
      "50px 65px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    textAlign: ["center", null, "left"],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 75, null, 100],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      width: 215,
      height: 60,
      opacity: 0.3,
      "@media screen and (max-width:1220px)": {
        display: "none",
      },
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: `url(${ArrowOdd})`,
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    "&:last-child::before": {
      display: "none",
    },
  },

  iconBox: {
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.65,
      pr: [0, null, null, null, null, 5],
    },
  },
};
