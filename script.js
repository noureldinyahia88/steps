let progress = document.getElementById('progress')
let nextBtn = document.getElementById('next')
let preBtn = document.getElementById('prev')
let circles = document.querySelectorAll('.circle')

let circleCount = 1

nextBtn.addEventListener('click',()=>{
	circleCount++
	if(circleCount>circles.length){
		circleCount=circles.length
	}
	update()
})

preBtn.addEventListener('click',()=>{
	circleCount--

	if(circleCount<1){
		circleCount=1
	}

	update()
})



function update() {
	circles.forEach((circle, idx)=>{
		if(idx<circleCount){
			circle.classList.add('active')
		} else {
			circle.classList.remove('active')
		}
	})

	const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

if(circleCount === 1){
	preBtn.classList.add('disable')
	nextBtn.classList.remove('disable')
} else if (circleCount === circles.length) {
	preBtn.classList.remove('disable')
	nextBtn.classList.add('disable')
} else {
	nextBtn.classList.remove('disable')
	preBtn.classList.remove('disable')
}
}