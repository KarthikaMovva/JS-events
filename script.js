//Challenge 1//

function changeTitle(){
    document.getElementById("user").innerHTML = "Karthika";
  }
  window.addEventListener("load",changeTitle);
  
  //Challenge 2// 
  
  function changeButtoncolor(){
    document.getElementById("btn-click").style.backgroundColor = "green";
  }
  document.getElementById("btn-click").onclick = changeButtoncolor;
  
  //Challenge 3//
  
  function makeSentence(){
    const no = document.getElementById("noun").value;
    const ve = document.getElementById("verb").value;
    const ad = document.getElementById("adverb").value;
    const se = no + " "+ve +" "+ad;
    const d = document.getElementById("statement");
    d.innerHTML = se;
  }
  const bo = document.getElementById("build-button");
  bo.addEventListener("click",makeSentence);
  
  //challenge 4.1//
  
  const gr = document.getElementById("grandparent");
  const pa = document.getElementById("parent");
  const ch = document.getElementById("child");
  ch.addEventListener("click",function(){
    console.log("Child clicked")
  })
  pa.addEventListener("click",function(){
    console.log("Parent clicked")
  })
  gr.addEventListener("click",function(){
    console.log("Grandparent clicked")
  })
  
  //Challenge 4.2//
  
  ch.addEventListener("click",function(){
    console.log("Child clicked")
  },true)
  pa.addEventListener("click",function(){
    console.log("Parent clicked")
  },true)
  gr.addEventListener("click",function(){
    console.log("Grandparent clicked")
  },true)
  
  //Challenge 5//
  
  var ulc = document.getElementById("category");
  
  ulc.addEventListener("click",(e)=>{
    console.log(e.target.id)
  })