import Header from "./Header.component";

const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default MainLayout;
