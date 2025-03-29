import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const PROFILE_PHOTO = "./sudipta_dp.png";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const ProfileImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  maxHeight: 300,
  objectFit: "cover",
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[5],
}));

const Intro = () => {
  return (
    <Box
      sx={{
        py: 8,
        minHeight: "calc(100vh - 64px)", // Full height minus navbar
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <Typography variant="h2" component="h1" gutterBottom>
                Hi, I'm Sudipta Mandal
              </Typography>
              <Typography variant="body1">
                A software engineer with more than three years of industrial
                experience. Adequate, organized, dedicated & self-driven person.
                I like to Explore new things while sticking around my comfort
                zone. Love programming and problem-solving. Like to lead while
                being efficient at teamwork. Former competitive programming
                contestant, current problem setter & judge of NSU Problem
                Solvers (NSUPS).
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
                >
                  View My Work
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  Contact Me
                </Button>
              </Box>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ProfileImage
                src={PROFILE_PHOTO}
                alt="Profile"
                onError={(e) => {
                  e.target.src = "./sudipta_dp.png";
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
