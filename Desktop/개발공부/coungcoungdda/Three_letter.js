const number= Number(prompt ("how many player will play?"));
const $input = document.querySelector('input'); 
const $button=document.querySelector('button'); 
const $word=document.querySelector('#word');
const $order=document.querySelector('#order');

let word;
let newWord;

const onClick = () =>{
    const letter = $input.value; 
    if (letter.length !== 3) {
        alert("Please enter three letter to proceed with the game");
    } else {//세글자 단어가 입력된 경우 게임을 계속 진행하는 로직 추가 
        if (!word) { //제시어가 비어있다면, 
            word=newWord;
            $word.textContent =word;
            let order = Number($order.textContent);
                if (order+1>number) {
                    $order.textContent=1;
                }else{
                    $order.textContent=order+1;
                }
                $input.value='';
                $input.focus();
        } else {// 제시어가 비어있지 않다면, 
            //1)세글자인지 판단 
            if (letter.length !== 3) {
                alert("Please enter three letter to proceed with the game");
            }else {
            //2)맞는 단어인지 판단 후, (끝글자-첫글자 맞는지 판단)-> 순서 넘겨주기 
            if(word[word.length-1]===newWord[0]) {
                word=newWord;
                $word.textContent=word;
                let order = Number($order.textContent);
                if (order+1>number) {
                    $order.textContent=1;
                }else{
                    $order.textContent=order+1;
                }
                $input.value='';
                $input.focus();
            }else {
                alert("please try again !");
            }
        
        
        
        
        
        }
            
            
            
            
            
            

        }

    }

}


const inputWord =(event) => {
  newWord=event.target.value;
}; 
 
$input.addEventListener('input',inputWord);
$button.addEventListener('click',onClick)

