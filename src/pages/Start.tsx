import React from "react";
import { useTranslation } from "react-i18next";
//material-ui
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";
//images
import portraitBig from "../assets/simonbuechi-hiking.webp";

function Start() {
  const { t } = useTranslation();

  return (
    <Grid
      container
      direction="row"
      spacing={4}
      sx={{
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Grid size={{ xs: 12, md: 12 }}>
        <Typography variant="h2" gutterBottom>
          {t("start.title")}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Box
          sx={{
            mb: 3,
          }}
        >
          <Typography variant="h3" gutterBottom>
            {t("about.personTitle")}
          </Typography>
          <Zoom in style={{ transitionDelay: "450ms" }}>
            <Typography variant="body2" gutterBottom>
              {t("start.paragraph1")}
            </Typography>
          </Zoom>
          <Zoom in style={{ transitionDelay: "550ms" }}>
            <Typography variant="body2" gutterBottom>
              {t("about.body1")}
            </Typography>
          </Zoom>
          <Zoom in style={{ transitionDelay: "650ms" }}>
            <Typography variant="body2" gutterBottom>
              {t("about.body2")}
            </Typography>
          </Zoom>
          <Zoom in style={{ transitionDelay: "750ms" }}>
            <Typography variant="body2" gutterBottom>
              {t("about.body3")}
            </Typography>
          </Zoom>
          <Zoom in style={{ transitionDelay: "850ms" }}>
            <Typography variant="body2" gutterBottom>
              {t("about.body4")}
            </Typography>
          </Zoom>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <Box
          className="skewed-frame-container"
          sx={{
            mb: 4,
          }}
        >
          <div className="skewed-frame">
            <img src={portraitBig} alt="simon buechi portrait" />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Start;
