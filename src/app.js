import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const ext = [".com", ".net", ".us", ".io"];

  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++){
      for (let adjIndex = 0; adjIndex < adj.length; adjIndex++){
        for (let nounIndex = 0; nounIndex < noun.length; nounIndex++){
          for (let extIndex = 0; extIndex < ext.length; extIndex++){
            console.log(pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + ext[extIndex])
          }
        }
      }
  }






};
