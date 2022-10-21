function contar (){

    var ini = document.getElementById("in")
    var res = document.getElementById("res")
    res.innerHTML = null

    if (ini.value.length == 0){
        res.innerHTML = `IMPOSSÍVEL CONTAR`

    } else {
        var x = 1
        var y = 0
        var i = Number(ini.value)
        for (let c = x ; c <= 10 ; c += 1){
            y = c * i
            res.innerHTML += ` ${i} x ${c} = ${y}` + '<br>'
        }
        }    
    }