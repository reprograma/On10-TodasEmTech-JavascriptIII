let ani1 = prompt("Digite a primeira caracteristica do animal: ");
let ani2 = prompt("Digite a segunda caracteristica do animal: ");
let ani3 = prompt("Digite a terceira caracteristica do animal: ");

console.log(ani1,ani2, ani3);

switch(ani1){
    case 'vertebrado':
        switch (ani2){
            case 'ave':
                switch (ani3){
                    case 'carnivoro':
                        alert('aguia');
                        break;
                    case 'onivoro':
                        alert('pomba');
                        break;
                }
                break;
            case 'mamifero': 
                switch (ani3){
                    case 'onivoro':
                        alert('homem');
                        break;
                    case 'herbivoro':
                        alert('vaca');
                        break;
            }
            break;
        }
        break;
    case 'invertebrado':
        switch (ani2){
            case 'inseto':
                switch (ani3){
                    case 'hematofago':
                        alert('pulga');
                        break;
                    case 'herbivoro':
                        alert('lagarta');
                        break;
                }
                break;
            case 'anelideo': 
                switch (ani3){
                    case 'hematofago':
                        alert('sanguessuga');
                        break;
                    case 'onivoro':
                        alert('minhoca');
                        break;
            }
            break;
        }
        break;
}