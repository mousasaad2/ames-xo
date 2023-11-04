let clicked = document.querySelectorAll( ".container div" )
let btn = document.querySelectorAll( ".but button" )
let btnDisblay = document.querySelector( ".but" )
let opcate = document.querySelector( ".opcate" )
let all = document.querySelector( ".all" )
let end = document.querySelector( ".end" )
let test = true
let result;
let result2;
let index = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 2, 5, 8 ],
    [ 1, 4, 7 ],
    [ 0, 3, 6 ],
    [ 2, 4, 6 ],
    [ 0, 4, 8 ]
]

btn.forEach( ( btn ) =>
{
    btn.addEventListener( "click", ( e ) =>
    {
        result = e.currentTarget.textContent
        result2 = result === "X" ? "O" : "X"
        btnDisblay.style.visibility = "hidden"
        opcate.style.display = "none"
    } )
} )

function playOne ()
{
    all.style.display = "none"
    clicked.forEach( ( div, ind ) =>
    {
        div.addEventListener( "click", ( e ) =>
        {
            end.textContent = ""
            if ( test )
            {
                if ( !div.textContent )
                {
                    test = false
                    e.currentTarget.style.pointerEvents = "none"
                    e.currentTarget.textContent = result
                    end.textContent = ` دور ${result2}`
                    e.currentTarget.style.color = "red"
                    end.style.color = "blue"
                    div.setAttribute( "id", ind )
                    one()
                }
            }
            test = true
            setTimeout( () =>
            {
                cmpuoter()
                two()
            }, 100 )
        } )
    } )
}

function playTwo(){
    all.style.display = "none"
    clicked.forEach( ( div, ind ) =>
{
    div.addEventListener( "click", ( e ) =>
    {
        if ( test )
        {
            if ( result != undefined )
            {
                test = false
                e.currentTarget.style.pointerEvents = "none"
                e.currentTarget.textContent = result
                end.textContent = ` دور  ${result2 = result === "X" ? "O" : "X"}`
                end.style.color = "blue"
                e.currentTarget.style.color = "red"
                div.setAttribute("id",ind)
                one()
            }
        }
        else
        {
            test = true
            var result2 = result === "X" ? "O" : "X"
            e.currentTarget.style.pointerEvents = "none"
            e.currentTarget.textContent = result2
            end.textContent = ` دور  ${result}`
            e.currentTarget.style.color = "blue"
            end.style.color = "red"
            div.setAttribute("id",ind)
            two(result2)
        }
    } )
} )
}

function one(){
    if(clicked[0].id == index[0][0]&&
        clicked[1].id == index[0][1]&&
        clicked[2].id == index[0][2]&&
        clicked[0].innerHTML === result&&
        clicked[1].innerHTML === result&&
        clicked[2].innerHTML === result){
            clicked[0].style.opacity = "0.5"
            clicked[1].style.opacity = "0.5"
            clicked[2].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
        }
    if(clicked[3].id == index[1][0]&&
        clicked[4].id == index[1][1]&&
        clicked[5].id == index[1][2]&&
        clicked[3].innerHTML === result&&
        clicked[4].innerHTML === result&&
        clicked[5].innerHTML === result){
            clicked[3].style.opacity = "0.5"
            clicked[4].style.opacity = "0.5"
            clicked[5].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
    }
    if(clicked[6].id == index[2][0]&&
        clicked[7].id == index[2][1]&&
        clicked[8].id == index[2][2]&&
        clicked[6].innerHTML === result&&
        clicked[7].innerHTML === result&&
        clicked[8].innerHTML === result){
            clicked[6].style.opacity = "0.5"
            clicked[7].style.opacity = "0.5"
            clicked[8].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
    }
    if(clicked[2].id == index[3][0]&&
        clicked[5].id == index[3][1]&&
        clicked[8].id == index[3][2]&&
        clicked[2].innerHTML === result&&
        clicked[5].innerHTML === result&&
        clicked[8].innerHTML === result){
            clicked[2].style.opacity = "0.5"
            clicked[5].style.opacity = "0.5"
            clicked[8].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
    }
    if(clicked[1].id == index[4][0]&&
        clicked[4].id == index[4][1]&&
        clicked[7].id == index[4][2]&&
        clicked[1].innerHTML === result&&
        clicked[4].innerHTML === result&&
        clicked[7].innerHTML === result){
            clicked[1].style.opacity = "0.5"
            clicked[4].style.opacity = "0.5"
            clicked[7].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
    }
    if(clicked[0].id == index[5][0]&&
        clicked[3].id == index[5][1]&&
        clicked[6].id == index[5][2]&&
        clicked[0].innerHTML === result&&
        clicked[3].innerHTML === result&&
        clicked[6].innerHTML === result){
            clicked[0].style.opacity = "0.5"
            clicked[3].style.opacity = "0.5"
            clicked[6].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
    }
    if(clicked[2].id == index[6][0]&&
        clicked[4].id == index[6][1]&&
        clicked[6].id == index[6][2]&&
        clicked[2].innerHTML === result&&
        clicked[4].innerHTML === result&&
        clicked[6].innerHTML === result){
            clicked[2].style.opacity = "0.5"
            clicked[4].style.opacity = "0.5"
            clicked[6].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
    }
    if(clicked[0].id == index[7][0]&&
        clicked[4].id == index[7][1]&&
        clicked[8].id == index[7][2]&&
        clicked[0].innerHTML === result&&
        clicked[4].innerHTML === result&&
        clicked[8].innerHTML === result){
            clicked[0].style.opacity = "0.5"
            clicked[4].style.opacity = "0.5"
            clicked[8].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
    }
}

