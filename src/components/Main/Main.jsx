import styles from './Main.module.scss'
import Sidebar from "../UI/Sidebar/Sidebar";
import Information from "./Information";
import {DATA} from "../../data";
import BottomNavigation from "../UI/BottomNavigation/BottomNavigation";
import {useState} from "react";
import Episodes from "../elements/Episodes/Episodes";
import Video from "./Video";

const Main = () => {
    const [isSidebarShow, setIsSidebarShow] = useState(false)
    const [activeTab, setActiveTab] = useState(1)

    return (
        <div className={styles.wrapper}>
            <Sidebar
                isSidebarShow={isSidebarShow}
                setIsSidebarShow={setIsSidebarShow}
            />
            <div
                className={styles.main}
                style={{
                    backgroundImage: `url(${DATA[0].mainImage})`,
                    width: isSidebarShow ? '90%' : '95%',
                }}
            >
                {activeTab === 1 ? (
                    <Information movie={DATA[0]} />
                ) : (
                    activeTab === 2 && <Episodes movie={DATA[0]} />
                )}
            </div>
            <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    )
}

export default Main
