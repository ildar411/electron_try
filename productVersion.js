const bot = require('easyvk');

// status = 1 не замужем 2 встречается 3 помолвен 4 замужем 5 все сложно 6 в активном поиске 7 влюблен 8 в гражданском браке
function BOT(text,...group_id){
    bot({
        username : '89883130005',
        password : 'zxcvbnm005',
        session_file: __dirname + '/.my-session'
    }).then(async vk => {
        
        var hi = ['Привет ', 'Приветик ', 'Салют ', 'Шалом ', 'Бонжур '];
        function myRandom(){
            return Math.floor(Math.random()*4)
        };
            let resultTeam  = await vk.call('users.search', {
                sex: 1,
                age_from: 20,
                age_to: 24,
                has_photo: 1,
                count: 1000,
                group_id: group_id,
                online: 1,
                hometown: 'Краснодар',
            });
            //console.log(resultTeam.vkr.items);
            var ids = [];
            var prom = new Promise((res, rej) =>{
                //console.log(resultTeam);
                resultTeam.vkr.items.forEach((item, i, arr) => {    
                    //console.log(item.id);
                    ids.push(item.id);    
                                
                    })
                    //console.log(ids);
                res(ids)

            }).then(async (ids) => {
                for(let i=ids.length-1; i >= 0; i--){
                        var now  = new Date().getTime();
                        //console.log(ids[i]);
                        //console.log('*************');
                        var a = ids[i];    
                        while(new Date().getTime() < now + 1000)
                        {
                            
                        }
                        //await function(a) {
                        let res = await vk.call('friends.areFriends', {
                            user_ids: a,
                            need_sign: 1, 
                        })
                        console.log(res);
                        if(res.vkr[0].friend_status == 0){
                            var promFriend = await vk.call('friends.add', {
                                user_id: a,
                                text: hi[myRandom()] + text,
                            })
                            now = new Date().getTime();
                            while(new Date().getTime() < now + 1000)
                            {          
                        
                            }
                            
                            }
                
                        console.log(promFriend);
                        //.catch(error => {
                          //  console.log(error);
                        //})
                    //}
                }
                    });
            })
                           
        
    
            //console.log('*************');
        

};
module.exports = BOT;

