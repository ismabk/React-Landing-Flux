
import React from "react";

import CardItem from "./Components/CardItem.jsx";

const Cards = () => {
	return (
		<>
			<div className="bg-second">
				<div className="row w-75 m-auto">
					<CardItem
						imgCard={
							"https://phantom-marca.unidadeditorial.es/b0d578821ad7d9411bac00712a0806a5/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/07/16362788730274.jpg"
						}
						altImg={"Derbi Sevillano"}
						titleCard={"Derbi Sevillano"}
						bodyCard={
							"Partido entre el Sevilla y el Betis que se decanta para el equipo local tras la expulsion de Guido."
						}></CardItem>
					<CardItem
						imgCard={
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57lb6u5kQQFd4k6S3h1w1aV-SgslDkzoSKg&usqp=CAU"
						}
						altImg={"El clasico"}
						titleCard={"El Clasico Aburre"}
						bodyCard={
							"Sin Messi ni CR7 el clasico pierde su magia. Ahora parece más un partido de regional."
						}></CardItem>
					<CardItem
						imgCard={
							"https://assets-es.imgfoot.com/media/cache/642x382/psg-city-6089290a21f55.jpg"
						}
						altImg={"Psg vs Man city"}
						titleCard={"Duelo de Jeques"}
						bodyCard={
							"Duelo de millones en este partido de champions que promete ser muy interesante. Ambos van con todo."
						}></CardItem>
					<CardItem
						imgCard={
							"https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/14/thumb_13735_default_news_size_5.jpeg"
						}
						altImg={"Liverpol vs Man United"}
						titleCard={"CR7 vs Salah"}
						bodyCard={
							"Partido de titanes en el cual el crack	portugues busca el liderato frente a un gran Liverpool."
						}></CardItem>
					<CardItem
						imgCard={
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnQcD_sYhSlnsyBqi5nliMQ-tum27QzI7Mw&usqp=CAU"
						}
						altImg={"Derbi Aleman"}
						titleCard={"Derbi Aleman"}
						bodyCard={
							"Partidazo en la Bundesliga en el que Haland y Levandowski luchan por el pichichi."
						}></CardItem>
					<CardItem
						imgCard={
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSys7HkRldtFeU7HojiJyOPnR67UIZKB8iA&usqp=CAU"
						}
						altImg={"Luis Enrique"}
						titleCard={"Luis en el Punto de Mira"}
						bodyCard={
							"Luis Enrique de nuevo señalado tras la lista de convocados para los partidos de España."
						}></CardItem>
				</div>
			</div>
		</>
	);
};

export default Cards;
