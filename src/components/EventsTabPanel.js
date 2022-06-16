import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

/*
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
*/
export default class EventsTabPanel extends Component {
    render() {
        return (
            <div>
                <Box sx={{ border: 0, paddingBottom:"20px", borderColor: 'divider', flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>                        
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>                    
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6">
                                        Sundar kand Path
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Saturday June 11, 2022 at 10:00 a.m. followed by aarti.
                                        </Typography>
                                    </CardContent>                    
                                </Card>                        
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ border: 0, paddingBottom:"20px", borderColor: 'divider', flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>                        
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>                    
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6">
                                        SatyaNarayan Puja
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Monday June 13, 2022 at 6:00 p.m. followed by aarti.                                     
                                        </Typography>
                                    </CardContent>                    
                                </Card>                        
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ border: 0, paddingBottom:"20px", borderColor: 'divider', flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>                        
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>                    
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6">
                                        Lord Ganesha’s Abishek and Pooja 
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Thursday June 16, 2022 at 5:30 p.m. followed by aarti                                     
                                        </Typography>
                                    </CardContent>                    
                                </Card>                        
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ border: 0, paddingBottom:"20px", borderColor: 'divider', flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>                        
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>                    
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6">
                                        Meru Yantra Abishek Pooja and Lalita sahasanama KumKuma Archana 
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Saturday June 18, 2022 at 10:30 a.m. followed by aarti                                    
                                        </Typography>
                                    </CardContent>                    
                                </Card>                        
                        </Grid>
                    </Grid>
                </Box>   
                <Box sx={{ border: 0, paddingBottom:"20px", borderColor: 'divider', flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>                        
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>                    
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6">
                                        Gayatri Mantra Jaap  
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary"> 
                                        Sunday June 19, 2022 at 3:00 p.m. followed by Bhagwati Kirtan & aarti                                    
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
