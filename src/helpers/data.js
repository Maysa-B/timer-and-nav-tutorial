import digital from '../assets/sound/digital-clock.mp3';
import analogic from '../assets/sound/analogic-clock.mp3';
import alarm1 from '../assets/sound/alarm-1.mp3';
import alarm2 from '../assets/sound/alarm-2.mp3';
import alarm3 from '../assets/sound/alarm-3.mp3';
import alarm4 from '../assets/sound/alarm-4.mp3';

const sounds = {
  alarm: [
    { name: 'Alarm 1', src: alarm1},
    { name: 'Alarm 2', src: alarm2},
    { name: 'Alarm 3', src: alarm3},
    { name: 'Alarm 4', src: alarm4},
  ],
  ticking: {
    digital,
    analogic,
  }
}

export default sounds;