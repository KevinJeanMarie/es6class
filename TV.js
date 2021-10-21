class TV {
    constructor(brand,channel,volume){
        this.brand = brand
        this.channel = channel 
        this.volume = volume 
    }
upvolume (up){
this.volume = this.volume + up

}

downvolume(down){
this.volume = this.volume - down

}

changechannel (change){
    this.channel = this.channel 

}
brandtv (Sony){
    this.brand = this.brand 
}
}

let tv= new TV ("sony", 50, 50)
console.log(tv)


