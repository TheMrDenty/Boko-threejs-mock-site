import * as THREE from "three";
import Experience from "../Experience";

export default class Room{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        console.log(this.room);
        this.actualRoom = this.room.scene;
        
        this.setModel();

        
    }

    setModel() {
        this.scene.add(this.actualRoom);
    }


    resize(){
        
    }

    update(){
        
    }
}