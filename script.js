import questions from './questions.js';

const panel = document.querySelector('.panel');
const homeBtn = document.querySelector('.homeBtn');
const homePanel = document.querySelector('.homePanel');
const quesTxt = document.querySelector('.ques');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const option5 = document.querySelector('.option5');
const option6 = document.querySelector('.option6');
const options = document.querySelector('.options');
const buttons = document.querySelector('.buttons');
const nextBtn = document.querySelector('.nextBtn');
const checkBtn = document.querySelector('.checkBtn');
const sureTxt = document.querySelector('.sure');
const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
panel.removeChild(homePanel);

class sound {
    constructor(src) {
        this.sound = document.createElement('audio');
        this.sound.src = src;
        this.sound.setAttribute('preload', 'auto');
        this.sound.setAttribute('controls', 'none');
        this.sound.style.display = 'none';
        document.body.appendChild(this.sound);

    this.play = function () {
        this.sound.play();
    };
    }
}

let chosenOption;
let totalNumOfQues;
let tempQues;
let difficulty;
let category = 0;
let quesNum = 0;
let score = 0;
let checkable = true;
let correctSound = new sound('./assets/correct.mp3');
let incorrectSound = new sound('./assets/incorrect.mp3');
let tingSound = new sound('./assets/ting.mp3');
let startSound = new sound('./assets/start.mp3');
let happySound = new sound('./assets/happy.mp3');
let sadSound = new sound('./assets/sad.mp3');

homeBtn.addEventListener('click', () => {
	if (category) {
		startSound.play();
		homeFunc();
	}
});

yesBtn.addEventListener('click', async () => {
	startSound.play();
	sureTxt.classList.remove('move');
	noBtn.classList.remove('move');
	yesBtn.classList.remove('move');
	await sleep(500);

	restart();
	await sleep(500);
	removeHome();
});

noBtn.addEventListener('click', async () => {
	startSound.play();
	sureTxt.classList.remove('move');
	noBtn.classList.remove('move');
	yesBtn.classList.remove('move');
	await sleep(500);

	removeHome();
	quesTxt.innerHTML = tempQues;
	panel.removeChild(homePanel);
});

option1.addEventListener('click', () => {
	chosenOption = 1;
	optionFunc();
});
option2.addEventListener('click', () => {
	chosenOption = 2;
	optionFunc();
});
option3.addEventListener('click', () => {
	chosenOption = 3;
	optionFunc();
});
option4.addEventListener('click', () => {
	if (!category) {
		chosenOption = 4;
		optionFunc();
	}
});
option5.addEventListener('click', () => {
	if (!category) {
		chosenOption = 5;
		optionFunc();
	}
});
option6.addEventListener('click', () => {
	if (!category) {
		chosenOption = 6;
		optionFunc();
	}
});

nextBtn.addEventListener('click', () => {
	if (nextBtn.innerHTML == 'End' && !checkable) {
		endScreen();
		endAnimation();
	} else if (nextBtn.innerHTML == 'Start' && chosenOption) {
		startSound.play();
		difficulty = chosenOption;

		totalNumOfQues = difficulty * 2 + 1;
		startQuiz();
	} else if (nextBtn.innerHTML == 'Next' && !checkable) {
		tingSound.play();
		nextQues();
	} else if (nextBtn.innerHTML == 'Next' && !difficulty) {
		startSound.play();
		category = chosenOption;
		chosenOption = 0;
		categoryRemove();
		selectDifficulty();
	} else if (nextBtn.innerHTML == 'Go Again?') {
		startSound.play();
		restart();
	}
});

checkBtn.addEventListener('click', () => {
	if (checkable) checkAns();
});

const optionFunc = function () {
	if (nextBtn.classList.contains('notActive')) {
		nextBtn.classList.remove('notActive');
		nextBtn.classList.add('active');
	}
};

const startQuiz = function () {
	nextBtn.innerHTML = 'Next';
	nextBtn.classList.add('started');
	checkBtn.classList.remove('notActive');
	checkBtn.classList.add('active');

	option1.classList.remove('diff');
	option2.classList.remove('diff');
	option3.classList.remove('diff');
	nextQues();
};

const checkAns = function () {
	if (chosenOption == 1) {
		if (questions[category][difficulty][quesNum][chosenOption][1]) {
			option1.classList.add('correct');
			score++;
			correctSound.play();
		} else {
			option1.classList.add('incorrect');
			incorrectSound.play();

			if (questions[category][difficulty][quesNum][2][1]) option2.classList.add('correct');
			else if (questions[category][difficulty][quesNum][3][1]) option3.classList.add('correct');
		}
		chosenOption = 0;
		checkable = false;
	} else if (chosenOption == 2) {
		if (questions[category][difficulty][quesNum][chosenOption][1]) {
			option2.classList.add('correct');
			score++;
			correctSound.play();
		} else {
			option2.classList.add('incorrect');
			incorrectSound.play();

			if (questions[category][difficulty][quesNum][1][1]) option1.classList.add('correct');
			else if (questions[category][difficulty][quesNum][3][1]) option3.classList.add('correct');
		}
		chosenOption = 0;
		checkable = false;
	} else if (chosenOption == 3) {
		if (questions[category][difficulty][quesNum][chosenOption][1]) {
			option3.classList.add('correct');
			score++;
			correctSound.play();
		} else {
			option3.classList.add('incorrect');
			incorrectSound.play();

			if (questions[category][difficulty][quesNum][1][1]) option1.classList.add('correct');
			else if (questions[category][difficulty][quesNum][2][1]) option2.classList.add('correct');
		}
		chosenOption = 0;
		checkable = false;
	}
};

