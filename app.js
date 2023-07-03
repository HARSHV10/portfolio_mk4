// the description for the 
const text =`hey there \n i am harsh a sophomore and a compouter phile and have a keen interest in the feild of the  `


$("#aboutme").html(text);

var skill ='';

const skl=["C/Cpp",
"React",
           "Node",
           "Express",
           "MongoDb",
           "SQL",
"Python",
"Javascript",
"Jquery",
"Html/Hmtl3",
"css/css3",
]
ok=`s`;
const html_data=// using the foreach function for the same 

skl.forEach(function(item,index){
    ok=item;
    skill+=`<h1 class="skld" data-aos="fade-right" data-aos-duration="1000">  <div class="skill-bg" ><span class="arrow"> -></span> ${item}</div></h1> `
    ;
})
$(".skilldat").html(skill);

