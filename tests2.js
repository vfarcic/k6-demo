import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 2000,
  duration: '30s',
};

export default function () {
  http.get('https://www.devopstoolkitseries.com');
  sleep(0.5);
}
