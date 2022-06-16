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
            <Tab label="Donate / Bookings" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1"> Temple History
          <HistoryTabPanel/>
        </TabPanel>
        <TabPanel value="2"> Pooja Time Slots
          <TimingsTabPanel/>
        </TabPanel>
        <TabPanel value="3">Temple Events
          <EventsTabPanel/>
        </TabPanel>
        <TabPanel value="4">Donate / Booking Pooja
          
        </TabPanel>
      </TabContext>
    </Box>
  );
}
