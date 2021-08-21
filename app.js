const quizDB =[
 
    {
        question:    "Q1:The correct sequence of HTML tags for starting a webpage is -",
    
    a:"Head, Title, HTML, body",
    b:"HTML, Body, Title, Head",
    c:"HTML, Head, Title, Body",
    d:"HTML, Head, Title, Body",
    ans:"ans3"
        },
        {
            question:    " Q 2: HTML stands for",
        
        a:"HighText Machine Language",
        b:"HyperText and links Markup Language",
        c:"HyperText Markup Language",
        d:"None of these",
        ans:"ans3"
            },
            {
                question:    "Q3:How to create a hyperlink in HTML?",
            
            a:"<a href = www.javatpoint.com> javaTpoint.com </a>",
            b:"<a url = www.javatpoint.com javaTpoint.com /a>",
            c:"<a link = www.javatpoint.com> javaTpoint.com </a>",
            d:"<a> www.javatpoint.com <javaTpoint.com /a>",
            ans:"ans1"
                },
                {
                    question:    "Q4: <input> is ",
                
                a:"a format tag.",
                b:"an empty tag",
                c:"All of the above",
                d:"None of the above",
                ans:"ans2"
                    },
]
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
 
const answers = document.querySelectorAll('.answer')
const showScore=document.querySelector('#showScore')
let questionCount = 0;
let score = 0;

const loadQuestion = ( ) => {
    const questionList = quizDB[questionCount]
     question.innerHTML = questionList.question;
     option1.innerText = questionList.a
     option2.innerText = questionList.b
     option3.innerText = questionList.c
     option4.innerText = questionList.d
}
loadQuestion();
const getCheckAnswer = () => {
let answer;
  
    answers.forEach((currentElem)  => {
        if(currentElem.checked){
            answer = currentElem.id;
        }
   
    });
    return answer;
 
   

}

 


submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans ) {
        score++;
    };
    questionCount++;
    if (questionCount< quizDB.length) {
        loadQuestion();
    }
    else{
            showScore.innerHTML= `
            <h3> YOUR SCORE IS ${score}/${quizDB.length} </h3>

            <button class = "btn" onclick = "location.reload()">Play Again </button>
            `;
            showScore.classList.remove('scoreArea')  
    }
})