function two(){
    if(clicked[0].id == index[0][0]&&
        clicked[1].id == index[0][1]&&
        clicked[2].id == index[0][2]&&
        clicked[0].innerHTML === result2&&
        clicked[1].innerHTML === result2&&
        clicked[2].innerHTML === result2){
            clicked[0].style.opacity = "0.5"
            clicked[1].style.opacity = "0.5"
            clicked[2].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
        }
    if(clicked[3].id == index[1][0]&&
        clicked[4].id == index[1][1]&&
        clicked[5].id == index[1][2]&&
        clicked[3].innerHTML === result2&&
        clicked[4].innerHTML === result2&&
        clicked[5].innerHTML === result2){
            clicked[3].style.opacity = "0.5"
            clicked[4].style.opacity = "0.5"
            clicked[5].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
    }
    if(clicked[6].id == index[2][0]&&
        clicked[7].id == index[2][1]&&
        clicked[8].id == index[2][2]&&
        clicked[6].innerHTML === result2&&
        clicked[7].innerHTML === result2&&
        clicked[8].innerHTML === result2){
            clicked[6].style.opacity = "0.5"
            clicked[7].style.opacity = "0.5"
            clicked[8].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
    }
    if(clicked[2].id == index[3][0]&&
        clicked[5].id == index[3][1]&&
        clicked[8].id == index[3][2]&&
        clicked[2].innerHTML === result2&&
        clicked[5].innerHTML === result2&&
        clicked[8].innerHTML === result2){
            clicked[2].style.opacity = "0.5"
            clicked[5].style.opacity = "0.5"
            clicked[8].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
    }
    if(clicked[1].id == index[4][0]&&
        clicked[4].id == index[4][1]&&
        clicked[7].id == index[4][2]&&
        clicked[1].innerHTML === result2&&
        clicked[4].innerHTML === result2&&
        clicked[7].innerHTML === result2){
            clicked[1].style.opacity = "0.5"
            clicked[4].style.opacity = "0.5"
            clicked[7].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
    }
    if(clicked[0].id == index[5][0]&&
        clicked[3].id == index[5][1]&&
        clicked[6].id == index[5][2]&&
        clicked[0].innerHTML === result2&&
        clicked[3].innerHTML === result2&&
        clicked[6].innerHTML === result2){
            clicked[0].style.opacity = "0.5"
            clicked[3].style.opacity = "0.5"
            clicked[6].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
    }
    if(clicked[2].id == index[6][0]&&
        clicked[4].id == index[6][1]&&
        clicked[6].id == index[6][2]&&
        clicked[2].innerHTML === result2&&
        clicked[4].innerHTML === result2&&
        clicked[6].innerHTML === result2){
            clicked[2].style.opacity = "0.5"
            clicked[4].style.opacity = "0.5"
            clicked[6].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
    }
    if(clicked[0].id == index[7][0]&&
        clicked[4].id == index[7][1]&&
        clicked[8].id == index[7][2]&&
        clicked[0].innerHTML === result2&&
        clicked[4].innerHTML === result2&&
        clicked[8].innerHTML === result2){
            clicked[0].style.opacity = "0.5"
            clicked[4].style.opacity = "0.5"
            clicked[8].style.opacity = "0.5"
            setTimeout(()=>{location.reload()},2000)
            clicked.forEach((e)=>{e.style.pointerEvents = "none"})
    }
}

function cmpuoter(){
    end.textContent = ""
    let arr = []
    clicked.forEach((e,ind)=>{
        if(!e.textContent){
            arr.push(ind)
        }
    })
    if(arr.length > 0){
        let rund = Math.floor(Math.random()*arr.length)
        var scelct = arr[rund]
        var res = clicked[scelct]
        res.textContent = result2
        end.textContent = ` دور  ${result}`
        res.setAttribute("id",scelct)
        res.style.color = "blue"
        end.style.color = "red"
        res.style.pointerEvents = "none"
    }
}



