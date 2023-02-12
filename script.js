var score = 0;

function change_text(){
  console.log("done");
    document.getElementById("h10").innerHTML = ("Your score: " + score);
    if(score < 0) {
      document.getElementById("interpret").innerHTML = ("Think about your needs versus wants, and take another look at your expenses to determine where you may be able to cut.");
    }else if(score==0) {
      document.getElementById("interpret").innerHTML = ("Congratulations, you have a balanced budget!");
    } else {
      document.getElementById("interpret").innerHTML = ("Great news; you’re covering all your savings and expenses with your current income! With cash left over, consider saving even more toward your goals or paying down debts, if you have them.");
    }
}

function planResults() {
  console.log('planning results')
  var parents = parseInt(document.getElementById("parent").value);
  var job = parseInt(document.getElementById("jobs").value);
  var emergency = parseInt(document.getElementById("emergency").value);
  var medical = parseInt(document.getElementById("medical").value);
  var scholarship = parseInt(document.getElementById("scholarship").value);
  var savings = parseInt(document.getElementById("savings").value);
  var tech = parseInt(document.getElementById("tech").value);
  var school = parseInt(document.getElementById("school").value);
  var food = parseInt(document.getElementById("food").value)
  var housing = parseInt(document.getElementById("housing").value); 
  var clothes = parseInt(document.getElementById("clothes").value);
  var recreation = parseInt(document.getElementById("recreation").value);
  
  var income = parents + job;
  var savings = emergency + medical + savings;
  var expenses = tech + school + food + housing + clothes + recreation;
  score = income - savings - expenses;
  change_text();
}
