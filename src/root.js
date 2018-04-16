import React, {Component} from 'react';
import Button from 'antd/lib/button';
import './root.css'
import 'whatwg-fetch'
import {url} from './config'
import {DatePicker, Pagination, Steps} from "antd";
import Header from "./header";
import Player from "./page/player";

const Step = Steps.Step;

class Root extends Component {

    componentDidMount() {
        // eslint-disable-next-line
        $('#player').jPlayer({
            ready: function () {
                // eslint-disable-next-line
                $(this).jPlayer('setMedia', {
                    mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%90%E9%83%BD.mp3'
                }).jPlayer('play');
            },
            supplied: 'mp3',
            wmode: 'window',
            volume: .8
        });

    }

    onDateChoose(date, dateFormat) {
        alert(dateFormat);
    }

    onClickButton(event) {
        fetch(url('/api/register'), {mode: 'no-cors'})
            .then(res => res.text())
            .then(data => alert(data === ''))
            .catch(e => alert(e));
    }

    render() {
        return (
            <div className={'component-root'}>
                <Header/>
                <Player/>
                <div className={'antd'}>
                    <Button type="primary" onClick={this.onClickButton}>Antd按钮</Button>
                    <Pagination defaultCurrent={1} total={660}/>
                    <DatePicker onChange={this.onDateChoose} format={'YYYY年MM月DD日 HH:mm:ss'}/>
                    <Steps current={2} className={'steps'}>
                        <Step title={'Html'} description={'学习前端Html标签语言'} icon={'pie-chart'}/>
                        <Step title={'Css'} description={'样式语言'}/>
                        <Step title={'JavaScript'} description={'JS脚本语言'}/>
                        <Step title={'React'} description={'React框架技术'}/>
                        <Step title={'Ant Design'} description={'基于React的UI组件库'}/>
                    </Steps>
                </div>
            </div>
        );
    }

}

Root.defaultProps = {"abc": 123, progress: "-"};

export default Root;
