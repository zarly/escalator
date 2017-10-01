
var idCouter = 0;

class TezisModel {
	constructor (props={text: ''}) {
		this.id = ++idCouter;
		this.text = props.text;
		this.pos = [];
		this.neg = [];
	}

	addPos (props) {
		var newObject = new TezisModel(props);
		this.pos.push(newObject);
	}

	addNeg (props) {
		var newObject = new TezisModel(props);
		this.neg.push(newObject);
	}
}

export default TezisModel;
