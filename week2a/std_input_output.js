const question_signal = 
  "What light is it?"

const ask_question = () => {
  process.stdout.write(question_signal);
  process.stdout.write(` > `);
}

ask_question()

process.stdin.once('data', (data) => {
  console.log('You answered '+ data)
  data = data.toString().trim().toLowerCase()
  if (data==='red') {
    console.log('red light, stop')
  } else if (data==='yellow'){
    console.log('yellow light, caution')
  } else if (data==='green'){
    console.log('green light, go')
  } else {
    console.log('invalid signal')
    
  }
  
  // process.exit();
  
  
})




