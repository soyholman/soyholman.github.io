
    let H,W,san,{ceil,random,sqrt,sin,cos,atan2,pow,PI,round}=Math,particales=[];

const range=(n,x)=>{return random()*(x-n)+n};

const dist=(p1,p2)=>{return sqrt(pow(p1.x-p2.x,2)+pow(p1.y-p2.y,2))-(p1.r+p2.r)}

const isc=[
{head:"Bootcamp",
body:"Master the basics and prepare for the exciting journey ahead!",
logo:"cat"},
{head:"Verified Account . 10 XP",
 body:"Verify your account's email address",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/abderraman-iii_d91460f4_768x432.png",
colo:"rgb(67,160,71)"},
{head:"New career awaits",
 body:"You can’t learn to code if you don’t know the language. Go on and choose your specialization!",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/abraham-lincoln_89ea12e2_768x432.jpg",
colo:"rgb(72,80,181)"},
{head:"Engaged in!",
 body:"Every successful coder has to start somewhere, and finishing a lesson is a great place to start!",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/adriano_ed9561ed_768x432.jpg",
colo:"rgb(72,80,181)"},
{head:"Good company",
 body:"Completing a module puts you in the great company. If you got this far, finishing the course is within your reach!",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/art-akhenaten-final3-rev-v1-2_db768373_768x432.jpg",
colo:"rgb(72,80,181)"},
{head:"Promising player",
 body:"You Different forms of learning make you more effective and let you recall knowledge. Explore our lessons and try all the Code Coaches to help you learn better.",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/el-mosaico-de-issos-alejandro-magno_1cc1cf47_768x432.jpg",
colo:"rgb(72,80,181)"},
{head:"Fearless",
 body:"There’s no coding without practice. All the theory you just learned prepared you for this moment. Solve your first practice exercise now.",
logo:"https://historia.nationalgeographic.com.es/medio/2018/02/27/amelia-earhart__768x432.jpg",
colo:"rgb(72,80,181)"},
{head:"Where the magic happens",
 body:"Editing real code is what it’s all about. Play with some code in Try It Yourself and then run it!",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/hallazgo-imprevisto-de-una-estatua-de-amenhotep-iii_93a15aa1_768x432.png",
colo:"rgb(72,80,181)"},
{head:"Walk the walk",
 body:"Now that you can talk the talk, can you walk the walk? Prove you are a real coder and solve a Code project.",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/el-terror-de-europa_8376d87e_768x432.jpg",
colo:"rgb(72,80,181)"},
{head:"We’re in this together",
 body:"You’re never alone with SoloLearn. Check out the comments in lessons when you’re stuck or when you want to see more examples.",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/el-terror-de-europa_8376d87e_768x432.jpg",
colo:"rgb(72,80,181)"},
{head:"Practice makes perfect",
 body:"There's no glory in practice, but without practice there can be no glory!",
logo:"cat"},
{head:"Solution Master . 500 XP",
 body:"5 code coach solutions",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/museo-abu-simbel_3777e37a_768x432.jpg",
colo:"rgb(124,179,66)"},
{head:"Solution Ninja . 1000 XP",
 body:"10 code coach solutions",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/la-conquista-de-granada-por-los-reyes-catolicos_ae2c789f_768x432.jpg",
colo:"rgb(3,169,244)"},
{head:"Solution Guru . 5000 XP",
 body:"50 code coach solutions",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/museo-abu-simbel_3777e37a_768x432.jpg",
colo:"rgb(251,192,45)"},
{head:"Achiever . 10 XP",
 body:"Complete a course",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/el-descubrimiento-del-rey-tut_1d6415f3_768x432.jpg",
colo:"rgb(139,195,74)"},
{head:"Hat Trick . 10 XP",
 body:"Complete 3 courses",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/el-descubrimiento-del-rey-tut_1d6415f3_768x432.jpg",
colo:"rgb(0,150,136)"},
{head:"Course Master . 100 XP",
 body:"Complete 10 courses",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/el-descubrimiento-del-rey-tut_1d6415f3_768x432.jpg",
colo:"rgb(67,160,71)"},
{head:"Commenting for the community",
 body:"Good comments lead to great karma. Share your wisdom to help future learners.",
logo:"cat"},
{head:"Good Citizen . 10 XP",
 body:"Leave a comment in a lesson/quiz",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/carlos-i-de-espana_0c5ba686_768x432.jpgg",
colo:"rgb(103,58,183)"},
{head:"Contributor . 25 XP",
 body:"Leave a comment in a lesson/quiz with 5 upvotes",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/charles-darwin_ca853bef_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Comment Master . 50 XP",
 body:"Leave 5 comments in a lesson/quiz with at least 5 upvotes each",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/van-gogh-fue-un-nino-solitario-que-asistio-a-la-escuela-de-manera-muy-irregular-la-abandono-definitivamente-a-los-15-anos_1ae443e1_768x432.jpg " ,
colo:"rgb(200,210,219)"},
{head:"Respected Citizen . 15 XP",
 body:"Reply to a comment in a lesson/quiz and get 5 upvotes",
logo:"https://historia.nationalgeographic.com.es/medio/2018/02/27/otzi-el-hombre-de-hielo__768x432.png",
colo:"rgb(200,210,219)"},
{head:"Rise to the challenge",
 body:"If it doesn't challenge you, it won't change you! Test your skills and experience true growth.",
logo:"cat"},
{head:"Just Getting Started . 20 XP",
 body:"Win a challenge",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/estatuas-de-osiris_9fa4dba4_768x432.jpg",
colo:"rgb(9,78,182)"},
{head:"Master . 100 XP",
 body:"Win 50 challenges using one weapon",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/estatuas-de-osiris_9fa4dba4_768x432.jpg",
colo:"rgb(0,150,136)"},
{head:"Unstoppable . 200 XP",
 body:"Win 100 challenges using one weapon",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/martin-lutero_6ce8a170_768x432.jpg",
colo:"rgb(0,172,193)"},
{head:"Practice Makes Perfect . 350 XP",
 body:"Win 200 challenges using one weapon",
logo:"https://historia.nationalgeographic.com.es/medio/2018/03/17/miguel-angel__768x432.jpg",
colo:"rgb(33,150,243)"},
{head:"Guru . 500 XP",
 body:"Win 500 challenges using one weapon",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/picasso-trabajando-en-el-guernica_ba1b985f_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"On Your Way to Fame . 50 XP",
 body:"Flawless victory in a challenge",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/neron_1c86cb32_768x432.jpg",
colo:"rgb(173,20,87)"},
{head:"Challenge Master . 100 XP",
 body:"5 flawless victories in a row using one weapon",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/william-shakespeare_5ae50985_768x432.jpg",
colo:"rgb(106,27,154)"},
{head:"Rising Star . 100 XP",
 body:"Win 5 challenges in a row using one weapon",
logo:"https://historia.nationalgeographic.com.es/medio/2018/02/27/stephen-hawking__768x432.jpg",
colo:"rgb(76,175,80)"},
{head:"Unbeatable! . 200 XP",
 body:"Win 10 challenges in a row using one weapon",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/0037175-h_29e58575_768x432.jpg",
colo:"rgb(239,108,0)"},
{head:"Epic! . 500 XP",
 body:"Win 50 challenges in a row using one weapon",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/0037175-h_29e58575_768x432.jpg",
colo:"rgb(198,40,40)"},
{head:"Gaining Experience . 100 XP",
 body:"Complete 50 challenges using one weapon",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/0037175-h_29e58575_768x432.jpg",
colo:"rgb(46,125,50)"},
{head:"The Player . 200 XP",
 body:"Complete 100 challenges using one weapon",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/estatua-ecuestre_9bb5ddcc_768x432.jpg",
colo:"rgb(191,54,12)"},
{head:"Respect! . 400 XP",
 body:"Complete 500 challenges using one weapon",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/estatua-ecuestre_9bb5ddcc_768x432.jpg",
colo:"rgb(255,193,7)"},
{head:"Ask away",
 body:"There are no wrong questions! So stay curious, ask questions and keep moving forward.",
logo:"cat"},
{head:"Asker . 10 XP",
 body:"Post a question and get an upvote",
logo:"https://historia.nationalgeographic.com.es/medio/2018/02/27/stephen-hawking__768x432.jpg",
colo:"rgb(3,169,244)"},
{head:"Good Question . 20 XP",
 body:"Get 5 upvotes on your question",
logo:"https://historia.nationalgeographic.com.es/medio/2018/02/27/aristoteles-filosofo-griego-grabado-de-la-biblioteca-nacional-madrid__768x432.jpg",
colo:"rgb(2,136,209)"},
{head:"Great Question . 30 XP",
 body:"Get 10 upvotes on your question",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/juan-calvino-1509-1564-reformador-frances-grabado-biblioteca-nacional-madrid_da3c047b_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Top Question . 50 XP",
 body:"Get 50 upvotes on your question",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/juan-calvino-1509-1564-reformador-frances-grabado-biblioteca-nacional-madrid_da3c047b_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Popular Question . 100 XP",
 body:"Get 100 upvotes on your question",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/juan-calvino-1509-1564-reformador-frances-grabado-biblioteca-nacional-madrid_da3c047b_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Question Master . 100 XP",
 body:"Post 5 questions with at least 5 upvotes each",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/juan-calvino-1509-1564-reformador-frances-grabado-biblioteca-nacional-madrid_da3c047b_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Question Ninja . 150 XP",
 body:"Post 10 questions with at least 5 upvotes each",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/juan-calvino-1509-1564-reformador-frances-grabado-biblioteca-nacional-madrid_da3c047b_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Question Guru . 500 XP",
 body:"Post 50 questions with at least 5 upvotes each",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/juan-calvino-1509-1564-reformador-frances-grabado-biblioteca-nacional-madrid_da3c047b_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Post your work",
 body:"There is no failure, only feedback! Share your code to inspire others and get feedback from the community.",
logo:"cat"},
{head:"Intern . 25 XP",
 body:"Post a code and get an upvote",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/juan-calvino-1509-1564-reformador-frances-grabado-biblioteca-nacional-madrid_da3c047b_768x432.jpg",
colo:"rgb(66,165,245)"},
{head:"Junior . 50 XP",
 body:"Get 5 upvotes on your code",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/museo-abu-simbel_3777e37a_768x432.jpg",
colo:"rgb(30,136,229)"},
{head:"Developer . 200 XP",
 body:"Get 10 upvotes on your code",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/museo-abu-simbel_3777e37a_768x432.jpg",
colo:"rgb(21,101,192)"},
{head:"Senior Developer . 500 XP",
 body:"Get 50 upvotes on your code",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/museo-abu-simbel_3777e37a_768x432.jpg",
colo:"rgb(26,35,126)"},
{head:"Coder . 250 XP",
 body:"Post 5 codes with at least 5 upvotes each",
logo:"https://historia.nationalgeographic.com.es/medio/2018/02/27/anibal-general-cartagines-grabado-biblioteca-nacional-madrid__768x432.jpg",
colo:"rgb(171,71,188)"},
{head:"Code Master . 500 XP",
 body:"Post 10 codes with at least 5 upvotes eac",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/tumba-de-anfipolis_61f3df3f_768x432.jpg",
colo:"rgb(142,36,170)"},
{head:"Code Ninja . 1000 XP",
 body:"Post 50 codes with at least 5 upvotes each",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/137-caligula-3_f2471a06_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"You have the answers",
 body:"We rise by lifting others! Answer questions, share your knowledge and help others grow.",
logo:"cat"},
{head:"Answerer . 10 XP",
 body:"Post an answer and get an upvote",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/carlomagno_4f10e41e_768x432.jpg",
colo:"rgb(156,204,101)"},
{head:"Good Answer . 20 XP",
 body:"Get 5 upvotes on your answer",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/carlos-i-de-espana_0c5ba686_768x432.jpg",
colo:"rgb(124,179,66)"},
{head:"Great Answer . 50 XP",
 body:"Get 10 upvotes on your answer",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/15-retrato-cristina-borbon-disolucion-inquisicion_909df752_768x432.jpg",
colo:"rgb(85,139,47)"},
{head:"Top Answer . 100 XP",
 body:"Get 50 upvotes on your answer",
logo:"https://historia.nationalgeographic.com.es/medio/2018/02/27/el-greco__768x432.JPG",
colo:"rgb(200,210,219)"},
{head:"Popular Answer . 100 XP",
 body:"Get 100 upvotes on your answer",
logo:"https://historia.nationalgeographic.com.es/medio/2018/03/17/einstein__768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Teacher . 500 XP",
 body:"Post 10 answers with at least 5 upvotes each",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/fernando-vii_39d07cdb_768x432.jpg",
colo:"rgb(38,166,154)"},
{head:"Illuminator . 1000 XP",
 body:"Post 50 answers with at least 5 upvotes each",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/gengis-kan_1dcb87fe_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Self-Learner . 100 XP",
 body:"Answer your own question and get 5 upvotes",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/gengis-kan_1dcb87fe_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Most valuable player",
 body:"Your work makes the things better for eveyone, and we're super grateful for your help!",
logo:"cat"},
{head:"Certified Tester . 2000 XP",
 body:"Exclusive badge handed out by SoloLearn team for valuable suggestions and major bug reports.",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/galileo-galilei_73a328b8_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Quiz Reviewer . 1000 XP",
 body:"Exclusive badge, handed out to community members who moderate user-generated quizzes.",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/142-hipatia-1_3bfed419_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Gold Quiz Reviewer . 5000 XP",
 body:"Exclusive badge, handed out to experienced Quiz Reviewers who show expertise in moderation of user-generated quizzes.",
logo:"https://historia.nationalgeographic.com.es/medio/2018/02/27/antoni-gaudi__768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Moderator . 1000 XP",
 body:"Awarded to members who have been selected by our moderation team to help moderate community content.",
logo:"https://historia.nationalgeographic.com.es/medio/2019/05/03/adolf-hitler_8074b4e9_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Gold Moderator . 5000 XP",
 body:"Awarded to select Moderators who show expertise in moderation and are ready for the next level of responsibilities.",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/luis-xiv-rey-de-francia-apodado-el-rey-sol_a25c5dbe_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Platinum Moderator . 10000 XP",
 body:"Awarded to experienced moderators who are ready to recruit and train new moderators and curate community content.",
logo:"https://historia.nationalgeographic.com.es/medio/2020/04/17/busto-stalin_a720ce9a_768x432.jpg",
colo:"rgb(200,210,219)"},
{head:"Veteran collector",
 body:"There's no success without commitment. Only an elite few will ever have these badges, because they're no longer available to earn.",
logo:"cat"},
{head:"Solver . 100 XP",
 body:"Solve a code coach problem",
logo:"https://historia.nationalgeographic.com.es/medio/2019/12/11/van-gogh-fue-un-nino-solitario-que-asistio-a-la-escuela-de-manera-muy-irregular-la-abandono-definitivamente-a-los-15-anos_1ae443e1_768x432.jpg",
colo:"rgb(239,108,0)"},
{head:"",
 body:"<center>If you like don't forget to upvote</center>",
logo:"cat"},
]

