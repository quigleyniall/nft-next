import { Box, styled } from "@mui/system";
import ImageAvatar from "../Avatar/Avatar";
import { Grid, Typography } from "@mui/material";

const StyledLineItem = styled(Grid)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px !important;
    padding-top; 0px;
    border-radius: 8px;
    background-color: ${theme.palette.background.paper};
    &:not(:last-child) {
        margin-bottom: 8px;
    }
    `
);

const StyledAvatarContainer = styled(Grid)(
    ({ theme }) => `
      display: flex;
      align-items: center;
      gap: 16px;
      `
  );
  

const LineItem = () => {
  return (
    <StyledLineItem item xs={9}>
      <StyledAvatarContainer>
        <ImageAvatar />
        <Typography variant="h6" component="p">Niall Quigley</Typography>
      </StyledAvatarContainer>

      <Typography variant="h6" component="p">365</Typography>
    </StyledLineItem>
  );
};

export default LineItem;
