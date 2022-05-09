import React, { Component } from 'react';
import Box from './Box'
import './styles/BoxContainer.css';
import zoomOut from './assets/zoom-out.png';
import zoomIn from './assets/zoom-in.png'
import refresh from './assets/icons8-refresh-60.png'

class BoxContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom: 6,
            shown: false,
            curTheme: 0
        }
    }
    render() {
        const colorThemes = [['rgb(13, 59, 102)', 'rgb(250, 240, 202)', 'rgb(244, 211, 94)', 'rgb(238, 150, 75)', 'rgb(249, 87, 56)', 'rgb(150, 205, 255)', 'rgb(216, 225, 255)', 'rgb(100, 18, 32)', 'rgb(224, 30, 55)', 'rgb(133, 24, 42)', 'rgb(199, 31, 55)', 'rgb(168, 218, 220)', 'rgb(241, 250, 238)', 'rgb(230, 57, 70)', 'rgb(29, 53, 87)', 'rgb(69, 123, 157)', 'rgb(46, 45, 77)', 'rgb(51, 115, 87)', 'rgb(52, 78, 65)', 'rgb(58, 90, 64)', 'rgb(88, 129, 87)', 'rgb(163, 177, 138)', 'rgb(218, 215, 205)', 'rgb(1, 42, 74)', 'rgb(1, 58, 99)', 'rgb(1, 73, 124)', 'rgb(1, 79, 134)', 'rgb(42, 111, 151)', 'rgb(44, 125, 160)', 'rgb(70, 143, 175)', 'rgb(97, 165, 194)', 'rgb(255, 109, 0)', 'rgb(255, 121, 0)', 'rgb(255, 133, 0)', 'rgb(255, 145, 0)', 'rgb(255, 158, 0)'], ['rgb(255, 109, 0)', 'rgb(255, 121, 0)', 'rgb(255, 133, 0)', 'rgb(255, 145, 0)', 'rgb(255, 158, 0)'], ['rgb(29, 71, 114)', 'rgb(37, 83, 126)', 'rgb(49, 104, 155)', 'rgb(73, 127, 171)', 'rgb(95, 146, 180)', 'rgb(116, 164, 188)', 'rgb(255, 209, 0)', 'rgb(255, 238, 50)', 'rgb(214, 214, 214)', 'rgb(51, 53, 51)', 'rgb(32, 32, 32)'], ['rgb(253, 201, 33)', 'rgb(253, 216, 93)', 'rgb(0, 53, 102)', 'rgb(153, 214, 234)', 'rgb(103, 152, 192)', 'rgb(11, 9, 10)', 'rgb(22, 26, 29)', 'rgb(102, 7, 8)', 'rgb(164, 22, 26)', 'rgb(186, 24, 27)', 'rgb(229, 56, 59)', 'rgb(177, 167, 166)', 'rgb(211, 211, 211)'], ['rgb(98, 71, 170)', 'rgb(114, 81, 181)', 'rgb(129, 90, 192)', 'rgb(145, 99, 203)', 'rgb(160, 108, 213)', 'rgb(177, 133, 219)', 'rgb(193, 158, 224)', 'rgb(210, 183, 229)'], ['rgb(47, 62, 70)', 'rgb(53, 79, 82)', 'rgb(82, 121, 111)', 'rgb(132, 169, 140)', 'rgb(202, 210, 197)'], ['rgb(100, 18, 32)', 'rgb(110, 20, 35)', 'rgb(133, 24, 42)', 'rgb(161, 29, 51)', 'rgb(167, 30, 52)', 'rgb(178, 30, 53)', 'rgb(189, 31, 54)', 'rgb(199, 31, 55)', 'rgb(218, 30, 55)', 'rgb(224, 30, 55)'], ['rgb(13, 71, 161)', 'rgb(21, 101, 192)', 'rgb(25, 118, 210)', 'rgb(30, 136, 229)', 'rgb(33, 150, 243)', 'rgb(100, 181, 246)', 'rgb(66, 165, 245)', 'rgb(144, 202, 249)']]
        let screenWidth = window.screen.width;
        let zoom = this.state.zoom;
        let size = `${screenWidth / zoom}px`;
        let screenHeight = window.screen.height - 56;
        let boxcount = Math.round(screenHeight / (screenWidth / zoom)) * zoom;
        let boxes = [];
        for (let i = 0; i <= boxcount; i++) {
            let box = < Box size={size} colors={colorThemes[this.state.curTheme]} key={i} shown={this.state.shown} theme={this.state.curTheme} />;
            boxes.push(box)
        }
        return (
            <div className='BoxContainer'>
                <div className='navbar'>
                    <h3 onClick={() => { window.location.href = 'http://localhost:3000' }}>Color Clicker</h3>
                    <div className='as'>
                        <a onClick={() => {
                            const ps = document.querySelectorAll('p');
                            if (this.state.shown === false) {
                                this.setState({ shown: true })
                                for (let p of ps) {
                                    p.classList.remove('none');
                                }
                            } else {
                                this.setState({ shown: false })
                                for (let p of ps) {
                                    p.classList.add('none');
                                }
                            }
                        }}>Show Hexcodes</a>
                        <a onClick={() => {
                            this.setState({ curTheme: Math.floor(Math.random() * colorThemes.length) }, () => {
                                const bxs = document.querySelectorAll('.Box');
                                for (let bx of bxs) {
                                    bx.click();
                                }
                            })
                        }}>Change Color Theme</a>
                    </div>
                    <div className='group'>
                        <button className='zoomBtn' onClick={() => {
                            if (this.state.zoom > 3) {
                                this.setState({ zoom: this.state.zoom - 3 })
                            }
                        }}>Zoom In <img src={zoomIn} width='27px' /></button>
                        <button className='zoomBtn' onClick={() => {
                            this.setState({
                                zoom: this.state.zoom + 3
                            })
                        }}>Zoom Out <img src={zoomOut} width='20px' /> </button>
                    </div>
                    <img src={refresh} height='30px' className='refresh' onClick={() => {
                        const bxs = document.querySelectorAll('.Box');
                        for (let bx of bxs) {
                            bx.click();
                        }
                    }} />
                </div>
                {boxes}
            </div >
        )
    }
}

export default BoxContainer;