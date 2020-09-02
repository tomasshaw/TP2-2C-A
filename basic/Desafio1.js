const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

const argv = process.argv[2]
argv ||
	console.info('---------------------------------------\nSe puede usar un argumento al correr este script.\nValores aceptados: Redux || Flexbox\n---------------------------------------\n')
if (argv !== 'Redux' && argv !== 'Flexbox' && argv !== undefined) {
	console.error('Parametro invalido')
	return
}

const buscar = argv || 'Redux'
const ReduxArray = []
str.split('\n').map(line => {
	const matched = line.match(buscar)
	matched && ReduxArray.push(matched.input)
})

let totTime = 0
ReduxArray.map(e => {
	const time = e.split('"')[1].split(':')
	totTime += time[0]*60 + time[1]*1
})

console.log(`El total de segundos de ${buscar} es: ${totTime}`)

// obtener el total de segundos de todos los videos del tipo 'Redux Video'
// pistas: convertirlo en objetos
// Vale por el primer parcial
// Fecha de entrega: Domingo 30 AGO 23:59
// Fecha de solucio: Miercoles 2 de SEP

// Modalidad de entrega. Pull Request.
