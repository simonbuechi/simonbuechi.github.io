import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
//material-ui
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
//icons
import Icon from "../utils/Icon";
import { mdiChevronDown } from "@mdi/js";
//images
import portrait from "../assets/simonbuechi-businessattire.webp";

function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      title: t("projects.voveoTitle"),
      description: t("projects.voveoDescription"),
      link: "https://voveo-ch.github.io/",
      linkTitle: t("projects.voveoLink"),
    },
    {
      title: t("projects.pactaTitle"),
      description: t("projects.pactaDescription"),
      link: "https://pacta.app",
      linkTitle: t("projects.pactaLink"),
    },
    {
      title: t("projects.raisinpickerTitle"),
      description: t("projects.raisinpickerDescription"),
      link: "https://raisinpicker.github.io",
      linkTitle: t("projects.raisinpickerLink"),
    },
    {
      title: t("projects.simonbuechiTitle"),
      description: t("projects.simonbuechiDescription"),
      link: "https://github.com/simonbuechi/simonbuechi.github.io",
      linkTitle: t("projects.simonbuechiLink"),
    },
    {
      title: t("projects.bjjAmigoTitle"),
      description: t("projects.bjjAmigoDescription"),
      link: "https://github.com/simonbuechi/bjj",
      linkTitle: t("projects.bjjAmigoLink"),
    },
    {
      title: t("projects.sportAmigoTitle"),
      description: t("projects.sportAmigoDescription"),
      link: "https://github.com/simonbuechi/sport",
      linkTitle: t("projects.sportAmigoLink"),
    },
    {
      title: t("projects.kopfkinoTitle"),
      description: t("projects.kopfkinoDescription"),
      link: "https://github.com/simonbuechi/kopfkino",
      linkTitle: t("projects.kopfkinoLink"),
    },
  ];

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
      <Helmet>
        <title>Simon Buechi | Projects</title>
        <meta name="description" content="Simon Buechi Büchi projects" />
      </Helmet>
      <Grid size={{ xs: 12, md: 12 }}>
        <Typography variant="h2" gutterBottom>
          {t("projects.title")}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {t("projects.paragraph1")}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        {projects.map((item, index) => (
          <Zoom in style={{ transitionDelay: 150 + index * 100 + "ms" }} key={item.title}>
            <Box
              sx={{
                my: 2,
              }}
            >
              <Accordion>
                <AccordionSummary expandIcon={<Icon path={mdiChevronDown} />}>
                  <Typography variant="body1">{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    <Typography variant="body2" gutterBottom>
                      {item.description}
                    </Typography>
                    {item.link && (
                      <Typography variant="body2" gutterBottom>
                        <Button variant="outlined" color="primary" href={item.link}>
                          {item.linkTitle}
                        </Button>
                      </Typography>
                    )}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Zoom>
        ))}
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box className="skewed-frame-container">
          <div className="skewed-frame">
            <img src={portrait} alt="simon buechi" />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Projects;
