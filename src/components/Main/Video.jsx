import React, {useState} from "react";
import ModalVideo from "react-modal-video";
import '/node_modules/react-modal-video/scss/modal-video.scss';
import styles from './Main.module.scss';

export default function VideoMain() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <ModalVideo className={styles.result_video} channel='youtube' autoplay isOpen={isOpen} videoId={'eOrNdBpGMv8'}
                        onClose={() => setOpen(false)}/>
            <button className={styles.video} onClick={() => setOpen(true)}>Trailer</button>
        </div>
    )
}
export  function VideoFirst() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <ModalVideo className={styles.result_video} channel='youtube' autoplay isOpen={isOpen} videoId={'eOrNdBpGMv8'}
                        onClose={() => setOpen(false)}/>
            <button className={styles.video} onClick={() => setOpen(true)}>Trailer</button>
        </div>
    )
}
export  function VideoSecond() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <ModalVideo className={styles.result_video} channel='youtube' autoplay isOpen={isOpen} videoId={'tmeOjFno6Do'}
                        onClose={() => setOpen(false)}/>
            <button className={styles.video} onClick={() => setOpen(true)}>Trailer</button>
        </div>
    )
}
export  function VideoThird() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <ModalVideo className={styles.result_video} channel='youtube' autoplay isOpen={isOpen} videoId={'6ZfuNTqbHE8'}
                        onClose={() => setOpen(false)}/>
            <button className={styles.video} onClick={() => setOpen(true)}>Trailer</button>
        </div>
    )
}
export  function VideoFour() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <ModalVideo className={styles.result_video} channel='youtube' autoplay isOpen={isOpen} videoId={'TcMBFSGVi1c'}
                        onClose={() => setOpen(false)}/>
            <button className={styles.video} onClick={() => setOpen(true)}>Trailer</button>
        </div>
    )
}
