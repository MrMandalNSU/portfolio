import { Box, Container, Typography, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const PROFILE_PHOTO = "./sudipta_dp.png";

const OuterPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
}));

const TextBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[2],
  flex: 1, // Ensures equal width with the image container
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
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <OuterPaper elevation={3}>
          {/* Main Layout Box */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
              alignItems: "center",
              gap: 4, // Adds spacing between text and image
            }}
          >
            {/* Image First on Mobile, Right on Desktop */}
            <Box
              sx={{
                flex: 1, // Ensures equal width with text on desktop
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

            {/* Text Section */}
            <TextBox>
              <Typography variant="h2" component="h1" gutterBottom>
                Hi, I'm Sudipta Mandal
              </Typography>
              <Typography variant="body1">
                A software engineer with more than three years of industrial
                experience. Adequate, organized, dedicated & self-driven person.
                I like to explore new things while sticking around my comfort
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
            </TextBox>
          </Box>
        </OuterPaper>
      </Container>
    </Box>
  );
};

export default Intro;
