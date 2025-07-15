const questions = document.getElementsByClassName('question');
const descriptions = document.getElementsByClassName('description'); 
var question_box = document.getElementsByClassName('soustitre');
var icones = document.getElementsByClassName('imagetext'); 


for ( i=0; i<questions.length; i++) {
    let question_content = questions[i]
    let question_box_content = question_box[i]
    let description_content = descriptions[i]
    let icone = icones[i]

    question_content.addEventListener('mouseover',ChangeColor);
    question_box_content.addEventListener('mouseover',ChangeColor);
    question_box_content.addEventListener('mouseover',ChangeColorBox);

    question_content.addEventListener('mouseout',ResetColor); 
    question_box_content.addEventListener('mouseout',ResetColor);
    question_box_content.addEventListener('mouseout',ResetColorBox);
    
    question_box_content.addEventListener('click',ShowDescription);

    function ChangeColor() { this.style.color = 'hsla(293, 69%, 56%, 1.00)';}

    function ChangeColorBox() {
        this.style.backgroundColor = '#f1f2f3';
        this.style.boxShadow = '0 4px 4px 8px rgba(243, 240, 240, 0.3)';
    }

    function ResetColor() { this.style.color = '';}

    function ResetColorBox() {
        this.style.backgroundColor = '';
        this.style.boxShadow = '';
    }

    function ShowDescription() {
        if(description_content.style.display === 'none' || description_content.style.display === '' ){
            description_content.style.display = 'block';
            icone.src = './assets/images/icon-minus.svg';
            question_content.style.fontWeight = '300';
        }
        else {
            description_content.style.display = 'none';
            icone.src = './assets/images/icon-plus.svg';
            question_content.style.fontWeight = '';
        }
    }

}



    


 
