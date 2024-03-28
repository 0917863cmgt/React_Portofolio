/* eslint-disable jsx-ally/anchor-is-invalid */
import React, {useState} from 'react';
import useInterval from '@use-it/interval';

const VALID_CHARS = `abcdefghijklmnopqrstuvwxyz1234567890$=-*/=%"'#&(),.;:?!\\|{}<>[]^~`

const MIN_STREAM_SIZE = 15;
const MAX_STREAM_SIZE = 50;

const getRandInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandChar = () => VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));

const genRandStream = () => 
    new Array(getRandInRange(MIN_STREAM_SIZE,MAX_STREAM_SIZE))
    .fill()
    .map(_ => getRandChar());

function Rainstream(){
    const stream = genRandStream();
    const [topPadding, setTopPadding] = useState(stream,length * -50);

    useInterval(() => {
        if (topPadding > window.innerHeight){
            setTopPadding(0);
        } else {
            setTopPadding(topPadding + 44)
        }
    }, 100)
    return (
        <>
        <div 
            style={{
                marginTop : topPadding,
                color: '#20c20e',
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                whitespace: 'nowrap',
                userSelect:'none',
                textShadow: '0px 0px 8px rgba(32, 194, 14, 0.18)',
                fontSize: 50,
            }}
            >
        {genRandStream().map(char => (
        <a
        style={{
            marginTop: -12,
        }}>
            {char}</a>
        ))}
        </div>
        </>
    )
}

export default Rainstream