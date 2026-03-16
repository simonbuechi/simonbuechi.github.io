import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CopyToClipboard } from "react-copy-to-clipboard";
//material-ui
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
//icons
import Icon from "../utils/Icon";
import { mdiCheckboxMarkedCircle, mdiContentCopy } from "@mdi/js";

interface CopyButtonProps {
  text: string;
}

function CopyButton({ text }: CopyButtonProps) {
  const { t } = useTranslation();
  const [success, setSuccess] = useState(false);

  const handleCopyClick = () => {
    if (!success) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }
  };

  return (
    <Tooltip title={t("base.copyClipboard")} aria-label={t("base.copyClipboard")}>
      <CopyToClipboard text={text} onCopy={handleCopyClick}>
        <IconButton color="secondary" aria-label="Copy">
          {success ? <Icon path={mdiCheckboxMarkedCircle} fontSize="small" /> : <Icon path={mdiContentCopy} fontSize="small" />}
        </IconButton>
      </CopyToClipboard>
    </Tooltip>
  );
}

export default CopyButton;
