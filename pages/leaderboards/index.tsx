import {Grid } from '@mui/material';
import LineItem from '../../components/Leaderboards/LineItem';
import { useContext } from 'react';
import { CustomTheme } from '../../context/theme';


const Leaderboards = () => {
    const {theme} = useContext(CustomTheme)
    return (
        <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px"}}
      >
        <LineItem></LineItem>
        <LineItem></LineItem>
        <LineItem></LineItem>
        <LineItem></LineItem>
        </Grid>
    )
}

export default Leaderboards;
