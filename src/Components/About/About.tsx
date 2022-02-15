import { FC } from "react";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import ProfilePic from "../../Assets/Manas_Profile_Picture.png";

type AboutProps = {};

const About: FC<AboutProps> = (props: AboutProps) => {
  return (
    <Container>
      <Avatar
        alt="Manas Profile Picture"
        src={ProfilePic}
        sx={{
          width: 250,
          height: 250,
          display: "flex",
          margin: "5rem",
        }}
      />
    </Container>
  );
};

export default About;
