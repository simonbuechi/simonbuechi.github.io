import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
//material-ui
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";
//images
import portrait from "../assets/simonbuechi-viaferrata.webp";
//icons
import Icon from "../utils/Icon";
import { mdiWhatsapp, mdiEmail, mdiLinkedin } from "@mdi/js";

function Contact() {
  const { t } = useTranslation();

  const contacts = [
    { label: "Email", href: "mailto:simon.buechi@gmail.com", icon: mdiEmail },
    { label: "Whatsapp", href: "https://wa.me/41787401627", icon: mdiWhatsapp },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/simonbuechi", icon: mdiLinkedin },
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
        <title>Simon Buechi | Contact</title>
        <meta name="description" content="Contact Simon Buechi" />
      </Helmet>
      <Grid size={{ xs: 12, md: 12 }}>
        <Typography variant="h2" gutterBottom>
          {t("offering.reachoutTitle")}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {t("offering.reachoutDescription")}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        {contacts.map((item, index) => (
          <Zoom in style={{ transitionDelay: 50 + index * 100 + "ms" }} key={item.label}>
            <Typography variant="body2" gutterBottom>
              <Button variant="outlined" color="primary" href={item.href} startIcon={<Icon path={item.icon} />}>
                {item.label}
              </Button>
            </Typography>
          </Zoom>
        ))}
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box className="skewed-frame-container">
          <div className="skewed-frame skewed-frame--reverse">
            <img src={portrait} alt="simon buechi via ferrata" />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact;
