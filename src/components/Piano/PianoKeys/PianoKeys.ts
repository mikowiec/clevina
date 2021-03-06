import React from 'react';
import classes from './PianoKeys.css';
import WhiteKey from './Key/WhiteKey';
import BlackKey from './Key/BlackKey';

// an octave contains seven white keys and five black keys.
const octave = (props) => {

	const keys = [];

	for (var i = 0; i < 7; i++) {
		keys.push(
			<WhiteKey 
			tabIndex={0}
			keyPressed={props.keyPressed}
			onMouseDown={props.mouseDown}
			onMouseUp={props.mouseUp}
			keyID={props.id + "wk" + i}
			key={props.id + "wk" + i} />
		)
	}

	for (var j = 0; j < 5; j++) {
		keys.push(
			<BlackKey 
			tabIndex={0}
			keyPressed={props.keyPressed} 
			onMouseDown={props.mouseDown}
			onMouseUp={props.mouseUp}
			keyID={props.id + "bk" + j} 
			key={props.id + "bk" + j} />
		)
	}
	
	return (
		<div className={classes.Octave}>
			{keys}
		</div>
	);
}

export default octave;
