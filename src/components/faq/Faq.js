import React from "react";
import { Box, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Sidenav from "../Sidenav";
export default function Faq() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flex: 1, p: 1 }} className="paddingall">
        <Grid container spacing={7}>
          <Grid xs={12} md={4}>
            <Box height={130} />
            <Typography variant="h5" mb={"20px"}>
              Frequently Asked Questions
            </Typography>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What is an internship?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  An internship is a period of work experience offered by an
                  organization to students or recent graduates. It provides them
                  with an opportunity to gain practical skills and experience in
                  a particular field, while also allowing the organization to
                  assess potential future employees.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>How does your platform work?</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>
                  Our platform connects students or recent graduates with
                  organizations offering internships. Students can browse
                  through the available internships and apply to those that
                  match their interests and qualifications. Organizations can
                  review applications and select candidates to offer
                  internships.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  Who can apply for internships on your platform?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our platform is open to students or recent graduates who meet
                  the qualifications specified by the organizations offering
                  internships. This may vary depending on the specific
                  internship opportunity, but typically includes factors such as
                  academic performance, major or field of study, and relevant
                  experience.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Are the internships paid?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It depends on the organization offering the internship. Some
                  internships may be paid, while others may offer academic
                  credit or other benefits in lieu of monetary compensation.
                  This information is typically provided in the internship
                  listing.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  What is the duration of the internships?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The duration of internships varies depending on the
                  organization offering them. Some internships may be for a few
                  weeks, while others may be for several months. The duration is
                  typically specified in the internship listing.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  How can I increase my chances of being selected for an
                  internship?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To increase your chances of being selected for an internship,
                  it's important to carefully review the internship listing and
                  make sure you meet the qualifications specified. You should
                  also tailor your application to the specific opportunity,
                  highlighting your relevant skills and experience. It may also
                  be helpful to network and connect with professionals in your
                  desired field.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  What kind of support does your platform offer to students and
                  organizations?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our platform offers support to both students and organizations
                  throughout the internship process. We provide resources and
                  guidance to help students prepare for internships and succeed
                  during their placement. We also offer support to organizations
                  in creating effective internship programs and selecting the
                  best candidates for their needs.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  How can I find out about new internship opportunities on your
                  platform?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  To find out about new internship opportunities on our
                  platform, you can sign up for email notifications or follow us
                  on social media. We also recommend checking the platform
                  regularly for new listings.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  Can I apply for multiple internships at once?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, you can apply for multiple internships at once as long as
                  you meet the qualifications specified for each opportunity.
                  However, we recommend carefully considering each opportunity
                  before applying to ensure that you are genuinely interested
                  and qualified for the position.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  How can I get feedback on my application?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Organizations may provide feedback on applications if
                  requested, but it is not always guaranteed. If you would like
                  feedback on your application, we recommend reaching out to the
                  organization directly and politely requesting feedback.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  What happens if I am selected for an internship?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  If you are selected for an internship, the organization
                  offering the position will typically contact you to discuss
                  details such as start date, duration, and compensation (if
                  applicable). You may also need to complete additional
                  paperwork or background checks before beginning the
                  internship.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  What should I do if I have concerns about my internship?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  If you have concerns about your internship, we recommend
                  discussing them with your supervisor or the appropriate
                  contact at the organization offering the position. They may be
                  able to address your concerns or provide guidance on how to
                  proceed. If the issue cannot be resolved, you may need to
                  consider ending the internship early and seeking other
                  opportunities.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
