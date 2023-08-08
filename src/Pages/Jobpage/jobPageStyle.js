import { Box, Button, Typography, styled } from "@mui/material";

export const SafetyBoxWrapper = styled(Box)(({ theme }) => ({
    padding: "15px 20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px -8px black"
}))

export const JobContentWrapper = styled(Box)(({ theme }) => ({
    padding: "15px 20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px -8px black"
}))

export const Title = styled(Typography)(({ theme }) => ({
    fontSize: "30px",
    fontWeight: "500",
    color: "#333",
    "&:hover": {
        textDecoration: "underline",
        cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "22px"
    }
}))

export const ViewDetailsWrapper = styled(Box)(({ theme }) => ({
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px"
}))

export const NormalText = styled(Typography)(({ theme }) => ({
    textTransform: "capitalize",
    fontWeight: "500",
    color: "#000",
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
        fontSize: "14px"
    }
}))

export const NormalFlex = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "10px 0px"
}))

export const ButtonStyle = styled(Button)(({ theme }) => ({
    padding: "12px 40px",
    borderRadius: "50px",
    fontSize: "18px"
}))

