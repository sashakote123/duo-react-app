import { Link } from "react-router-dom";

const MainButton = ({ content }) => {
    return (
        <Link to={'/'} className="mainbtn">
            {content}
        </Link>
    )
}

export default MainButton;