import React, { Component } from 'react';
import {Row, Col,List} from 'antd';

class TwelvePart extends Component {
	constructor(props) {
		super(props);
		this.state = {listText:''};
	}

	componentWillMount() {
		var myList = {
			method:'GET'
		};
		fetch('http://www.hejianzhiyang.com/Api/json_daquan?limit=6',myList).then(response => response.json()).then(json => this.setState({listText:json}));
	};

	render() {
		const {listText} = this.state;
		return (
			<div className="FourAddTwoBtn TwelvePart">
				<Row>
					<Col>
						<h3>装修问答</h3>
					</Col>
				</Row>
				<List
					size="small"
					bordered
					dataSource={listText}
					renderItem={item => (<List.Item>{item.title}</List.Item>)}
				/>
			</div>
		);
	}
}

export default TwelvePart;