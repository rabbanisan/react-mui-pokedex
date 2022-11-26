import {
	Box,
	AppBar,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
	Toolbar,
	Divider,
	IconButton,
	Drawer,
	CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import CommonNavButton from "../common/CommonNavButton.component";

const navItems = ["Home", "About", "Contact"];
const drawerWidth = 240;

const MainNavigation = (props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState();

	const logo = createTheme({
		typography: {
			fontFamily: "Montserrat, sans-serif",
		},
	});

	// drawer toggle
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	// drawer object
	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<CssBaseline />
			<ThemeProvider theme={logo}>
				<Toolbar className="logo" sx={{ my: 2, justifyContent: "center" }}>
					<Typography variant="h6" sx={{ color: "#1E54A4" }}>
						POKE
					</Typography>
					<Typography variant="h6" sx={{ color: "#FFCA07" }}>
						dex
					</Typography>
				</Toolbar>
			</ThemeProvider>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;
	return (
		<Box sx={{ display: "flex" }}>
			<AppBar
				className="appBar"
				sx={{
					bgcolor: "#F5F5F5",
					height: 60,
					justifyContent: "center",
					padding: "0 30px",
				}}
			>
				{/* logo */}
				<Toolbar sx={{ justifyContent: "space-between" }}>
					<ThemeProvider theme={logo}>
						<Toolbar className="logo">
							<Typography variant="h4" sx={{ color: "#1E54A4" }}>
								POKE
							</Typography>
							<Typography variant="h4" sx={{ color: "#FFCA07" }}>
								dex
							</Typography>
						</Toolbar>
					</ThemeProvider>
					{/* drawer button */}
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ display: { sm: "none" } }}
					>
						<MenuIcon fontSize="large" sx={{ color: "black" }} />
					</IconButton>
					{/* nav button */}
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{navItems.map((item) => (
							<CommonNavButton key={item} item={item} />
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
};

export default MainNavigation;
