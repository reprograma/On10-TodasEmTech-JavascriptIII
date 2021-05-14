// -[Exercício 02](https: //www.urionlinejudge.com.br/judge/pt/problems/view/1049)

x = ''
y = ''
z = ''

if (x == 'vertebrado'  || y == 'ave' || z == 'carnivoro'){
    console.log = ('aguia')
} else if (x == 'vertebrado' || y == 'ave' || z == 'onivoro')  {
  console.log('pomba')
} else {
  console.log('nada')
}

/* if :
    a = 'pomba'

if x == 'vertebrado' and y == 'mamifero' and z == 'onivoro':
    a = 'homem'

if x == 'vertebrado' and y == 'mamifero' and z == 'herbivoro':
    a = 'vaca'

if x == 'invertebrado' and y == 'inseto' and z == 'hematofago':
    a = 'pulga'

if x == 'invertebrado' and y == 'inseto' and z == 'herbivoro':
    a = 'lagarta'

if x == 'invertebrado' and y == 'anelideo' and z == 'hematofago':
    a = 'sanguessuga'

if x == 'invertebrado' and y == 'anelideo' and z == 'onivoro':
    a = 'minhoca'

print(a)





/* 

if (animal == 'vertebrado' || 'ave' || 'carnivoro') {
  console.log("aguia")
}
/* else if ( animal == 'vertebrado' || 'ave' || 'onivoro') {
  console.log("pomba")
} */ .


let arvore = {
    "vertebrado": {
      "ave": {
        "carnivoro": "aguia",
        "onivoro": "pomba"
      },
      "mamifero": {
        "onivoro": "homem",
        "herbivoro": "vaca"
      }
    },
    "invertebrado": {
      "inseto": {
        "hematofago": "pulga",
        "herbivoro": "lagarta"
      },
      "anelideo": {
        "hematofago": "sanguessuga",
        "onivoro": "minhoca"
      }
    }
  }