const Img=(x,y,s,sr)=>{
    img=new Image();
    img.src=sr;
    san.save(); 
    san.beginPath(); 
    san.arc(x,y,s,0,44/7);     
    san.closePath();
    san.clip();
    san.drawImage(img,x-s,y-s,s*2,s*2);
    san.beginPath();
    san.arc(x,y,s,0,44/7);
    san.clip(); 
    san.closePath(); 
    san.restore();
}

class Particale{
    constructor(x,y,r,v,c,sr){      
      this.x=x;
      this.y=y;
      this.r=r;
      this.c=c;
      this.v=v;
      this.m=PI*pow(this.r,2);
      this.u=true;
      this.sr=sr;
      
      }
      draw(){
          this.x+=this.v.x;
          this.y+=this.v.y;
          if(this.x+this.r>W||this.x-this.r<0){
              this.v.x=-this.v.x;
          };
          if(this.y+this.r>H||this.y-this.r<0){
              this.v.y=-this.v.y;
          };
          san.beginPath();
          san.arc(this.x,this.y,this.r,0,44/7);
          san.fillStyle=this.c;san.fill();
          san.closePath();
          Img(this.x,this.y,this.r,this.sr)
     }
}

const Cr=(a,b)=>{
    let vdx = a.v.x-b.v.x,vdy = a.v.y-b.v.y;
    let dx=b.x-a.x,dy=b.y-a.y;
    if(dx*vdx+dy*vdy>=0){
        let A = -Math.atan2(a.y-b.y,a.x-b.x);
        let u1 = {
            x:a.v.x*cos(A)-a.v.y*sin(A),
            y:a.v.x*sin(A)+a.v.y*cos(A)
        }  
        let u2 = {
            x:b.v.x*cos(A)-b.v.y*sin(A),
            y:b.v.x*sin(A)+b.v.y*cos(A)
        }  
        let v1 = {
            x:((a.m*u1.x)+(b.m*u2.x)+(b.m*(u2.x-u1.x)))/(a.m+b.m),y: u1.y
        };
        let v2 = {
        x:((a.m*u1.x)+(b.m*u2.x)+(a.m*(u1.x-u2.x)))/(a.m+b.m),y: u2.y
        };
        let vo1 = {
            x: v1.x*cos(-A)-v1.y*sin(-A),
            y: v1.x*sin(-A)+v1.y*cos(-A)
        }
        let vo2 = {
            x: v2.x*cos(-A)-v2.y*sin(-A),
            y: v2.x*sin(-A)+v2.y*cos(-A)
        }
    return [vo1,vo2]}else{return false}
}


