
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

TezisModel.exampleList = [
	new TezisModel({text: 'Публиковать больше голосований на актуальные темы'}),
	new TezisModel({text: 'Создать фотоальбом с автомобилями участников'}),
	new TezisModel({text: 'Забанить Ивана Сидорова, так как он всем надоел'}),
];
