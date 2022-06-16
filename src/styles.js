import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
export const useStyles = makeStyles((theme) = ({
    container:{
        backgroundColor: theme.palette.background.papper,
        padding: theme.spacing(8,0,6)
    },
    icon: {
        marginRight:'20px'
    },
    buttons: {
        marginTop: '40px'
    },
    cardGrid:{
        padding:'20px 0'
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardMedia:{
        paddingTop:'56.25%', // 16:9 size        
    },
    cardContent:{
        flexGrow: 1,
    }

}));