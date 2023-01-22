import styles from './Episodes.module.scss'
import chapter_1 from '../../../images/avengers_1.png'
import chapter_2 from '../../../images/avengers_2.png'
import chapter_3 from '../../../images/avengers_3.png'
import chapter_4 from '../../../images/avengers_4.png'
import {VideoFirst, VideoFour, VideoSecond, VideoThird} from "../../Main/Video";

const series = [
    {
        id: 1,
        name: 'Мстители',
        img: chapter_1,
        trailer: <VideoFirst/>
    },
    {
        id: 2,
        name: 'Эра Альтрона',
        img: chapter_2,
        trailer:<VideoSecond/>
    },
    {
        id: 3,
        name: 'Война бесконечности',
        img: chapter_3,
        trailer:<VideoThird/>
    },
    {
        id: 4,
        name: 'Финал',
        img: chapter_4,
        trailer:<VideoFour/>
    },
]
const Episodes = ({movie}) => {
    return (
        <div className={styles.main_logo}>
            <img
            src={movie.logo}
            alt={movie.name}
            width='200'
            style={{ opacity: 0.7,  }}
        />

        <div className={styles.main_info}>
            {series.map(part => (
                <div>
                    <div  className={styles.episode} >{part.name}</div>
                    <img src={part.img} className={styles.logo}/>
                    <div>{part.trailer}</div>
                </div>
            ))}
        </div>
        </div>

    )
}

export default Episodes
