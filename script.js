function highlight() {
    //Write your code here
	const strongs = document.querySelectorAll("strong");
	strongs.forEach(strong => {
		strong.style.color = ("green");
	});

}


function return_normal() {
    //Write your code here
	const strongs = document.querySelectorAll("strong");
	strongs.forEach(strong => {
		strong.style.color = ("black");
	});
    
}