var boxBackWelcome = document.getElementById("boxBackWelcome");
        var boxWelcome = document.getElementById("boxWelcome");      
        
        var msgList = ["Bem-vindo ao site do Rafael"];
        msgList.push('Acesse o <a href="https://github.com/RafaelHipolit/projectSubarashii">codigo do site</a>');
        msgList.push("Estamos sempre em atualizações!");

        var atualMsg = 0;
        var txt = document.getElementById("boxWelcomeTxt");

        var btnNext = document.getElementById("boxWelcome-btnNext");
        var btnBack = document.getElementById("boxWelcome-btnBack");

        setDots();
        shinyDot(0);

        txt.innerText = msgList[0];
        btnBackDontWork();

        btnNext.addEventListener("click",clickNext);
        function clickNext(){
            atualMsg++;
            funcBtn();
            
        }
       
        btnBack.addEventListener("click",clickBack);
        function clickBack(){
            if(atualMsg != 0){
                atualMsg--;
                funcBtn();
            }                      
        }

        function setDots(){
            num = msgList.length;
            var lenghtDot = (Number(document.getElementById("boxWelcomeDots").offsetWidth)/num)-(3*num);            
   
            for (let i = 0; i < num; i++) {

                var dot = document.createElement("div");

                dot.classList = "dots"
                dot.style.width = lenghtDot+"px";
                
                document.getElementById("boxWelcomeDots").appendChild(dot);
            }

        }

        function shinyDot(n){
            num = msgList.length;
            var dot = document.getElementsByClassName("dots")[n];
            dot.style.backgroundColor = "#2700ff";
            for (let i = 0; i < num; i++) {
                if(i != n){
                    dot = document.getElementsByClassName("dots")[i];
                    dot.style.backgroundColor = "rgba(95, 207, 235, 0.644)";
                }
            }
        }

        function funcBtn(){
            if(atualMsg == msgList.length){
                boxBackWelcome.style.display = "none";
                return none;
            }
            if(atualMsg == 0){
                btnBackDontWork();
            }else{
                btnBackWork();
            }
            for (let i = 0; i < msgList.length; i++) {
                if(atualMsg == i){
                    txt.innerHTML = msgList[i];
                    shinyDot(i);
                }
            }
        }

        function btnBackWork(){
            btnBack.classList = "btnBackWork";
            btnBack.style.cursor ="pointer";
        }

        function btnBackDontWork(){
            btnBack.classList = "btnBackDontWork"
            btnBack.style.cursor ="auto";
        }