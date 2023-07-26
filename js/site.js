function getValues() {

    let userString = document.getElementById('userString').value;

    let revString = checkForPalindrome(userString);

    let answers = displayResults(revString)

    displayResults(answers);
}

function checkForPalindrome(input) {

    input = input.replace(/[^a-zA-Z0-9]/g, '');

    let revString = '';

    for (let index = input.length - 1; index >= 0; index = index - 1) {

        let letter = input[index];

        revString = revString + letter;
    }

    let answers = []

    if (revString == input) {
        
        answers.push(true)
        answers.push(revString)

    } else {

        answers.push(false)
        answers.push(revString)

    }

    return answers;
}

function displayResults(answers) {

    let isPal = answers[0]
    let reStr = answers[1]

    if (isPal == true) {

        document.getElementById('resultsY').textContent = reStr;

        let alertBox = document.getElementById('alertYes');

         alertBox.classList.remove('invisible');

    } else {

        document.getElementById('resultsN').textContent = reStr;

        let alertBox = document.getElementById('alertNo');

         alertBox.classList.remove('invisible');

    }

}

