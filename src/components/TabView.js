import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import HistoryTabPanel from './HistoryTabPanel';
import TimingsTabPanel from './TimingsTabPanel';
import EventsTabPanel from './EventsTabPanel';


export default function TabView() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="Temple Details" 
            textColor="secondary"
            indicatorColor="secondary">
            <Tab label="History" value="1" />
            <Tab label="Timings" value="2" />
            <Tab label="Events" value="3" />
            <Tab label="Bookings" value="4" />
            <Tab label="Donate" value="5" />
            <Tab label="Gallery" value="6" />
            <Tab label="Contact Us" value="7" />            
          </TabList>
        </Box>
        <TabPanel value="1"> Temple History
          <HistoryTabPanel/>
        </TabPanel>
        <TabPanel value="2"> Temple Timings
          <TimingsTabPanel/>
        </TabPanel>
        <TabPanel value="3">Upcoming Events
          <EventsTabPanel/>
        </TabPanel>
        <TabPanel value="4">Booking Pooja
                
        </TabPanel>
      </TabContext>
    </Box>
  );
}
