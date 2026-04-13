import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

interface IconProps extends SvgIconProps {
  path: string;
}

function Icon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d={props.path} />
    </SvgIcon>
  );
}

export default Icon;
