import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";
//material-ui
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Settings() {
  const { t } = useTranslation();
  const [dialogDisclaimer, setDialogDisclaimer] = useState(false);

  const handleDialogDisclaimerOpen = () => {
    setDialogDisclaimer(true);
  };
  const handleDialogDisclaimerClose = () => {
    setDialogDisclaimer(false);
  };
  const handleLangChange = (name) => (event) => {
    i18n.changeLanguage(name);
  };

  return (
    <React.Fragment>
      <ButtonGroup color="secondary" size="small">
        <Tooltip title={i18n.language === "en" ? "" : t("base.toEnglish")}>
          <Button onClick={handleLangChange("en")} disabled={i18n.language === "en" ? true : false}>
            En
          </Button>
        </Tooltip>
        <Tooltip title={i18n.language === "de" ? "" : t("base.toGerman")}>
          <Button onClick={handleLangChange("de")} disabled={i18n.language === "de" ? true : false}>
            De
          </Button>
        </Tooltip>
      </ButtonGroup>
      <Box mt={1}>
        <Tooltip title="Disclaimer">
          <Button size="small" variant="outlined" color="secondary" onClick={handleDialogDisclaimerOpen}>
            Disclaimer
          </Button>
        </Tooltip>
      </Box>
      <Dialog onClose={handleDialogDisclaimerClose} aria-labelledby="dialogDisclaimer" open={dialogDisclaimer}>
        <DialogContent>
          <Typography variant="h2" gutterBottom>
            {t("base.dialogFooterTitle")}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {t("base.dialogFooterBody")}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {t("base.dialogFooterBody2")}
          </Typography>
          <Typography variant="body2" gutterBottom>
            © Copyright {new Date().getFullYear()} Simon Buechi
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogDisclaimerClose} color="primary" variant="contained" autoFocus>
            {t("base.close")}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Settings;
