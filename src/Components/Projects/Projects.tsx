import { FC } from "react";
import { ProjectsList } from "../../Data/Projects";
import { months } from "../../Utils/GlobalConstants";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

type ProjectsProps = {};

const Projects: FC<ProjectsProps> = (props: ProjectsProps) => {
  const getMMMYYYYDate: (date: Date) => string = (date) => {
    return `${months[date.getMonth()]}, ${date.getFullYear()}`;
  };

  const projects = ProjectsList.map((project, idx) => (
    <Grid item xs={4} key={idx}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Organization: {project.org}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {getMMMYYYYDate(project.startDate)} -{" "}
            {getMMMYYYYDate(project.endDate)}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Tech Stack: {project.techStack.join(", ")}
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>More Details</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{project.desc}</Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {projects}
    </Grid>
  );
};

export default Projects;
