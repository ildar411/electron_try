import BOT from ('./productVersion');
var a = document.getElementById('ok');
      a.onclick = function (){
        var text = document.getElementById('text').value;
        var groupId = document.getElementById('id').value;
        if(groupId){
          BOT(text, groupId);
        }
        else{
          BOT(text);
        };
        
      };