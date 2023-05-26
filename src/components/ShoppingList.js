import { plantList } from '../datas/plantList'

// //first method with foreach and Set
// let categories = [];
// plantList.forEach(plant => {
// 	categories.push(plant.category)
// });
// categories = [...new Set(categories)];

// //second method with foreach and includes
// let categories = [];
// plantList.forEach(plant => {
// 	if (!categories.includes(plant.category)) {
// 		categories.push(plant.category)
// 	}
// });
// plantList.forEach(plant => {
// 	categories.includes(plant.category) ? null : categories.push(plant.category)
// });


// // third method with map and Set
// let categories = [...new Set(plantList.map(plant => plant.category))];

// fourth method with reduce and Set
let categories = plantList.reduce((acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []);


function ShoppingList() {
	return (
		<>
			<ul>
				{categories.map((cat, index) => (
					<li key={`${cat}-${index}`}>{cat}</li>
				))}
			</ul>
			<ul>
		{plantList.map((plant, index) => (
			<li key={plant.id}>{plant.name}</li>
		))}
	</ul>
		</>

	)
}

export default ShoppingList
