import React, { memo, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import CircularProgressBar from './Common/ProgressBar/ProgressBar';
import s from './VideoComp.module.scss';

const VideoComp = (props) => {
    // const [playing, setPlaying] = useState(props.autoplay);
    const [playing, setPlaying] = useState(props.autoplay);
    const [playedSeconds, setPlayedSeconds] = useState(0);
    const [duration, setDuration] = useState(0);
    const playerRef = useRef(null);
    const containerRef = useRef(null);

    // Video will only play when user is in Video Components View otherwise it stop playing-
    useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setPlaying(true);
                } else {
                    setPlaying(false);
                }
            });
        }, options);

        observer.observe(containerRef.current);

        return () => {
            if (containerRef.current instanceof Element) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        // set the duration when the video is ready
        setDuration(playerRef.current?.getDuration() || 0);
    });


    const handlePlay = () => { props.videoDuration ? (props.videoDuration(duration), playerRef.current.seekTo(0)) : null, setPlaying(true) };
    const handlePause = () => setPlaying(false);
    const handleProgress = (e) => { setPlayedSeconds(e.playedSeconds), props.videoProgress ? props.videoProgress(progress) : null };
    const togglePlaying = () => setPlaying(!playing);

    // calculate the progress percentage
    const progress = duration ? (playedSeconds / duration) * 100 : 0;
    // console.log(progress);
    // console.log('props.autoplay-', props.autoplay);
    // console.log('isPlaying-', playing);

    return (
        <>
            <div
                className={s.videoContainer}
                ref={containerRef}
            // style={{ maxWidth: `${props.maxWidth}px`, height: `${props.height}px` }}
            >
                <ReactPlayer
                    ref={playerRef}
                    // url={'/images/Gen4/videos/natureClip.mp4'}
                    url={props.url}
                    playing={playing}
                    width="100%"
                    height="100%"
                    onPlay={handlePlay}
                    onPause={handlePause}
                    onProgress={handleProgress}
                    muted={props.autoplay ? true : false}
                />
                <button
                    className={`${s.playButton}`}
                    style={props.position}
                    onClick={togglePlaying}
                >
                    {playing ? (
                        <div className={s.progress}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18px"
                                height="18px"
                                viewBox="0 0 8 12"
                                fill="none"
                            >
                                <path
                                    d="M0.75 0C0.3125 0 0 0.34375 0 0.75V11.25C0 11.6875 0.3125 12 0.75 12C1.15625 12 1.5 11.6875 1.5 11.25V0.75C1.5 0.34375 1.15625 0 0.75 0ZM7.25 0C6.8125 0 6.5 0.34375 6.5 0.75V11.25C6.5 11.6875 6.8125 12 7.25 12C7.65625 12 8 11.6875 8 11.25V0.75C8 0.34375 7.65625 0 7.25 0Z"
                                    fill="#F7F7F7"
                                />
                            </svg>
                        </div>
                    ) : (
                        <svg
                            viewBox="0 0 20 20"
                            width="30px"
                            height="30px"
                            className={s.playIcon}
                        >
                            <path
                                d="M14.401 11.4007C14.7655 11.1663 14.9999 10.7497 14.9999 10.333C14.9999 9.8903 14.7655 9.47363 14.401 9.2653L6.90096 4.68197C6.51034 4.44759 6.01554 4.42155 5.62492 4.65592C5.23429 4.86426 4.99992 5.28092 4.99992 5.74967V14.9163C4.99992 15.359 5.23429 15.7757 5.62492 15.984C6.01554 16.2184 6.51034 16.2184 6.90096 15.958L14.401 11.4007Z"
                                fill="#F7F7F7"
                            />
                        </svg>
                    )}
                </button>
                <CircularProgressBar
                    position={props.position}
                    percentage={progress === 100 ? 0 : progress}
                />
            </div>
        </>
    );
};

VideoComp.defaultProps = {
    url: '/images/Gen4/videos/natureClip.mp4',
};

export default memo(VideoComp);