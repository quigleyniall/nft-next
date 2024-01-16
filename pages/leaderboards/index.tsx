import { Card, Grid } from "@mui/material";
import LineItem from "../../components/Leaderboards/LineItem";
import { useContext, useEffect, useState } from "react";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useDataSource } from "@/hooks/useDataSource";
import FilterBar from "@/features/FilterBar/FilterBar";

const Leaderboards = () => {
  const [userData, setUserData] = useState([]);
  const { data, statuses, setRefreshUrl } = useDataSource({
    url: `/api/closed?closedDate=LAST_N_YEARS:5`,
    errorMsg:
      "Problem retrieving leaderboards. If the problem presists, please contact support for further assistance.",
    successNoResultMsg:
      "No data found for this time frame!",
  });

  useEffect(() => {
    let userData = data.reduce((initial, curr) => {
      initial[curr.name] = initial[curr.name] + curr.amount || curr.amount;
      return initial;
    }, {});
    
    
    let newData = Object.entries(userData).reduce((initial, curr) => {
      let newObj = {name: curr[0], amount: curr[1]}
      return [...initial, newObj]
    }, [])
    
    let sortedData = newData.sort((a, b) => b.amount - a.amount);
    
    setUserData(sortedData);
  }, [data]);

  const formatAmount = (amt) => {
    return "$" + amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const updateData = (range) => {
    console.log(range)
    setRefreshUrl(`/api/closed?closedDate=${range}`,)
  }

  return (
    <Dashboard {...statuses}>
      <Grid
        rowSpacing={3}
        item
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ padding: "32px", background: "background.page" }}
      >
        <FilterBar updateData={updateData} />
        {userData.map((user, index) => (
          <LineItem name={user.name} amount={formatAmount(user.amount)} key={index} />
        ))}
      </Grid>
    </Dashboard>
  );
};

export default Leaderboards;
