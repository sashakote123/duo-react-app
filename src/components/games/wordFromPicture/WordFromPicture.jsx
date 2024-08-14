import { useParams } from "react-router";
import WordFromPictureBoard from "./WordFromPictureBoard";
import WordFromPictureHeader from "./WordFromPictureHeader";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeTheme } from "../../../store/currentThemeSlice";
import { wordFromPictureList } from "../../../lists/wordFromPictureList";

const WordFromPicture = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const obj = wordFromPictureList.find(item => item.theme === id)

    useEffect(() => {

        dispatch(changeTheme(obj))

    }, [dispatch, obj])

    return (
        <div className="container">
            <WordFromPictureHeader />
            <WordFromPictureBoard />
        </div>

    );
}

export default WordFromPicture;