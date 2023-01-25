const playMusice = (e) => {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    // console.log(key);
    // console.log(audio);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

  window.addEventListener('keydown', playMusice);

  const endTransition = (e) => {
    if (e.propertyName !== 'transform') return;
    // console.log(`this is target ${e.target}`);
    e.target.classList.remove('playing');
  }


  const musicKey = document.querySelectorAll('.key');
  musicKey.forEach(key => key.addEventListener('transitionend', endTransition));