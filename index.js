//Program 1
var date = new Date();
function ageInDays(){
  var birthYear = prompt("What year were you born?");
  if(birthYear==null)
    process.exit(1);
  var age = ((date.getFullYear()-1) - birthYear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode("You are "+age+" days old.");
  h1.setAttribute('id','ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box').appendChild(h1);
}

function reset()
{
  document.getElementById("ageInDays").remove();
}

//Program 2
var count=0;
function generateCat()
{
  if(count==0)
    maindivcreation();
  var image = document.createElement("img");
  image.src = "https://cdn2.thecatapi.com/images/MTc4Mjg4NQ.gif";
  image.setAttribute('id','cat');
  document.getElementById('whole-cat').appendChild(image);
  count++;
}
function maindivcreation()
{
  var maindiv = document.createElement("div");
  maindiv.setAttribute('class','actual-flex');
  maindiv.setAttribute('id','whole-cat');
  document.getElementById('flex-cat-gen').appendChild(maindiv);
}
function resett()
{
  document.getElementById("whole-cat").remove();
  count=0;
}

//Program 3
var flag=0;
function startgame()
{
  if(flag==0)
      document.getElementById('button').remove();
  flag++;
   var div = document.createElement("div");
   div.setAttribute("class","flex-box-rps");
   div.setAttribute("id","flex-box-rps-div");

   var img1 = document.createElement("img");
   img1.setAttribute('id','rock');
   img1.setAttribute('src','img/rock.png');
   img1.setAttribute('height',150);
   img1.setAttribute('width',150);
   img1.setAttribute('onclick','rpsGame(this)');
   div.appendChild(img1);

   var img2 = document.createElement("img");
   img2.setAttribute('id','paper');
   img2.setAttribute('src','img/paper.png');
   img2.setAttribute('height',150);
   img2.setAttribute('width',150);
   img2.setAttribute('onclick','rpsGame(this)');
   div.appendChild(img2);

   var img3 = document.createElement("img");
   img3.setAttribute('id','scissor');
   img3.setAttribute('src','img/scissor.jpg');
   img3.setAttribute('height',150);
   img3.setAttribute('width',150);
   img3.setAttribute('onclick','rpsGame(this)');
   div.appendChild(img3);

   document.getElementById('contain').appendChild(div);
}


function rpsGame(yourChoice)
{
  var human , bot;
  human = yourChoice.id;
  bot = randomchoice();
  var res = decideWinner(human,bot);
  message = finalMessage(res);
  rpsFrontend(human,bot,message);
  tryagain();
}
function randomchoice()
{
  var arr=["rock","paper","scissor"];
  return arr[Math.floor((Math.random() * 3))];
}

function decideWinner(human,bot)
{
  var winner;
  switch(human)
  {
    case "rock":
    {
      if(bot=="rock")
        winner = 0;
      else if(bot=="paper")
        winner = -1;
      else
        winner = 1;
      return winner;
      break;
    }
    case "paper":
    {
      if(bot=="paper")
        winner = 0;
      else if(bot=="rock")
        winner = 1;
      else
        winner = -1;
      return winner;
      break;
    }
    default:
    {
      if(bot=="scissor")
        winner = 0;
      else if(bot=="rock")
        winner = -1;
      else
        winner = 1;
      return winner;
      break
    }
  }
}

function finalMessage(res)
{
  if(res===0)
    return {'message': "You Tied!",'color':"yellow"};
  else if (res===1)
    return {'message':"You Won!",'color':"green"};
  else
    return {'message':"You Lost!",'color':"red"};
}

function rpsFrontend(human,bot,messageto)
{
  var imageData = {
    'rock':document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissor':document.getElementById('scissor').src
    }
    for (var i in imageData)
      document.getElementById(i).remove();

  var humandiv = document.createElement('div');
  humandiv.setAttribute('id','toremove1');
  var messagediv = document.createElement('div');
  messagediv.setAttribute('id','toremove2');
  var botdiv = document.createElement('div');
  botdiv.setAttribute('id','toremove3');

  humandiv.innerHTML = "<img src='"+ imageData[human] +"' height=150,width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>"
  document.getElementById('flex-box-rps-div').appendChild(humandiv);

  messagediv.innerHTML = "<h1 style='color: " + messageto['color'] + "; font-size: 60px; padding: 30px; '>" + messageto['message'] +"</h1";
  document.getElementById('flex-box-rps-div').appendChild(messagediv);

  botdiv.innerHTML = "<img src='"+ imageData[bot] +"' height=150,width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>"
  document.getElementById('flex-box-rps-div').appendChild(botdiv);
}

function tryagain()
{
  var reset = document.createElement("div");
  reset.setAttribute('class','flex-3');
  reset.setAttribute('id','demo');
  var forbutt = document.createElement("div");
  var butt = document.createElement("button");
  butt.setAttribute('class','btn btn-primary');
  butt.setAttribute('onclick','Playagain()');
  butt.innerHTML = "Try again";
  forbutt.appendChild(butt);
  reset.appendChild(forbutt);
  document.getElementById('contain').appendChild(reset);
}
function Playagain()
{
  document.getElementById('demo').remove();
  document.getElementById('toremove1').remove();
  document.getElementById('toremove2').remove();
  document.getElementById('toremove3').remove();
  startgame();
}
