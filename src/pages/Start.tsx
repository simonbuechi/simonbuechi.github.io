import React from "react";
import { useTranslation } from "react-i18next";
//material-ui
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Zoom from "@mui/material/Zoom";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
//icons
import Icon from "../utils/Icon";
import { mdiOpenInNew } from "@mdi/js";
//images
import portraitBig from "../assets/simonbuechi-hiking.webp";

function Start() {
  const { t } = useTranslation();

  const myJobs = [
    { primary: "CROWDLITOKEN", secondary: "CTO", link: "https://crowdlitoken.com", icon: <Icon path={mdiOpenInNew} /> },
    { primary: "Voveo", secondary: "Founder & Developer", link: "https://voveo.ch", icon: <Icon path={mdiOpenInNew} /> },
    { primary: "Pacta", secondary: "Founder", link: "https://pacta.app", icon: <Icon path={mdiOpenInNew} /> },
    { primary: "Blockchain Innovation Group", secondary: "Network Partner", link: "https://big-swiss.com", icon: <Icon path={mdiOpenInNew} /> },
    { primary: "CryptoChefs", secondary: "Advisor", link: "https://cryptochefs.io/", icon: <Icon path={mdiOpenInNew} /> },
  ];

  return (
    <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={4}>
      <Grid size={{ xs: 12, md: 12 }}>
        <Typography variant="h2" gutterBottom>
          {t("start.title")}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Box mb={3}>

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
        <Box mb={4} className="skewed-frame-container">
          <div className="skewed-frame">
            <img src={portraitBig} alt="simon buechi portrait" />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Start;
