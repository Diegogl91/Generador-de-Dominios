let pronoun = ['the','our','My'];
  let adj = ['great', 'big','coolest'];
  let noun = ['jogger','racoon','website'];
  let dom = ['.com','.net','.cl'];

  function generadorDominio(parte1, parte2, parte3, parte4){

    for(let a=0; a<parte1.length; a++){
        for(let b=0; b<parte2.length; b++){
            for(let c=0; c<parte3.length; c++){
                for(let d=0;d<parte4.length;d++){
                nuevoDom = parte1[a] + parte2[b] + parte3[c] + parte4[d];
                console.log(nuevoDom);
                }
                
            }
        } 
    }
}
 generadorDominio(pronoun,adj,noun,dom);