import { Button } from "@mui/material";

const CommonNavButton = (props) => {
	const { key, item } = props;
	return <Button key={key}>{item}</Button>;
};

export default CommonNavButton;