const Loop=()=>{
    san.clearRect(0,0,W,H);    
    particales.forEach((v,i)=>{
        v.draw();  
        particales.forEach((d,j)=>{
            if(i!=j){
                if(dist(v,d)<=0){
                    var cr= Cr(v,d);
                    if(cr){
                        v.v = cr[0];
                        d.v = cr[1];
                    }
                }
            }
    
        })   
    })
    requestAnimationFrame(Loop);    
}
const init=()=>{
  
    let c=document.createElement("canvas");
    document.body.appendChild(c);
    c.style.position="fixed"
    c.style.background="black"
    c.style.width="100vw",c.style.height="100vh";
    H=innerHeight*2,W=innerWidth*2;
    c.height=H,c.width=W;
    san=c.getContext('2d');
    //  Increse canvas DPI
    let dh=+getComputedStyle(c).height.slice(0,-2);
    let dw=+getComputedStyle(c).width.slice(0,-2);
    c.setAttribute('height',dh*2);
    c.setAttribute('width',dw*2);  
    for(var i=0;i<W/150;i++){
        for(var j=0;j<H/150;j++){
            particales.push(new Particale(
                100+80*(i+1),
                200+80*(j+1),
                range(40,40),
                {x:range(-4,4),y:range(-4,4)},
                "hsl("+range(0,360)+",100%,50%)",
                isc[round(range(0,isc.length-1))].logo
                )         
            )
        }
    };
    Loop();
};
onload=init;
