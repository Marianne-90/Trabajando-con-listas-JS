listaCompras = ['azucar', 'limones']

listaCompras.push('Aceite de Girasol')

listaCompras.pop()


listaPeliculas = [{
  titulo: 'El corcel indomable',
  director: 'Kelly Asbury, Lorna Cook',
  fecha: new Date(2002, 9, 19)
},
{
  titulo: 'Terror en Silent Hill',
  director: 'Christophe Gans',
  fecha: new Date(2006, 09, 7)
},
{
  titulo: 'Mi vecino Totoro',
  director: 'Hayao Miyazaki',
  fecha: new Date(1988, 3, 16)
}
]


listaPeliculasMilenio = listaPeliculas.filter(peli => peli.fecha.getFullYear() >= 2000)

autoresDePeliculas = listaPeliculas.map(director => director=director.director)

titulosDePeliculas = listaPeliculas.map(titulo => titulo=titulo.titulo)

autoresConTitulos = listaPeliculas.map(lista => lista = lista.titulo.concat(" por ",lista.director))

autoresConTitulosPropaga = listaPeliculas.map(lista => lista = [...titulosDePeliculas,...autoresDePeliculas])

console.log(autoresConTitulosPropaga)