import React, {Component} from 'react';
import './progress.css'

export default class Progress extends Component {

    // defaultProps = {
    //     bgColor: 'pink',
    //     barColor: 'red',
    //     cursorColor: 'red'
    // };

    render() {
        return (
            <div>
                当前进度是: {this.props.progress}%...
                <div className={"component-progress"}
                     onClick={this.changeProgress.bind(this)}
                     ref={"progressBar"}
                     style={{background: this.props.bgColor}}>
                    <div className={"progress"}
                         style={{width: `${this.props.progress}%`, background: this.props.barColor}}/>
                    <div className={"number"}
                         style={{color: this.props.barColor}}>
                        {this.props.progress}%
                    </div>
                </div>
            </div>
        );
    }

    changeProgress(e) {
        // alert("Listened to clicking component...");
        let progressBar = this.refs.progressBar;
        let progressLeft = progressBar.getBoundingClientRect().left;
        let progressAbsLength = e.clientX;
        let totalLength = progressBar.clientWidth;
        let progress = (progressAbsLength - progressLeft) / totalLength;
        // alert(`Click ${progress}`);
        // console.log(progress);
        this.props.onProgressChange && this.props.onProgressChange(progress);
    }

}

Progress.defaultProps = {
    bgColor: 'pink',
    barColor: 'red',
};
