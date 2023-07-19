function summer(){
    document.getElementById("season").src="data:image/jpeg;base64,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";
}
function winter(){
    document.getElementById("season").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGvzgVZTQsph7AV47quGavqpzym_w2DynnA&usqp=CAU";}
function rainy(){
    document.getElementById("season").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyH_kRVvkLNzSX7JAkYZsDmc8erQzy1jVktA&usqp=CAU";}