const nextQues = function () {
	quesNum++;
	quesTxt.innerHTML = questions[category][difficulty][quesNum][0];
	option1.innerHTML = questions[category][difficulty][quesNum][1][0];
	option2.innerHTML = questions[category][difficulty][quesNum][2][0];
	option3.innerHTML = questions[category][difficulty][quesNum][3][0];
	chosenOption = 0;
	checkable = true;

	if (option1.classList.contains('correct')) option1.classList.remove('correct');
	if (option2.classList.contains('correct')) option2.classList.remove('correct');
	if (option3.classList.contains('correct')) option3.classList.remove('correct');
	if (option1.classList.contains('incorrect')) option1.classList.remove('incorrect');
	if (option2.classList.contains('incorrect')) option2.classList.remove('incorrect');
	if (option3.classList.contains('incorrect')) option3.classList.remove('incorrect');

	if (quesNum == totalNumOfQues) nextBtn.innerHTML = 'End';
};

const endScreen = function () {
	quesTxt.innerHTML = `You Scored ${score} / ${totalNumOfQues}.`;
	nextBtn.innerHTML = 'Go Again?';

	option1.classList.add('end');
	option2.classList.add('end');
	option3.classList.add('end');
	options.classList.add('end');
	checkBtn.classList.add('end');
	nextBtn.classList.add('end');
};

const restart = async function () {
	quesNum = 0;
	score = 0;
	chosenOption = 0;
	difficulty = 0;
	category = 0;
	totalNumOfQues = 0;
	checkable = true;

	if (panel.contains(homePanel)) panel.removeChild(homePanel);
	options.appendChild(option4);
	options.appendChild(option5);
	options.appendChild(option6);

	quesTxt.innerHTML = 'Select Category';
	nextBtn.innerHTML = 'Next';
	option1.innerHTML = 'Shapes';
	option2.innerHTML = 'Geography';
	option3.innerHTML = 'Math';
	option4.innerHTML = 'General Knowledge';
	option5.innerHTML = 'Animals';
	option6.innerHTML = 'Pop Culture';

	if (option1.classList.contains('correct')) option1.classList.remove('correct');
	if (option2.classList.contains('correct')) option2.classList.remove('correct');
	if (option3.classList.contains('correct')) option3.classList.remove('correct');
	if (option1.classList.contains('incorrect')) option1.classList.remove('incorrect');
	if (option2.classList.contains('incorrect')) option2.classList.remove('incorrect');
	if (option3.classList.contains('incorrect')) option3.classList.remove('incorrect');

	if (option1.classList.contains('diff')) option1.classList.remove('diff');
	if (option2.classList.contains('diff')) option2.classList.remove('diff');
	if (option3.classList.contains('diff')) option3.classList.remove('diff');

	if (!option1.classList.contains('end')) option1.classList.add('end');
	if (!option2.classList.contains('end')) option2.classList.add('end');
	if (!option3.classList.contains('end')) option3.classList.add('end');
	option4.classList.add('end');
	option5.classList.add('end');
	option6.classList.add('end');

	await sleep(500);
	option1.classList.remove('end');
	option2.classList.remove('end');
	option3.classList.remove('end');
	options.classList.remove('end');
	checkBtn.classList.remove('end');
	nextBtn.classList.remove('end');

	nextBtn.classList.add('notActive');
	nextBtn.classList.remove('active');
	nextBtn.classList.remove('started');
	checkBtn.classList.add('notActive');
	checkBtn.classList.remove('active');

	option1.classList.add('categ');
	option2.classList.add('categ');
	option3.classList.add('categ');
	option4.classList.add('categ');
	option5.classList.add('categ');
	option6.classList.add('categ');
};

const categoryRemove = async function () {
	option1.classList.remove('categ');
	option2.classList.remove('categ');
	option3.classList.remove('categ');
	option4.classList.remove('categ');
	option5.classList.remove('categ');
	option6.classList.remove('categ');

	await sleep(500);
	options.removeChild(option4);
	options.removeChild(option5);
	options.removeChild(option6);
};

const sleep = function (ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

const selectDifficulty = function () {
	option1.classList.add('diff');
	option2.classList.add('diff');
	option3.classList.add('diff');

	quesTxt.innerHTML = 'Select Difficulty';
	option1.innerHTML = 'Easy';
	option2.innerHTML = 'Medium';
	option3.innerHTML = 'Hard';
	nextBtn.innerHTML = 'Start';
};

const homeFunc = async function () {
	tempQues = quesTxt.innerHTML;
	quesTxt.innerHTML = '';

	option1.classList.add('home');
	option2.classList.add('home');
	option3.classList.add('home');
	nextBtn.classList.add('home');
	checkBtn.classList.add('home');

	await sleep(600);
	option1.classList.add('home2');
	option2.classList.add('home2');
	option3.classList.add('home2');
	options.classList.add('home2');
	nextBtn.classList.add('home2');
	checkBtn.classList.add('home2');
	buttons.classList.add('home2');

	panel.appendChild(homePanel);
	await sleep(300);
	sureTxt.classList.add('move');
	yesBtn.classList.add('move');
	noBtn.classList.add('move');
};

const endAnimation = function () {
	if (score == 0 || score == 1) {
		sadSound.play();
	} else if (score == totalNumOfQues) {
		happySound.play();
	}
};

const removeHome = function () {
	option1.classList.remove('home');
	option2.classList.remove('home');
	option3.classList.remove('home');
	nextBtn.classList.remove('home');
	checkBtn.classList.remove('home');
	option1.classList.remove('home2');
	option2.classList.remove('home2');
	option3.classList.remove('home2');
	options.classList.remove('home2');
	nextBtn.classList.remove('home2');
	checkBtn.classList.remove('home2');
	buttons.classList.remove('home2');
};