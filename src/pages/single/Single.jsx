import Sidebar from "../../components/sidebar/Sidebar";
import FirstPost from "../../components/firstPost/FirstPost";
import './Single.css';

export default function Single() {
    return (
        <div className="single">
            <FirstPost />
            <Sidebar />
        </div>
    )
};