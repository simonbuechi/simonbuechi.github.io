import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
//images
import portrait from "../assets/simonbuechi-winter.webp";
//material-ui
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Zoom from "@mui/material/Zoom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
//icons
import Icon from "../utils/Icon";
import {
  mdiBookOpenVariant,
  mdiGithub,
  mdiInformation,
  mdiOpenInNew,
  mdiInstagram,
  mdiLinkedin,
  mdiWhatsapp,
} from "@mdi/js";

function About() {
  const { t } = useTranslation();
  const [dialogInfo, setDialogInfo] = useState(false);

  const handleDialogInfoOpen = () => {
    setDialogInfo(true);
  };
  const handleDialogInfoClose = () => {
    setDialogInfo(false);
  };

  const questions = [
    {
      question: t("start.q1"),
      answer: t("start.a1"),
    },
    {
      question: t("start.q2"),
      answer: t("start.a2"),
    },
    {
      question: t("start.q3"),
      answer: t("start.a3"),
    },
    {
      question: t("start.q4"),
      answer: t("start.a4"),
    },
  ];
  const myContacts = [
    { primary: "LinkedIn", secondary: "", link: "https://www.linkedin.com/in/simonbuechi", icon: <Icon path={mdiLinkedin} /> },
    { primary: "Instagram", secondary: "", link: "https://www.instagram.com/simi_asc/", icon: <Icon path={mdiInstagram} /> },
    { primary: "GitHub", secondary: "", link: "https://github.com/simonbuechi", icon: <Icon path={mdiGithub} /> },
    { primary: "Goodreads", secondary: "", link: "https://www.goodreads.com/user/show/32950234-simon-b-chi", icon: <Icon path={mdiBookOpenVariant} /> },
    { primary: "Whatsapp", secondary: "", link: "https://wa.me/41787401627", icon: <Icon path={mdiWhatsapp} /> },
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
        <title>Simon Buechi | About</title>
        <meta name="description" content="Simon Buechi Büchi about" />
      </Helmet>
      <Grid size={{ xs: 12, md: 12 }}>
        <Typography variant="h2" gutterBottom>
          {t("about.title")}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            mb: 3,
          }}
        >
          <Typography variant="h3" gutterBottom>
            {t("start.connectTitle")}
          </Typography>
          <List dense>
            {myContacts.map((item, index) => (
              <Zoom in style={{ transitionDelay: 50 + index * 100 + "ms" }} key={item.primary}>
                <div>
                  <ListItemButton component="a" href={item.link}>
                    <ListItemIcon color="secondary">{item.icon}</ListItemIcon>
                    <ListItemText primary={item.primary} secondary={item.secondary} />
                  </ListItemButton>
                </div>
              </Zoom>
            ))}
          </List>
        </Box>
        <Typography variant="h3" gutterBottom>
          {t("about.aboutSiteTitle")}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {t("about.aboutSiteBody")}
        </Typography>
        <Typography gutterBottom>
          <Button variant="outlined" color="primary" onClick={handleDialogInfoOpen} startIcon={<Icon path={mdiInformation} />}>
            {t("start.dialogInfoButton")}
          </Button>
          &nbsp;
          <Button variant="outlined" color="primary" href="https://github.com/simonbuechi/simonbuechi.github.io" startIcon={<Icon path={mdiOpenInNew} />}>
            {t("about.linkGithub")}
          </Button>
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          className="skewed-frame-container"
          sx={{
            mb: 4,
          }}
        >
          <div className="skewed-frame skewed-frame--reverse">
            <img src={portrait} alt="simon buechi winter" />
          </div>
        </Box>
        <Dialog onClose={handleDialogInfoClose} aria-labelledby="dialogInfo" open={dialogInfo}>
          <DialogContent>
            <Typography variant="h2" gutterBottom>
              {t("start.dialogInfoTitle")}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {t("start.dialogInfoBody")}
            </Typography>
            <List>
              {questions.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={item.question} secondary={item.answer} />
                </ListItem>
              ))}
            </List>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="contained" onClick={handleDialogInfoClose} autoFocus>
              {t("base.close")}
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
}

export default About;
