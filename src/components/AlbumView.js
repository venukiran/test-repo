import * as React from 'react';
//import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
//import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
//import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
//import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';

const mandirs = [
  {
    "key" : 1,
    "image" : 'img1', 
    "name" : "Durga Mandir",
    "details": " 'Durga Mandir in Princeton, New Jersey, USA' \n A place where you will meet your peace"
  },
  {
    "key" : 2,
    "image" :  "img2",
    "name" : "Sai Baba Mandir",
    "details": " 'Sai Baba Mandir in Princeton, New Jersey, USA' \n A place where you will meet your peace"
  },
  {
    "key" : 3,
    "image" :  "img3",
    "name" : "Siva Mandir",
    "details": " 'Siva Mandir in Princeton, New Jersey, USA' \n A place where you will meet your peace"
  },
  {
    "key" : 4,
    "image" :  "img4",
    "name" : "Ganapathi Mandir",
    "details": " 'Ganapathi Mandir in Princeton, New Jersey, USA' \n A place where you will meet your peace"
  },
  {
    "key" : 5,
    "image" :  "img5",
    "name" : "Krishna Mandir",
    "details": " 'Krishna Mandir in Princeton, New Jersey, USA' \n A place where you will meet your peace"
  },
  {
    "key" : 6,
    "image" :  "img6",
    "name" : "Lakshmi Mandir",
    "details": " 'Lakshmi Mandir in Princeton, New Jersey, USA' \n A place where you will meet your peace"
  },
  {
    "key" : 7,
    "image" :  "img7",
    "name" : "Siva Mandir",
    "details": " 'Siva Mandir in Princeton, New Jersey, USA' \n A place where you will meet your peace"
  },
  {
    "key" : 8,
    "image" :  "img8",
    "name" : "Laxmi Narayan Mandir",
    "details": " 'Laxmi Narayan Mandir in Princeton, New Jersey, USA'"
  },
  {
    "key" : 9,
    "image" :  "img9",
     "name" : "Vishnu Mandir",
    "details": " 'Vishnu Mandir in Princeton, New Jersey, USA' \n A place where you will meet your peace"
  }
]

const cards = [img1, img2, img3,img4, img5, img6, img7, img8, img9];

const theme = createTheme();

export default function AlbumView() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <div>
            <Container maxWidth="sm" style={{ marginTop:'100px'}}>
                <Typography variant="h4" align="left" color="textPrimary" gutterBottom>
                   Temple Search 
                </Typography>                
                <div>
                  <Box component="form"  noValidate sx={{ mt: 1 }}>                      
                      <Grid container spacing={4} justify="center">
                          <Grid item>
                              <TextField
                                margin="normal"
                                required
                                fullWidth                                
                                id="searchId"
                                label="Type Here Temple or God Name"
                                name="search"
                                autoComplete="Type here for temple search"
                                autoFocus
                              />
                              <Button variant="contained" color="primary">
                                  Search
                              </Button>                                                                
                          </Grid>
                      </Grid>
                  </Box>
                </div>
            </Container>
        </div>     
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card,index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      //pt: '56.25%',
                    }}
                    image= {card} //"https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {mandirs[index].name}
                    </Typography>
                    <Typography>
                      {mandirs[index].details}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href="/Tabs" >View</Button>
                    <Button size="small" href="">Subscribe</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
     
    </ThemeProvider>
  );
}
