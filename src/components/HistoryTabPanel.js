import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import img1_1 from '../images/img1_1.jpg';
import img1_2 from '../images/img1_2.jpg';
import img1_3 from '../images/img1_3.jpg';
import img1_4 from '../images/img1_4.jpg';
/*
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
*/
export default class HistoryTabPanel extends Component {
    render() {
        return (
            <div>
                <Box sx={{ border: 0, paddingBottom:"20px", borderColor: 'divider', flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>                       
                                <CardMedia
                                    component="img"
                                    height="300"
                                    //sx={{
                                    // 16:9
                                //   pt: '56.25%',                      
                                // }}
                                    image= {img1_1}  //"https://source.unsplash.com/random"
                                    alt="random"
                                />                      
                        </Grid>
                        <Grid item xs={8}>                        
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>                    
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6">
                                         History of the Temple
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Details 
                                        </Typography>
                                    </CardContent>                    
                                </Card>                        
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ border: 0, paddingBottom:"20px", borderColor: 'divider', flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>                       
                                <CardMedia
                                    component="img"
                                    height="300"
                                    //sx={{
                                    // 16:9
                                //   pt: '56.25%',                      
                                // }}
                                    image= {img1_2} //"https://source.unsplash.com/random"
                                    alt="random"
                                />                      
                        </Grid>
                        <Grid item xs={8}>                        
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>                    
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6">
                                            History of the Temple
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Details                                     
                                        </Typography>
                                    </CardContent>                    
                                </Card>                        
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ border: 0, paddingBottom:"20px", borderColor: 'divider', flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>                       
                                <CardMedia
                                    component="img"
                                    height="300"
                                    //sx={{
                                    // 16:9
                                //   pt: '56.25%',                      
                                // }}
                                    image= {img1_3}  //"https://source.unsplash.com/random"
                                    alt="random"
                                />                      
                        </Grid>
                        <Grid item xs={8}>                        
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>                    
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6">
                                        History of the Temple
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Details 
                                        </Typography>
                                    </CardContent>                    
                                </Card>                        
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ border: 0, paddingBottom:"20px", borderColor: 'divider', flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>                       
                                <CardMedia
                                    component="img"
                                    height="300"
                                    //sx={{
                                    // 16:9
                                //   pt: '56.25%',                      
                                // }}
                                    image= {img1_4} //"https://source.unsplash.com/random"
                                    alt="random"
                                />                      
                        </Grid>
                        <Grid item xs={8}>                        
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>                    
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6">
                                            History of the Temple
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Details 
                                        </Typography>
                                    </CardContent>                    
                                </Card>                        
                        </Grid>
                    </Grid>
                </Box>
            </div>
        )
    }
}
