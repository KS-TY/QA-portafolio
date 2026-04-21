import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL, DEFAULT_PARAMS } from './config.js';
import { THRESHOLDS } from './thresholds.js';

export const options = {
  stages: [
    { duration: '2m', target: 50 },
    { duration: '10m', target: 50 }, // carga sostenida
    { duration: '2m', target: 0 },
  ],
  thresholds: THRESHOLDS,
};

export default function () {
  const res = http.get(`${BASE_URL}/products`, DEFAULT_PARAMS);

  check(res, {
    'status 200': (r) => r.status === 200,
  });

  sleep(1);
}