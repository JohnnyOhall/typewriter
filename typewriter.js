const sentence = "hello there from lighthouse labs";

const animate = () => {
  let x = 0
  let output = sentence + '\n'

  for (const char of output) {
    setTimeout(() => {process.stdout.write(char)}, x)
    x += 50
  }
}

animate();