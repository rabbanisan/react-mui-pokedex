import { createTheme } from "@mui/material/styles";
// logo theme
const logoTheme = createTheme({
	typography: {
		fontFamily: "Montserrat, sans-serif",
	},
});

const navBtnTheme = createTheme({
	typography: {
		fontFamily: "Quicksand, sans-serif",
		fontWeight: 600,
	},
});

export { logoTheme, navBtnTheme };
