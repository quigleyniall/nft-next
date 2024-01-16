import { Grid, Paper, Typography } from "@mui/material";
import BarChart from "../../components/Charts/Bar";
import Dashboard from "@/components/Dashboard/Dashboard";
import { CardTitle, H1, H4 } from "@/components/typography/typography";

import dayjs, { Dayjs } from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';



const Events = () => {
  return (
    <Dashboard>
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "background.page" }}
      >
        <Paper sx={{ padding: "16px", marginBottom: "24px" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={dayjs('2022-04-17')}
        // loading={isLoading}
        // onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        // slots={{
        //   day:  dayjs('2022-04-17')
        // }}
        // slotProps={{
        //   day: {
        //     highlightedDays,
        //   } as any,
        // }}
      />
    </LocalizationProvider>
        </Paper>
      </Grid>
    </Dashboard>
  );
};

export default Events;

