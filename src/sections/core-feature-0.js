/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";
import CoreFeatureThumb from "assets/coreFeature-0.png";

const data = {
  subTitle: "",
  title: "One click deploy ChatGPT Plugin without code",
  description:
    "Deploy your own ChatGPT plugin and upsert data specific to your use cases",
};

export default function CoreFeature0() {
  return (
    <section sx={{ variant: "section.partner" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={{ px: [0, null, "40px", 0] }}>
          <div style={{ padding: 50 }}>
            <Image
              sx={{ boxShadow: "0 5px 14px 0 rgb(32 40 45 / 8%)" }}
              src={CoreFeatureThumb}
              alt="Partner"
            />
          </div>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", 450, 550, "350px", "410px", "485px"],
    mx: "auto",
    pb: ["30px", null, null, 0],
    ".description": {
      pr: [0, null, null, null, 4],
    },
  },
};
