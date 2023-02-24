import * as THREE from 'three';

import Sizes from './Utils/Sizes';
import Time from './Utils/Time.js'

import Camera from './Camera';
import Renderer from './Renderer';

import World from './World/World';

export default class Experience{
	static instance;
    constructor(canvas){
		if(Experience.instance){
			return Experience.instance
		}
		Experience.instance = this
        this.canvas = canvas;
		this.scene = new THREE.Scene();
		this.sizes = new Sizes();
		this.camera = new Camera();
		this.renderer = new Renderer();
		this.time = new Time();
		this.World = new World();
		
		this.time.on("update", () => {
			this.update();
		})
		this.sizes.on("resize", () => {
			this.resize();
		})
    }

	resize() {
		this.camera.resize();
		this.renderer.resize();
	}

	update() {
		this.camera.update();
		this.renderer.update();
	}
	
}