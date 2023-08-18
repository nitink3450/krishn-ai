import React from 'react';
import s from './ProgressBar.module.scss';
function CircularProgressBar(props) {
    // const [percentage, setPercentage] = useState(props.percentage);

    // Size of the enclosing square
    const sqSize = props.sqSize;
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (props.sqSize - props.strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - (dashArray * props.percentage) / 100;

    // function handleChangeEvent(event) {
    //   setPercentage(event.target.value);
    // }

    return (
        <div className={s.progressBar} style={props.position}>
            <svg width={props.sqSize} height={props.sqSize} viewBox={viewBox}>
                <circle
                    className={s.circle_background}
                    cx={props.sqSize / 2}
                    cy={props.sqSize / 2}
                    r={radius}
                    strokeWidth={`${props.strokeWidth}px`}
                />
                <circle
                    className={s.circle_progress}
                    cx={props.sqSize / 2}
                    cy={props.sqSize / 2}
                    r={radius}
                    strokeWidth={`${props.strokeWidth}px`}
                    // Start progress marker at 12 O'Clock
                    transform={`rotate(-90 ${props.sqSize / 2} ${props.sqSize / 2})`}
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset,
                    }}
                />
            </svg>
        </div>
    );
}

CircularProgressBar.defaultProps = {
    sqSize: 50,
    percentage: 0,
    strokeWidth: 2,
};

export default CircularProgressBar;