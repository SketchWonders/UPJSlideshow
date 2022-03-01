//Vue.js stuff

new Vue({
    el: '#app',
    data: {
        images: ['tiger.jpg', 'wolf.jpg', 'lion.jpg', 'lynx.jpg'],
		imageWidth:640,
		currentImage:0
    },
    methods: {
        nextImage() {
            this.currentImage = (this.currentImage + 1) % this.images.length;
        },
        previousImage(){
			this.currentImage = (this.images.length + this.currentImage - 1) % this.images.length;
		}
    }
});
