import React, { Component } from 'react';
import './styles/Box.css';

class BoxContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curColor: this.props.colors[Math.floor(Math.random() * this.props.colors.length)],
            curTheme: this.props.theme
        };
    }
    render() {
        const randomColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
        const newColor = () => {
            const oldColor = document.querySelector('.Box').style.backgroundColor;
            let randColor = randomColor;
            if (oldColor === randColor) {
                randColor = randColor;
            }
            this.setState({ curColor: randColor })
        }
        let p;
        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        function rgbToHex(r, g, b) {
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        }
        const text = (props) => {
            if (this.props.shown) {
                const splitArr = this.state.curColor.slice(4, this.state.curColor.length - 1).split(',');
                return <p style={{ fontSize: `${this.props.size.slice(0, this.props.size.indexOf('p')) / 10}px` }}>{rgbToHex(Number(splitArr[0]), Number(splitArr[1]), Number(splitArr[2]))}</p>;
            }
        }

        return (
            <div className='Box' onClick={newColor} style={{
                backgroundColor: this.state.curColor, height: this.props.size, aspectRatio: 1 / 1
            }}>
                {text()}
            </div >
        )
    }
}

export default BoxContainer;