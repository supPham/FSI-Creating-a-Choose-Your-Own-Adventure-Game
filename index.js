let firstAnswer  = window.prompt('Do you head LEFT or RIGHT?')

if(firstAnswer === 'left'){
let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you FOLLOW it, or CONTINUE on your path?`)

    if(secondAnswer ==='follow'){
        let thirdAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you STAYing, but you wonder if you should ALERT the world to this magical safe haven.')
            if(thirdAnswer ==='stay'){
                window.alert('You live happily amongst the cats for the rest of your days.')
            }
            else if(thirdAnswer ==='alert'){
                window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
            }
}
    else if(secondAnswer === 'continue'){
        let thirdAnswer = window.prompt('You come across a chamber that reaches upward to a shining light above. There is a long, winding STAIRCASE, and a much quicker, but rickety-looking LADDER that leads up toward the light. Which do you take?')
            if(thirdAnswer ==='ladder'){
                window.alert('After ascending a few feet up the latter, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.')
            }
            else if(thirdAnswer ==='staircase'){
                window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')
            }
}
} else if(firstAnswer === 'right'){
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`)
}

